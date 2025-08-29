import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
// @ts-ignore
import Database from 'better-sqlite3';

// Tipi principali
interface User {
  id?: number;
  nome: string;
  cognome: string;
  matricola: string;
  corso: string;
  anno: string;
  email: string;
  password: string;
}

interface Prenotazione {
  id?: number;
  user_id: number;
  data: string;
  ora_inizio: number;
  ora_fine: number;
  numero_persone: number;
}

interface Occupazione {
  ora_inizio: number;
  totale: number;
}

// Apriamo il database esistente con better-sqlite3
const dbPath = path.join(__dirname, 'data', 'users.db');
const db = new Database(dbPath, { verbose: console.log });
console.log('Connesso al database SQLite con better-sqlite3.');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json()); // sostituisce body-parser

// Servire i file statici del frontend
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Rotta per la home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

// ------------------- ROUTE -------------------

// Registrazione utente
app.post('/register', (req: Request, res: Response) => {
  const { nome, cognome, matricola, corso, anno, email, password }: User = req.body;

  console.log("DATI CHE ARRIVANO DAL FRONTEND:", req.body);

  try {
    const stmt = db.prepare(`INSERT INTO users (nome, cognome, matricola, corso, anno, email, password)
                             VALUES (?, ?, ?, ?, ?, ?, ?)`);
    const info = stmt.run(nome, cognome, matricola, corso, anno, email, password);
    res.status(200).json({ success: true, message: 'Registrazione avvenuta con successo!', id: info.lastInsertRowid });
  } catch (err: any) {
    console.error('Errore durante la registrazione:', err.message);
    if (err.message.includes('users.email')) {
      return res.status(409).json({ error: 'Email già registrata.' });
    } else if (err.message.includes('users.matricola')) {
      return res.status(409).json({ error: 'Matricola già registrata.' });
    } else {
      return res.status(500).json({ error: 'Errore generico durante la registrazione.' });
    }
  }
});

// Login utente
app.post('/login', (req: Request, res: Response) => {
  const { email, password }: Pick<User, 'email' | 'password'> = req.body;

  try {
    const stmt = db.prepare(`SELECT id FROM users WHERE email = ? AND password = ?`);
    const row = stmt.get(email, password);

    if (row) {
      res.json({ success: true, message: 'Login riuscito!', user_id: row.id });
    } else {
      res.status(401).json({ error: 'Credenziali non valide.' });
    }
  } catch (err: any) {
    console.error('Errore login:', err.message);
    res.status(500).json({ error: 'Errore del server durante il login.' });
  }
});

// Controllo disponibilità prenotazioni
app.post('/check-availability', (req: Request, res: Response) => {
  const { data, ora_inizio, ora_fine, numero_persone } = req.body;

  const slotList = Array.from({ length: ora_fine - ora_inizio }, (_, i) => ora_inizio + i);
  const placeholders = slotList.map(() => '?').join(', ');

  try {
    const query = `
      SELECT ora_inizio, SUM(numero_persone) AS totale
      FROM prenotazioni
      WHERE data = ? AND ora_inizio IN (${placeholders})
      GROUP BY ora_inizio
    `;
    const stmt = db.prepare(query);
    const rows: Occupazione[] = stmt.all(data, ...slotList);

    const occupazioni: Record<number, number> = {};
    rows.forEach(row => {
      occupazioni[row.ora_inizio] = row.totale;
    });

    let tuttiDisponibili = true;
    for (let slot of slotList) {
      const occupati = occupazioni[slot] || 0;
      if (occupati + numero_persone > 70) {
        tuttiDisponibili = false;
        break;
      }
    }

    if (tuttiDisponibili) {
      res.json({ success: true, disponibile: true });
    } else {
      res.json({ success: false, error: 'Posti esauriti in almeno uno degli slot richiesti.' });
    }
  } catch (err: any) {
    console.error('Errore nel controllo disponibilità:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Inserimento prenotazione
app.post('/make-reservation', (req: Request, res: Response) => {
  const { user_id, data, ora_inizio, ora_fine, numero_persone }: Prenotazione = req.body;

  try {
    const stmt = db.prepare(`
      INSERT INTO prenotazioni (user_id, data, ora_inizio, ora_fine, numero_persone)
      VALUES (?, ?, ?, ?, ?)
    `);
    const info = stmt.run(user_id, data, ora_inizio, ora_fine, numero_persone);

    res.json({
      success: true,
      message: 'Prenotazione effettuata con successo!',
      booking: {
        id: info.lastInsertRowid,
        data,
        ora_inizio,
        ora_fine,
        numero_persone
      }
    });
  } catch (err: any) {
    console.error('Errore inserimento prenotazione:', err.message);
    res.status(500).json({ success: false, error: 'Errore durante la prenotazione.' });
  }
});

// Recupero prenotazioni dell'utente
app.get('/my-reservations/:user_id', (req: Request, res: Response) => {
  const user_id = parseInt(req.params.user_id);

  try {
    const stmt = db.prepare(`
      SELECT * FROM prenotazioni
      WHERE user_id = ?
      ORDER BY data, ora_inizio
    `);
    const rows: Prenotazione[] = stmt.all(user_id);
    res.json({ success: true, prenotazioni: rows });
  } catch (err: any) {
    console.error('Errore recupero prenotazioni:', err.message);
    res.status(500).json({ error: 'Errore nel recupero delle prenotazioni.' });
  }
});

// Cancellazione prenotazione
app.delete('/prenotazioni/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const stmt = db.prepare(`DELETE FROM prenotazioni WHERE id = ?`);
    const info = stmt.run(id);

    if (info.changes === 0) {
      return res.status(404).json({ success: false, error: 'Prenotazione non trovata.' });
    }
    res.json({ success: true });
  } catch (err: any) {
    console.error('Errore durante la cancellazione:', err.message);
    res.status(500).json({ success: false, error: 'Errore interno.' });
  }
});

// ------------------- MODIFICA PRENOTAZIONE -------------------
app.put('/prenotazioni/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { data, ora_inizio, ora_fine, numero_persone }: Prenotazione = req.body;

  try {
    // Verifica che la prenotazione esista
    const checkStmt = db.prepare(`SELECT * FROM prenotazioni WHERE id = ?`);
    const existing = checkStmt.get(id);

    if (!existing) {
      return res.status(404).json({ success: false, error: 'Prenotazione non trovata.' });
    }

    // Aggiorna la prenotazione
    const updateStmt = db.prepare(`
      UPDATE prenotazioni
      SET data = ?, ora_inizio = ?, ora_fine = ?, numero_persone = ?
      WHERE id = ?
    `);
    updateStmt.run(data, ora_inizio, ora_fine, numero_persone, id);

    res.json({
      success: true,
      message: 'Prenotazione aggiornata con successo!',
      booking: {
        id,
        data,
        ora_inizio,
        ora_fine,
        numero_persone
      }
    });
  } catch (err: any) {
    console.error('Errore aggiornamento prenotazione:', err.message);
    res.status(500).json({ success: false, error: 'Errore durante l\'aggiornamento.' });
  }
});

// ------------------- AVVIO SERVER -------------------
app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});

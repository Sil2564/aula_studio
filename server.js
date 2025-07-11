const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

// Connessione al database SQLite
const dbPath = path.join(__dirname, 'users.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Errore nella connessione al database:', err.message);
  } else {
    console.log('Connesso al database SQLite.');
  }
});

app.post('/register', (req, res) => {
  const { nome, cognome, matricola, corso, anno, email, password } = req.body;

  console.log("DATI CHE ARRIVANO DAL FRONTEND:", req.body);

  const query = `INSERT INTO users (nome, cognome, matricola, corso, anno, email, password)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.run(query, [nome, cognome, matricola, corso, anno, email, password], function (err) {
    if (err) {
      console.error('Errore durante la registrazione:', err.message);
      if (err.message.includes('users.email')) {
        return res.status(409).json({ error: 'Email già registrata.' });
      } else if (err.message.includes('users.matricola')) {
        return res.status(409).json({ error: 'Matricola già registrata.' });
      } else {
        return res.status(500).json({ error: 'Errore generico durante la registrazione.' });
      }
    }
    res.status(200).json({ success: true, message: 'Registrazione avvenuta con successo!' });
  });
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = `SELECT id FROM users WHERE email = ? AND password = ?`;

  db.get(query, [email, password], (err, row) => {
    if (err) {
      console.error('Errore login:', err.message);
      res.status(500).json({ error: 'Errore del server durante il login.' });
    } else if (row) {
      res.json({ success: true, message: 'Login riuscito!', user_id: row.id });
    } else {
      res.status(401).json({ error: 'Credenziali non valide.' });
    }
  });
});


app.post('/check-availability', (req, res) => {
  const { data, ora_inizio, ora_fine, numero_persone } = req.body;

  const slotList = Array.from({ length: ora_fine - ora_inizio }, (_, i) => ora_inizio + i);
  const placeholders = slotList.map(() => '?').join(', ');
  const query = `
    SELECT ora_inizio, SUM(numero_persone) AS totale
    FROM prenotazioni
    WHERE data = ? AND ora_inizio IN (${placeholders})
    GROUP BY ora_inizio
  `;

  db.all(query, [data, ...slotList], (err, rows) => {
    if (err) {
      console.error('Errore nel controllo disponibilità:', err.message);
      return res.status(500).json({ success: false, error: err.message });
    }

    const occupazioni = {};
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
  });
});


app.post('/make-reservation', (req, res) => {
  const { user_id, data, ora_inizio, ora_fine, numero_persone } = req.body;

  const insert = `
    INSERT INTO prenotazioni (user_id, data, ora_inizio, ora_fine, numero_persone)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(insert, [user_id, data, ora_inizio, ora_fine, numero_persone], function (err) {
    if (err) {
      console.error('Errore inserimento prenotazione:', err.message);
      res.status(500).json({ success: false, error: 'Errore durante la prenotazione.' });
    } else {
      res.json({
        success: true,
        message: 'Prenotazione effettuata con successo!',
        booking: {
          id: this.lastID,
          data,
          ora_inizio,
          ora_fine,
          numero_persone
        }
      });
    }
  });
});


app.get('/my-reservations/:user_id', (req, res) => {
  const user_id = req.params.user_id;

  const query = `
    SELECT * FROM prenotazioni
    WHERE user_id = ?
    ORDER BY data, ora_inizio
  `;

  db.all(query, [user_id], (err, rows) => {
    if (err) {
      console.error('Errore recupero prenotazioni:', err.message);
      res.status(500).json({ error: 'Errore nel recupero delle prenotazioni.' });
    } else {
      res.json({ success: true, prenotazioni: rows });
    }
  });
});


// Endpoint per cancellare una prenotazione
app.delete('/prenotazioni/:id', (req, res) => {
  const id = req.params.id;
  db.run(
    `DELETE FROM prenotazioni WHERE id = ?`,
    [id],
    function(err) {
      if (err) {
        console.error('Errore durante la cancellazione:', err.message);
        return res.status(500).json({ success: false, error: 'Errore interno.' });
      }
      if (this.changes === 0) {
        return res.status(404).json({ success: false, error: 'Prenotazione non trovata.' });
      }
      res.json({ success: true });
    }
  );
});

// AVVIO SERVER
app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});

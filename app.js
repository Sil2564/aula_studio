const Home = {
  template: `
  <section>
      <h2>Benvenuto nell'Aula Studio!</h2>
      <div class="page-container">
          <div class="home-section">
              <h3>Un Ambiente Perfetto per il Tuo Studio</h3>
              <p>
                  L'Aula Studio è il luogo ideale per concentrarti, studiare in tranquillità e massimizzare la tua produttività. Con spazi ben organizzati, un'atmosfera silenziosa e risorse moderne, abbiamo creato l'ambiente perfetto per ogni tipo di studio.
              </p>
              <p>
                  Che tu sia uno studente universitario, un ricercatore o un professionista in cerca di un posto tranquillo, troverai il nostro spazio completamente attrezzato per soddisfare le tue esigenze.
              </p>
          </div>


          <div class="home-section">
              <h3>Cos'è l'Aula Studio?</h3>
              <p>
                  L'Aula Studio è una struttura pensata per offrire ai suoi utenti un luogo sereno, sicuro e attrezzato dove studiare individualmente o in gruppo. Ogni postazione è dotata di Wi-Fi ad alta velocità, prese di corrente, e scrivanie spaziose.
              </p>
              <p>
                  Puoi prenotare la tua sessione di studio in modo facile e veloce, sia per te che per un gruppo di amici, assicurandoti il posto che preferisci. Disponiamo di spazi per sessioni di studio singole o per gruppi di varie dimensioni.
              </p>
          </div>


          <div class="home-section">
              <h3>Vantaggi della Nostra Aula Studio</h3>
              <ul>
                  <li><strong>Ambiente tranquillo:</strong> ideale per concentrarti e lavorare senza distrazioni.</li>
                  <li><strong>Postazioni attrezzate:</strong> scrivanie ampie, Wi-Fi veloce, prese di corrente.</li>
                  <li><strong>Flessibilità nella prenotazione:</strong> scegli l'orario che preferisci e prenota facilmente.</li>
                  <li><strong>Spazi per gruppi:</strong> prenota una postazione per te e i tuoi amici.</li>
              </ul>
          </div>


          <div class="home-section">
              <h3>Unisciti a Noi!</h3>
              <p>
                  Siamo sempre pronti ad accoglierti con entusiasmo! Prenota il tuo posto nell'Aula Studio e inizia a studiare in un ambiente che stimola la concentrazione e la produttività. Che aspetti? Unisciti alla nostra community di studenti e professionisti!
              </p>
          </div>
      </div>
  </section>`,
  mounted() {
    // Eventuali funzionalità JavaScript
  }
};








const contatti = {
  template: `
  <section>
      <h2>Contatti</h2>
          <ul class="contatti-list">
              <li>
                  <strong>Orari aula studio:</strong><br>
                      Aperta tutti i giorni dalle 8:00 alle 20:00
              </li>
              <li>
                  <strong>Numero di telefono:</strong><br>
                  <a href="tel:+1234567890" title="Chiama">
                  +1234567890
                  </a>
              </li>
              <li>
                  <strong>Email:</strong><br>
                  <a href="mailto:info@laulastudio.com" title="Manda Email">
                  info@laulastudio.com
                  </a>
              </li>
              <li>
                  <strong>Indirizzo:</strong><br>
                  <a href="https://www.google.com/maps" title="Posizione">
                      Via Cesare Pavese, 50, 47521 Cesena FC
                  </a>
              </li>
          </ul>
      </section>
      `,
};
















const aiuto = {
  template: `
  <section>
      <h2>Aiuto</h2>
          <p>
              Benvenuto nella pagina di supporto! Qui troverai tutte le informazioni utili per utilizzare al meglio il nostro sistema di gestione dell’aula studio.
              Se hai bisogno di ulteriore assistenza, siamo a tua disposizione.
          </p>
          <ol class="supporto-list">
              <li>
                  <strong>Gestione Account</strong><br>
                  <ul>
                      <li><strong>Non riesco ad accedere al mio account. Cosa devo fare?</strong><br>
                          Assicurati di aver inserito la mail e la password corretti.<br>
                          Usa la funzione <em>Recupera password</em> se hai dimenticato le credenziali.<br>
                          Se il problema persiste, contattaci.
                      </li>
                      <li><strong>Come posso aggiornare i miei dati personali?</strong><br>
                          Accedi al tuo account, vai nella sezione <em>Impostazioni personali</em> e modifica le informazioni necessarie.
                      </li>
                      <li><strong>Come cancello il mio account?</strong><br>
                          Se desideri eliminare il tuo account, contattaci direttamente all’indirizzo email:
                          <a href="mailto:info@laulastudio.com">info@laulastudio.com</a>.
                      </li>
                  </ul>
              </li>
              <li>
                  <strong>Uso dell'Aula Studio</strong><br>
                  <ul>
                      <li><strong>Devo fare il check-in quando arrivo?</strong><br>
                          No, ti basterà occupare la postazione con il numero indicato nella mail di conferma.
                      </li>
                      <li><strong>Cosa succede se non mi presento?</strong><br>
                          Se non ti presenti entro 15 minuti dall’orario di inizio prenotato, il tuo posto sarà rilasciato per altri utenti.
                      </li>
                      <li><strong>Posso condividere la mia prenotazione con un amico?</strong><br>
                          No, le prenotazioni sono personali e non trasferibili.
                      </li>
                  </ul>
              </li>
              <li>
                  <strong>Risoluzione dei Problemi</strong><br>
                  <ul>
                      <li><strong>Non riesco a completare una prenotazione. Cosa devo fare?</strong><br>
                          Assicurati che la connessione Internet sia stabile.<br>
                          Verifica di aver inserito il codice matricola.<br>
                          Prova a uscire e rientrare dal tuo account.
                      </li>
                      <li><strong>Il sistema segnala che l’aula è piena. Come mi organizzo?</strong><br>
                          Puoi scegliere un altro orario o un altro giorno.
                      </li>
                  </ul>
              </li>
              <li>
                  <strong>Domande Frequenti</strong><br>
                  <ul>
                      <li><strong>Quali sono gli orari dell’aula studio?</strong><br>
                          Gli orari sono disponibili nella sezione <em>Informazioni sull’aula</em>. In generale, siamo aperti tutti i giorni dalle 8:00 alle 20:00.
                      </li>
                      <li><strong>Ci sono costi per l’utilizzo del servizio?</strong><br>
                          No, ma come requisito devi essere studente iscritto all’università.
                      </li>
                  </ul>
              </li>
              <li>
                  <strong>Regolamento e Sicurezza</strong><br>
                  <ul>
                      <li><strong>Quali sono le regole di utilizzo?</strong><br>
                          Trovi il regolamento completo nella pagina <em>Regolamento dell’Aula Studio</em>.
                      </li>
                      <li><strong>Come viene garantita la sicurezza in aula?</strong><br>
                          L’aula è monitorata da personale e videocamere. Inoltre, ogni prenotazione è registrata per garantire il tracciamento degli accessi.
                      </li>
                  </ul>
              </li>
              <li>
                  <strong>Come Contattarci</strong><br>
                  Se non hai trovato la risposta che cercavi, contattaci!<br>
                  Email: <a href="mailto:info@laulastudio.com">info@laulastudio.com</a><br>
                  Telefono: <a href="tel:+391234567890">+39 123 456 7890</a><br>
                 
              </li>
          </ol>
          <p>
              Grazie per aver scelto il nostro servizio di aula studio!<br>
              Il nostro obiettivo è offrire un’esperienza confortevole e organizzata. Se hai suggerimenti, faccelo sapere!
          </p>
      </section> `,
















};
















const eventi = {
  template: `
      <section>
          <h2>Bacheca degli Incontri Culturali</h2>
          <p>
              Benvenuti alla bacheca eventi dell’aula studio! Qui troverai l’elenco degli incontri culturali programmati per i prossimi giorni. Tutti gli eventi sono gratuiti e aperti al pubblico, ti aspettiamo!
          </p>
         
          <div class="event" v-for="event in eventiOrdinati" :key="event.id">
              <h3>{{ event.title }}</h3>
              <p><strong>Data:</strong> {{ event.date }}</p>
              <p><strong>Orario:</strong> {{ event.time }}</p>
              <p><strong>Descrizione:</strong> {{ event.description }}</p>
              <p v-if="event.speakers"><strong>Relatori:</strong> {{ event.speakers }}</p>
              <p v-if="event.note" class="note"><em>{{ event.note }}</em></p>
              <a v-if="event.link" :href="event.link" target="_blank">Prenotazione</a>
              <hr />
          </div>
      </section>
  `,
  data() {
      return {
          eventi: [
              {
                  id: 1,
                  title: "Conferenza: 'Le Nuove Frontiere dell'Intelligenza Artificiale'",
                  dateISO: '2025-02-03',
                  date: 'Mercoledì, 3 Febbraio 2025',
                  time: '17:00 - 19:00',
                  description: 'Un approfondimento sul futuro dell’intelligenza artificiale e il suo impatto sulla società, con il professore di tecnologia Alessandro Greco. Evento ideale per appassionati di tecnologia, innovazione e filosofia.'
              },
              {
                  id: 2,
                  title: "Workshop: 'Adolescenti e Social Media – Tra Opportunità e Rischi'",
                  dateISO: '2025-03-20',
                  date: 'Martedì, 20 Marzo 2025',
                  time: '16:00 - 18:00',
                  description: 'Un incontro interattivo per genitori, educatori e adolescenti sul rapporto tra giovani e social media. Scopri come promuovere un uso consapevole delle piattaforme digitali.',
                  speakers: 'Psicologa dell’età evolutiva Dr.ssa Claudia Ferri, Esperto di comunicazione digitale Luca Verri'
              },
              {
                  id: 3,
                  title: "Conferenza: 'Cybersecurity – Proteggere i Giovani nel Mondo Digitale'",
                  dateISO: '2025-03-04',
                  date: 'Venerdì, 4 Marzo 2025',
                  time: '9:00 - 11:00',
                  description: 'Scopri come proteggere la tua privacy e prevenire cybercrimini. Il focus sarà sull’educazione digitale per adolescenti e genitori, con strategie pratiche per navigare in sicurezza.',
                  speakers: 'Etico Hacker Andrea Conti, Giurista esperto di privacy Dr.ssa Elena Russo'
              },
              {
                  id: 4,
                  title: "Evento: 'Sicurezza Stradale, non rischiare'",
                  dateISO: '2025-02-13',
                  date: 'Lunedì, 13 Febbraio 2025',
                  time: '15:00 - 17:00',
                  description: 'Una giornata dedicata alla sensibilizzazione sulla sicurezza stradale. Parleremo di guida responsabile, con dimostrazioni pratiche e testimonianze.',
                  speakers: 'Istruttore di guida sicura Marco Rinaldi, Rappresentanti della Polizia Locale'
              },
              {
                  id: 5,
                  title: "Talk: 'Agenda 2030 – Il Futuro in Mano ai Giovani'",
                  dateISO: '2025-02-22',
                  date: 'Sabato, 22 Febbraio 2025',
                  time: '16:00 - 18:00',
                  description: 'Un dibattito interattivo per esplorare gli obiettivi di sviluppo sostenibile dell’Agenda 2030, con focus su istruzione di qualità, parità di genere e cambiamento climatico.',
                  speakers: 'Educatore ambientale Giorgio Neri, Attivista per i diritti umani Sara Bellini'
              }
          ]
      };
  },
  computed: {
      eventiOrdinati() {
          return this.eventi.slice().sort((a, b) => new Date(a.dateISO) - new Date(b.dateISO));
      }
  }
};


const panoramica = {
  template: `
    <section class="panoramica-section">
      <h2>Panoramica della Prenotazione</h2>
      <div class="panoramica-steps">
        <div class="step">
          <h3>1. Accedi al tuo account o creane uno nuovo</h3>
          <p>Per poter effettuare una prenotazione, è necessario accedere al tuo account. Se non possiedi ancora un account, puoi facilmente crearne uno nuovo in pochi passaggi.</p>
        </div>
        <div class="step">
          <h3>2. Inserisci la data, l’ora e il numero di persone</h3>
          <p>Specifica la data e l’ora della prenotazione, oltre al numero di persone che parteciperanno. Assicurati che le informazioni siano corrette prima di procedere.</p>
        </div>
        <div class="step">
          <h3>3. Premi “Prenota”</h3>
          <p>Una volta che tutte le informazioni sono state inserite, clicca sul pulsante “Prenota” per finalizzare la tua richiesta. Riceverai una conferma della prenotazione.</p>
        </div>
        <div class="step">
          <h3>4. Visualizza il numero del tavolo assegnato</h3>
          <p>Una volta effettuata la prenotazione, nella sezione "Le mie prenotazioni" potrai visualizzare il numero del tavolo che ti è stato assegnato. Assicurati di controllare questa sezione per ulteriori dettagli.</p>
        </div>
      </div>
    </section>
  `,
};




const prenota = {
  template: `
    <section class="centered-section">
      <h2>Prenota</h2>            
      <p>Accedi per prenotare la tua sessione presso L'Aula Studio.</p>




      <!-- Form di login -->
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>




      <!-- Messaggio di errore o successo -->
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      <div v-if="successMessage" class="success">{{ successMessage }}</div>




      <div v-if="!isLoggedIn">
        Non hai un account?
        <a @click.prevent="goToRegistration">Registrati qui</a>
      </div>
    </section>
  `,
  data() {
    return {
      email: '',
      password: '',
      successMessage: '',
      errorMessage: '',
      isLoggedIn: false // Stato per sapere se l'utente è loggato
    };
  },
  methods: {
    // Funzione per il login
    async login() {
      try {
        const response = await fetch('http://localhost:8000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          }),
        });




        const data = await response.json();




        if (response.ok) {
          // Login riuscito
          this.successMessage = data.message;
          this.errorMessage = '';
          this.isLoggedIn = true; // Utente loggato, cambia stato
         
          // Salva i dati di login in sessionStorage
          // SALVA L’ID DELL’UTENTE
          sessionStorage.setItem('user', JSON.stringify({
            email: this.email,
            id: data.user_id   // 👈 questo deve arrivare dal backend
          }));


          // Fai il redirect alla pagina prenota2 dopo un breve delay
          setTimeout(() => {
            this.$router.push({ name: 'prenota2' }); // Vai alla vista prenota2
          }, 1000);  // Imposta un piccolo delay (1 secondo) per vedere il messaggio di successo prima del redirect
        } else {
          // Errore nel login
          this.errorMessage = data.error;
          this.successMessage = '';
        }
      } catch (error) {
        console.error('Errore nella richiesta di login:', error);
        this.errorMessage = 'Errore nel tentativo di login.';
        this.successMessage = '';
      }
    },




    // Metodo per navigare alla registrazione
    goToRegistration() {
      this.$router.push({ name: 'registrati' });
    },
  },
  mounted() {
    // Verifica se l'utente è già loggato al caricamento della pagina
    const user = sessionStorage.getItem('user');
    if (user) {
      // Se i dati di login sono trovati in sessionStorage, reindirizza automaticamente
      this.$router.push({ name: 'prenota2' });
    }
  },
};  
































const registrati = {
  template: `
      <section class="page-container">
          <h2>Registrazione</h2>
          <p>Compila i seguenti campi per registrarti.</p>








          <form @submit.prevent="submitRegistration">
              <input type="text" v-model="nome" placeholder="Inserisci il tuo nome" required>
              <input type="text" v-model="cognome" placeholder="Inserisci il tuo cognome" required>
              <input type="text" v-model="matricola" placeholder="Inserisci la tua matricola"
                  pattern="\\d{10}" maxlength="10"
                  title="La matricola deve essere composta da 10 cifre numeriche" required>
              <select v-model="corso" required>
                  <option disabled value="">Scegli il tuo corso</option>
                  <option value="Architettura">Architettura</option>
                  <option value="Ingegneria biomedica">Ingegneria biomedica</option>
                  <option value="Ingegneria elettronica">Ingegneria elettronica</option>
                  <option value="Ingegneria e scienze informatiche">Ingegneria e scienze informatiche</option>
                  <option value="Scienze e cultura della gastronomia">Scienze e cultura della gastronomia</option>
                  <option value="Scienze e tecniche psicologiche">Scienze e tecniche psicologiche</option>
                  <option value="Tecnologie alimentari">Tecnologie alimentari</option>
                  <option value="Tecnologie dei sistemi informatici">Tecnologie dei sistemi informatici</option>
                  <option value="Viticoltura ed enologia">Viticoltura ed enologia</option>
              </select>
              <select v-model="anno" required>
                  <option disabled value="">Scegli l'anno</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="Fuoricorso">Fuoricorso</option>
              </select>
              <input type="email" v-model="regEmail" placeholder="Inserisci la tua email" required>
              <input type="password" v-model="regPassword" placeholder="Inserisci la tua password" required>
              <button type="submit">Registrati</button>
          </form>








          <div v-if="regError" class="error-message">
              {{ regError }}
          </div>








          <div v-if="successMessage" class="success-message">
              {{ successMessage }}
          </div>








          <div>
              Hai già un account? <a @click.prevent="goToLogin">Accedi qui</a>
          </div>
      </section>
  `,








  data() {
      return {
          nome: '',
          cognome: '',
          matricola: '',
          corso: '',
          anno: '',
          regEmail: '',
          regPassword: '',
          regError: null,
          successMessage: null,
      };
  },
  methods: {
      submitRegistration() {
          const formData = {
              nome: this.nome,
              cognome: this.cognome,
              matricola: this.matricola,
              corso: this.corso,
              anno: this.anno,
              email: this.regEmail,
              password: this.regPassword
          };
 
          fetch('http://localhost:8000/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          })
          .then(response => response.json())
          .then(data => {
              if (data.success) {
                  this.regError = null;
                  this.successMessage = data.message;
                  setTimeout(() => {
                      this.successMessage = null;
                      this.$router.push({ name: 'prenota' }); // Vai alla pagina di login
                  }, 3000);
              } else if (data.error) {
                  this.regError = data.error;
              }
          })
          .catch(err => {
              console.error('Errore durante la registrazione:', err);
              this.regError = 'Si è verificato un errore. Riprova.';
          });
      },
      goToLogin() {
          this.$router.push({ name: 'prenota' });
      },
  },
}    



const prenota2 = {
  template: `
  <section>
    <h2>Effettua una Prenotazione</h2>
    <form v-if="!isBookingConfirmed" @submit.prevent="checkAvailability">
      <label for="data">Data:</label>
      <input type="date" v-model="data" id="data" required />

      <label for="slot">Ora di inizio:</label>
      <select v-model="slot" id="slot" required>
        <option v-for="orario in orari" :value="orario.slot">{{ orario.label }}</option>
      </select>

      <label for="durata">Durata (ore):</label>
      <select v-model="durata" id="durata" required>
        <option v-for="n in durataMassima" :key="n" :value="n">{{ n }}</option>
      </select>


      <label for="posti">Numero di posti:</label>
      <input type="number" v-model.number="posti" id="posti" min="1" max="4" required />

      <button type="submit">Verifica Disponibilità</button>
    </form>

    <div v-if="availabilityMessage && !isBookingConfirmed" :class="{ success: isAvailable, error: !isAvailable }">
      {{ availabilityMessage }}
    </div>

    <div v-if="isAvailable && !isBookingConfirmed">
      <button @click="showConfirmation">Conferma Prenotazione</button>
    </div>

    <div v-if="isBookingConfirmed">
      <p>La tua prenotazione è stata confermata!</p>
      <a href="#" @click.prevent="reloadPage">Prenota un'altra sessione</a>
    </div>

    <h3>Le mie prenotazioni</h3>

    <div v-if="!isLoading && prenotazioni.length === 0">
      <p>Non hai ancora prenotazioni.</p>
    </div>

    <table v-if="!isLoading && prenotazioni.length > 0" class="prenotazioni-table">
      <thead>
        <tr>
          <th>Data</th>
          <th>Ora di Inizio</th>
          <th>Ora di Fine</th>
          <th>Numero di Posti</th>
          <th>Azioni</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="booking in prenotazioni" :key="booking.id">
          <td>{{ booking.data }}</td>
          <td>{{ convertiSlot(booking.ora_inizio) }}</td>
          <td>{{ convertiSlot(booking.ora_fine) }}</td>
          <td>{{ booking.numero_persone }}</td>
          <td>
            <button @click="deleteReservation(booking.id)">Cancella</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="isLoading">
      <p>Caricamento delle prenotazioni...</p>
    </div>
  </section>
  `,
  data() {
    return {
      data: '',
      slot: 1,
      durata: 1,
      durataOpzioni: [1, 2],
      posti: 1,
      orari: Array.from({ length: 12 }, (_, i) => ({
        slot: i + 1,
        label: `${8 + i}:00 - ${9 + i}:00`
      })),
      availabilityMessage: '',
      isAvailable: false,
      isBookingConfirmed: false,
      prenotazioni: [],
      isLoading: true,
    };
  },
  computed: {
    durataMassima() {
      return this.slot === 12 ? 1 : 2;
    }
  },

  methods: {
    convertiSlot(slot) {
      const ora = 8 + (parseInt(slot) - 1);
      return `${ora.toString().padStart(2, '0')}:00`;
    },

    async checkAvailability() {
      try {
        const slotInizio = parseInt(this.slot);
        const slotFine = slotInizio + parseInt(this.durata);

        const response = await fetch('http://localhost:8000/check-availability', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: this.data,
            ora_inizio: slotInizio,
            ora_fine: slotFine,
            numero_persone: this.posti
          }),
        });

        const result = await response.json();
        if (result.success) {
          this.isAvailable = true;
          this.availabilityMessage = 'Posti disponibili!';
        } else {
          this.isAvailable = false;
          this.availabilityMessage = result.error;
        }
      } catch (err) {
        console.error('Errore nella verifica:', err);
      }
    },

    async showConfirmation() {
      const conferma = window.confirm('Vuoi confermare la prenotazione?');
      if (conferma) await this.confirmBooking();
    },

    async confirmBooking() {
      try {
        const userId = JSON.parse(sessionStorage.getItem('user'))?.id || 1;

        const slotInizio = parseInt(this.slot);
        const slotFine = slotInizio + parseInt(this.durata);

        const response = await fetch('http://localhost:8000/make-reservation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: userId,
            data: this.data,
            ora_inizio: slotInizio,
            ora_fine: slotFine,
            numero_persone: this.posti
          }),
        });

        const result = await response.json();
        if (result.success) {
          this.isBookingConfirmed = true;
          this.prenotazioni.push(result.booking);
        }
        alert(result.message);
      } catch (err) {
        console.error('Errore prenotazione:', err);
      }
    },

    async deleteReservation(id) {
      // 1) chiedo conferma all’utente
      if (!window.confirm('Sei sicuro di voler eliminare questa prenotazione?')) {
        return;
      }
      try {
        // 2) chiamo il DELETE sul server
        const res = await fetch(`http://localhost:8000/prenotazioni/${id}`, {
          method: 'DELETE'
        });
        const json = await res.json();
        if (json.success) {
          // 3) rimuovo localmente la prenotazione appena cancellata
          this.prenotazioni = this.prenotazioni.filter(b => b.id !== id);
        } else {
          alert('Errore: ' + (json.error || 'impossibile cancellare'));
        }
      } catch (err) {
        console.error('Delete error:', err);
        alert('Si è verificato un errore durante la cancellazione.');
      }
    
  },
    

  watch: {
    slot(newSlot) {
      const slotInt = parseInt(newSlot);
      if (slotInt === 12) {
        this.durataOpzioni = [1];
        if (this.durata > 1) this.durata = 1; // forza 1h se era 2
      } else {
        this.durataOpzioni = [1, 2];
      }
    }
  },


    reloadPage() {
      window.location.reload();
    }
  },
  mounted() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const userId = user?.id;
    if (!userId) {
      console.error("ID utente non trovato nella sessione.");
      return;
    }

    this.isLoading = true;
    fetch(`http://localhost:8000/my-reservations/${userId}`)
      .then(res => res.json())
      .then(data => {
        this.isLoading = false;
        this.prenotazioni = data.success ? data.prenotazioni : [];
      })
      .catch(err => {
        this.isLoading = false;
        console.error('Errore caricamento:', err);
        this.prenotazioni = [];
      });
  }
};








const regolamento = {
  template: `
      <section class="page-container">
          <h2>Regolamento dell’Aula Studio</h2>
          <p>
              Benvenuto! Per garantire un ambiente sereno e organizzato, tutti gli utenti dell’aula studio sono tenuti a rispettare le regole riportate in questa pagina.
              La mancata osservanza potrebbe comportare sanzioni, incluso il divieto di accesso.
          </p>
          <ol class="regolamento-list">
              <li>
                  <strong>Accesso all'Aula Studio</strong><br>
                  L'accesso è consentito solo agli utenti registrati e in possesso di una prenotazione valida.<br>
                  Gli orari di apertura sono: 08:00 - 20:00, tutti i giorni, salvo comunicazioni straordinarie.
              </li>
              <li>
                  <strong>Prenotazioni</strong><br>
                  Ogni utente può prenotare un massimo di 2 sessioni al giorno, ogni sessione può essere della durata di 1, 2 o 3 ore.<br>
                  Le prenotazioni devono essere effettuate online tramite il nostro portale sul sito ufficiale.<br>
                  La cancellazione della prenotazione è possibile fino a 10 minuti prima dell'orario di inizio.
              </li>
              <li>
                  <strong>Comportamento in Aula</strong><br>
                  È richiesto il massimo silenzio per garantire un ambiente di studio ideale.<br>
                  Sono vietati comportamenti rumorosi come telefonate, discussioni o utilizzo di dispositivi senza cuffie.<br>
                  Dispositivi elettronici come laptop, tablet e smartphone devono essere usati in modalità silenziosa.<br>
                  È vietato consumare pasti all’interno dell’aula. Sono consentiti snack leggeri e bevande in bottiglie o termos chiusi.<br>
                  Ogni utente è responsabile dei propri oggetti personali. L’aula studio non si assume responsabilità per eventuali smarrimenti o furti.
              </li>
              <li>
                  <strong>Pulizia e Cura degli Spazi</strong><br>
                  Lascia il posto pulito e in ordine al termine della tua sessione.<br>
                  Utilizza i cestini per gettare rifiuti.<br>
                  È vietato spostare sedie o tavoli senza autorizzazione.
              </li>
              <li>
                  <strong>Postazioni e Regole di Occupazione</strong><br>
                  Ogni postazione può essere occupata da un solo utente, non è possibile spostare le sedie di postazione.<br>
                  Non è possibile eccedere il numero di postazioni occupate senza aver prima modificato la prenotazione.<br>
                  Il tempo di permanenza consentito alla postazione termina alla fine della sessione prenotata.
              </li>
              <li>
                  <strong>Sicurezza e Emergenze</strong><br>
                  Segui sempre le indicazioni del personale in caso di emergenza o evacuazione.<br>
                  È vietato accedere a zone riservate o non autorizzate.<br>
                  Ogni comportamento pericoloso o che violi le norme di sicurezza sarà sanzionato.
              </li>
              <li>
                  <strong>Sanzioni e Penalità</strong><br>
                  Il mancato rispetto delle regole può comportare:<br>
                  - Avvisi o richiami formali.<br>
                  - Sospensione temporanea dell’accesso all’aula studio.<br>
                  - Esclusione permanente nei casi più gravi.<br>
                  Le penalità verranno notificate via email con i dettagli della violazione.
              </li>
              <li>
                  <strong>Contatti per Segnalazioni</strong><br>
                  Se noti comportamenti inappropriati o hai bisogno di assistenza:<br>
                  Email: <a href="mailto:info@laulastudio.com">support@laulastudio.com</a><br>
                  Telefono: <a href="tel:+1234567890">+39 123 456 7890</a>
              </li>
          </ol>
          <p>Grazie per la collaborazione! Il rispetto di queste regole ci aiuta a garantire un ambiente di studio piacevole ed efficiente per tutti.</p>
      </section>
  `,
  data() {
      return {};
  },
  methods: {
      // Eventuali metodi futuri per interazioni con questa vista
  },
};


// Configura il router Vue
const routes = [
  { path: '/', component: Home },
  { path: '/contatti', component: contatti },
  { path: '/aiuto', component: aiuto },
  { path: '/eventi', component: eventi },
  { path: '/panoramica', component: panoramica },
  { path: '/prenota', name: 'prenota', component: prenota },
  { path: '/prenota2', name: 'prenota2', component: prenota2 },
  { path: '/registrati', name: 'registrati', component: registrati },
  { path: '/regolamento', component: regolamento },
];


const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});


// Crea l'app Vue
const app = Vue.createApp({});
app.use(router);
app.mount('#app');


















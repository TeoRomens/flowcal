"use client";

export default function Page() {
  return (
      <main>
        <div className="py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-2 lg:max-w-none">
              <h1 className="font-sans font-bold tracking-tight mb-8 mt-1 text-primary text-4xl sm:text-5xl lg:text-6xl">
                Termini di Servizio
              </h1>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 md:px-7 max-sm:text-sm">
          <div className="space-y-2 md:px-8 pb-16">
            Data: 20 Marzo 2025
            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Introduzione</h2>
            <p>
              Questi Termini di Servizio (“Termini”) regolano l’uso delle nostre pagine web
              situate all’indirizzo https://flowcal.it, gestite da Matteo Roman, matteoroman4@gmail.com.
            </p>
            <p>
              Anche la nostra Informativa sulla Privacy regola l’uso del nostro Servizio e spiega come raccogliamo,
              proteggiamo e divulghiamo le informazioni derivanti dall’utilizzo delle nostre pagine web. Puoi leggerla
              qui: <a href={"/privacy"} className="underline">https://flowcal.it/privacy</a>.
            </p>
            <p>
              Il tuo accordo con noi include questi Termini e la nostra Informativa sulla Privacy (“Accordi”). Confermi
              di aver letto e compreso gli Accordi e accetti di esserne vincolato.
            </p>
            <p>Se non sei d’accordo con gli Accordi (o non puoi rispettarli), non potrai utilizzare il Servizio. Ti
              invitiamo comunque a contattarci all’indirizzo email supporto@flowcal.it, così da poter cercare una
              soluzione.
            </p>
            <p>Questi Termini si applicano a tutti i visitatori, utenti e altri soggetti che desiderano accedere o
              utilizzare il Servizio.
            </p>
            <p>Grazie per la tua collaborazione!</p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">
              Comunicazioni
            </h2>
            <p>Creando un account sul nostro Servizio, accetti di iscriverti a newsletter, materiali di marketing o
              promozionali e ad altre informazioni che potremmo inviarti. Tuttavia, puoi decidere di non ricevere più
              alcuna comunicazione, o tutte, seguendo il link per annullare l’iscrizione o inviando un’email a
              supporto@flowcal.it.
            </p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Acquisti</h2>
            <p>Se desideri acquistare un prodotto o un servizio messo a disposizione tramite il Servizio (“Acquisto”),
              ti potrebbe essere richiesto di fornire alcune informazioni rilevanti per il tuo acquisto, inclusi, a
              titolo esemplificativo, il numero della tua carta di credito, la data di scadenza della carta, il tuo
              indirizzo di fatturazione e le tue informazioni di spedizione.
            </p>
            <p>Dichiari e garantisci che: (i) hai il diritto legale di utilizzare qualsiasi carta di credito o altro
              metodo di pagamento in relazione a un acquisto; e che (ii) le informazioni che fornisci sono vere,
              corrette e complete.</p>
            <p>Potremmo avvalerci di servizi di terze parti per facilitare il pagamento e completare gli acquisti.
              Inviando le tue informazioni, ci concedi il diritto di fornirle a questi soggetti terzi, secondo quanto
              previsto dalla nostra Informativa sulla Privacy.
            </p>
            <p>Ci riserviamo il diritto di rifiutare o annullare il tuo ordine in qualsiasi momento per motivi tra cui,
              ma non solo: disponibilità del prodotto o servizio, errori nella descrizione o nel prezzo del prodotto o
              servizio, errore nel tuo ordine o altri motivi.
            </p>
            <p>Ci riserviamo il diritto di rifiutare o annullare il tuo ordine se sospettiamo frodi o transazioni non
              autorizzate o illegali.
            </p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Abbonamenti</h2>
            <p>Alcune parti del Servizio sono fatturate su base di abbonamento (“Abbonamento/i”). Sarai fatturato in
              anticipo in modo ricorrente e periodico (“Ciclo di Fatturazione”). I cicli di fatturazione sono impostati
              su base mensile o annuale, a seconda del tipo di piano di abbonamento che selezioni al momento
              dell’acquisto di un Abbonamento.
            </p>
            <p>Al termine di ciascun Ciclo di Fatturazione, il tuo Abbonamento si rinnoverà automaticamente alle stesse
              condizioni, salvo che tu lo annulli o che Flowcal.it lo annulli. Puoi annullare il rinnovo del tuo
              Abbonamento tramite la pagina di gestione del tuo account online o contattando il team di supporto clienti
              di Flowcal.it.</p>
            <p>Per elaborare il pagamento del tuo abbonamento è necessario un metodo di pagamento valido, inclusi carta
              di credito o PayPal. Dovrai fornire a Flowcal.it. informazioni di fatturazione accurate e complete,
              comprese nome completo, indirizzo, stato, codice postale, numero di telefono e informazioni valide sul
              metodo di pagamento. Inviando tali informazioni di pagamento, autorizzi automaticamente Flowcal.it, ad
              addebitare tutte le commissioni relative all’Abbonamento accumulate tramite il tuo account su uno di
              questi strumenti di pagamento.</p>
            <p>Nel caso in cui la fatturazione automatica non avvenga per qualsiasi motivo, Flowcal.it. emetterà una
              fattura elettronica che indica che dovrai procedere manualmente, entro una certa scadenza, con il
              pagamento completo corrispondente al periodo di fatturazione come indicato nella fattura.</p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Prova
              Gratuita</h2>
            <p>Flowcal.it può, a sua discrezione, offrire un Abbonamento con una prova gratuita per un periodo di
              tempo limitato (“Prova Gratuita”).
            </p>
            <p>Potrebbe esserti richiesto di inserire le tue informazioni di fatturazione per iscriverti alla Prova
              Gratuita.</p>
            <p>Se inserisci le tue informazioni di fatturazione al momento dell’iscrizione alla Prova Gratuita, non ti
              verrà addebitato nulla da Flowcal.it,  fino alla scadenza della Prova Gratuita. Nell’ultimo giorno del
              periodo di Prova Gratuita, a meno che tu non abbia annullato il tuo Abbonamento, ti verranno
              automaticamente addebitate le tariffe di Abbonamento applicabili per il tipo di Abbonamento che hai
              selezionato.
            </p>
            <p>In qualsiasi momento e senza preavviso, Flowcal.it, si riserva il diritto di (i) modificare i Termini
              di Servizio dell’offerta della Prova Gratuita, o (ii) cancellare tale offerta di Prova Gratuita.</p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Modifiche alle Tariffe</h2>
            <p>Flowcal.it, a sua discrezione e in qualsiasi momento, può modificare le tariffe di abbonamento per gli
              Abbonamenti. Qualsiasi modifica delle tariffe di abbonamento entrerà in vigore alla fine del Ciclo di
              Fatturazione in corso.
            </p>
            <p>Flowcal.it, ti fornirà un ragionevole preavviso di qualsiasi cambiamento nelle tariffe di abbonamento
              per darti l’opportunità di terminare il tuo Abbonamento prima che tale cambiamento diventi effettivo.
            </p>
            <p>Il tuo continuo utilizzo del Servizio dopo l’entrata in vigore della modifica della tariffa di
              abbonamento costituisce il tuo accordo a pagare l’importo della tariffa di abbonamento modificata.</p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Rimborsi</h2>
            <p>Salvo quanto richiesto dalla legge, le tariffe di abbonamento pagate non sono rimborsabili.</p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Contenuti</h2>
            <p>Il nostro Servizio ti consente di pubblicare, collegare, archiviare, condividere e rendere disponibili
              determinate informazioni, testi, grafiche, video o altro materiale (“Contenuto”). Sei responsabile per il
              Contenuto che pubblichi su o tramite il Servizio, inclusa la sua legalità, affidabilità e adeguatezza.
            </p>
            <p>Pubblicando Contenuti su o tramite il Servizio, dichiari e garantisci che: (i) il Contenuto ti appartiene
              (ne possiedi i diritti) e/o hai il diritto di usarlo e il diritto di concederci i diritti e la licenza
              come previsto nei presenti Termini, e (ii) che la pubblicazione del tuo Contenuto su o tramite il Servizio
              non viola i diritti di privacy, i diritti di pubblicità, i diritti d’autore, i diritti contrattuali o
              altri diritti di qualsiasi persona o entità. Ci riserviamo il diritto di terminare l’account di chiunque
              venga trovato a violare un diritto d’autore.
            </p>
            <p>Conservi tutti i diritti su qualsiasi Contenuto che invii, pubblichi o visualizzi su o tramite il
              Servizio e sei responsabile per la protezione di tali diritti. Non ci assumiamo alcuna responsabilità e
              non rispondiamo per il Contenuto che tu o terze parti pubblicate su o tramite il Servizio. Tuttavia,
              pubblicando Contenuti tramite il Servizio, ci concedi il diritto e la licenza di utilizzare, modificare,
              eseguire pubblicamente, visualizzare pubblicamente, riprodurre e distribuire tali Contenuti su e tramite
              il Servizio. Accetti che questa licenza includa il diritto di rendere il tuo Contenuto disponibile ad
              altri utenti del Servizio, che potranno utilizzare il tuo Contenuto soggetto a questi Termini.
            </p>
            <p>Flowcal.it, ha il diritto, ma non l’obbligo, di monitorare ed editare tutti i Contenuti forniti dagli
              utenti. Inoltre, i Contenuti trovati su o tramite questo Servizio sono di proprietà di Flowcal.it, o
              utilizzati con permesso. Non puoi distribuire, modificare, trasmettere, riutilizzare, scaricare,
              ripubblicare, copiare o usare detto Contenuto, in tutto o in parte, per scopi commerciali o per guadagno
              personale, senza espressa autorizzazione scritta preventiva da parte nostra.</p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Utilizzi Vietati</h2>
            <p>Puoi utilizzare il Servizio solo per scopi leciti e in conformità con i Termini. Accetti di non
              utilizzare il Servizio:
            </p>
            <ul>
              <li>In qualsiasi modo che violi leggi o regolamenti nazionali o internazionali applicabili.</li>
              <li>Per lo scopo di sfruttare, danneggiare o tentare di sfruttare o danneggiare minorenni in qualsiasi
                modo, esponendoli a contenuti inappropriati o altrimenti.
              </li>
              <li>Per trasmettere, o procurare l’invio, di materiale pubblicitario o promozionale, inclusi “posta
                indesiderata”, “catene di Sant’Antonio”, “spam” o qualsiasi altra sollecitazione simile.
              </li>
              <li>Per impersonare o tentare di impersonare la Società, un dipendente della Società, un altro utente o
                qualsiasi altra persona o entità.
              </li>
              <li>In qualsiasi modo che violi i diritti degli altri, o in qualsiasi modo che sia illegale, minaccioso,
                fraudolento o dannoso, o in relazione a qualsiasi scopo o attività illecita, illegale, fraudolenta o
                dannosa.
              </li>
              <li>Per impegnarti in qualsiasi altra condotta che limiti o inibisca l’uso o il godimento del Servizio da
                parte di chiunque, o che, come determinato da noi, possa danneggiare o offendere la Società o gli utenti
                del Servizio, o esporli a responsabilità.
              </li>
            </ul>
            <p>Inoltre, accetti di non:</p>
            <ul>
              <li>Utilizzare il Servizio in qualsiasi modo che possa disabilitare, sovraccaricare, danneggiare o
                compromettere il Servizio o interferire con l’uso del Servizio da parte di altri, incluso il loro
                diritto di partecipare ad attività in tempo reale attraverso il Servizio.
              </li>
              <li>Utilizzare qualsiasi robot, spider, o altro dispositivo automatico, processo o mezzo per accedere al
                Servizio per qualsiasi scopo, inclusi il monitoraggio o la copia di materiale presente sul Servizio.
              </li>
              <li>Utilizzare qualsiasi processo manuale per monitorare o copiare qualsiasi materiale sul Servizio o per
                qualsiasi altro scopo non autorizzato senza il nostro previo consenso scritto.
              </li>
              <li>Utilizzare qualsiasi dispositivo, software o routine che interferisca con il corretto funzionamento
                del Servizio.
              </li>
              <li>Introdurre virus, cavalli di Troia, worm, bombe logiche o altro materiale dannoso o tecnologicamente
                dannoso.
              </li>
              <li>Tentare di ottenere accesso non autorizzato, interferire con, danneggiare o disturbare qualsiasi parte
                del Servizio, il server su cui è archiviato il Servizio, o qualsiasi server, computer o database
                connesso al Servizio.
              </li>
              <li>Attaccare il Servizio tramite un attacco denial-of-service o un attacco distributed
                denial-of-service.
              </li>
              <li>Compire qualsiasi azione che possa danneggiare o falsificare la valutazione della Società.</li>
              <li>Altrimenti tentare di interferire con il corretto funzionamento del Servizio.</li>
            </ul>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Nessun Uso da
              Parte di Minori</h2>
            <p>Il Servizio è destinato esclusivamente all’accesso e all’uso da parte di individui di almeno diciotto
              (18) anni. Accedendo o utilizzando qualsiasi parte della Società, dichiari e garantisci di avere almeno
              diciotto (18) anni di età e di avere la piena autorità, diritto e capacità di entrare in questo accordo e
              rispettare tutti i termini e le condizioni dei Termini. Se non hai almeno diciotto (18) anni, ti è vietato
              accedere e utilizzare il Servizio.</p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Accounts</h2>
            <p>Quando crei un account con noi, garantisci di avere almeno 18 anni e che le informazioni che ci fornisci
              siano accurate, complete e aggiornate in ogni momento. Informazioni inaccurate, incomplete o obsolete
              possono comportare la cessazione immediata del tuo account sul Servizio.
            </p>
            <p>Sei responsabile per mantenere la riservatezza del tuo account e della tua password, inclusi, ma non
              limitati a, restrizioni di accesso al tuo computer e/o account. Accetti di assumerti la responsabilità per
              tutte le attività o azioni che si verificano sotto il tuo account e/o password, che sia con il nostro
              Servizio o un servizio di terze parti. Devi avvisarci immediatamente appena vieni a conoscenza di
              qualsiasi violazione della sicurezza o utilizzo non autorizzato del tuo account.
            </p>
            <p>In determinate circostanze, hai i seguenti diritti in materia di protezione dei dati:
            </p>
            <p>Non puoi utilizzare come nome utente il nome di un’altra persona o entità o un nome che non sia
              legalmente disponibile per l’uso, né un nome o marchio soggetto a diritti di un’altra persona o entità, a
              meno che tu non abbia l’autorizzazione appropriata. Non puoi utilizzare come nome utente alcun nome che
              sia offensivo, volgare o osceno.
            </p>
            <p>Ci riserviamo il diritto di rifiutare il servizio, terminare account, rimuovere o modificare contenuti o
              annullare ordini a nostra discrezione.</p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Proprietà intellettuale</h2>
            <p>Il Servizio e i suoi contenuti originali (escludendo i contenuti forniti dagli utenti), caratteristiche e
              funzionalità sono e rimarranno proprietà esclusiva di Flowcal.it, e dei suoi licenziatari. Il Servizio è
              protetto da copyright, marchio commerciale e altre leggi di paesi esteri. I nostri marchi e il nostro
              design commerciale non possono essere utilizzati in connessione con qualsiasi prodotto o servizio senza il
              previo consenso scritto di Flowcal.it.</p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Politica sul Copyright</h2>
            <p>Rispettiamo i diritti di proprietà intellettuale di altri. La nostra politica è rispondere a qualsiasi
              reclamo che il contenuto pubblicato sul Servizio violi il copyright o altri diritti di proprietà
              intellettuale (“Violazione”) di qualsiasi persona o entità.
            </p>
            <p>Se sei il proprietario di un copyright, o sei autorizzato a rappresentare uno, e credi che l’opera
              protetta da copyright sia stata copiata in un modo che costituisce una violazione del copyright, ti
              preghiamo di inviare il tuo reclamo via email a supporto@flowcal.it, con l’oggetto: “Violazione del Copyright” e
              di includere nel tuo reclamo una descrizione dettagliata della presunta Violazione.
            </p>
            <p>Potresti essere ritenuto responsabile per danni (inclusi costi e spese legali) per dichiarazioni
              false o infondate riguardanti la violazione di qualsiasi contenuto trovato e/o attraverso il Servizio sul
              tuo copyright.</p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Report di Errori e Feedback</h2>
            <p>Puoi fornirci informazioni e feedback riguardanti errori, suggerimenti per miglioramenti, idee, problemi,
              reclami e altre questioni relative al nostro Servizio (“Feedback”) direttamente all’indirizzo email
              supporto@flowcal.it o tramite siti e strumenti di terze parti. Riconosci e accetti che:
              (i) non acquisirai né potrai rivendicare alcun diritto di proprietà intellettuale o altro diritto, titolo
              o interesse sul Feedback;
              (ii) l’azienda potrebbe avere idee di sviluppo simili al Feedback;
              (iii) il Feedback non contiene informazioni riservate o proprietarie tue o di terzi;
              (iv) l’azienda non è soggetta ad alcun obbligo di riservatezza in relazione al Feedback.</p>
            <p>Nel caso in cui il trasferimento della proprietà del Feedback non sia possibile a causa di leggi
              obbligatorie applicabili, concedi all’azienda e alle sue affiliate un diritto esclusivo, trasferibile,
              irrevocabile, gratuito, sublicenziabile, illimitato e perpetuo di utilizzare (inclusa la copia, modifica,
              creazione di opere derivate, pubblicazione, distribuzione e commercializzazione) il Feedback in qualsiasi
              modo e per qualsiasi scopo.
            </p>
            <p>Gli strumenti di terze parti menzionati includono:</p>
            <p><strong>Sentry</strong>, una soluzione open-source per il monitoraggio degli errori fornita da Functional Software Inc.
              Maggiori informazioni qui: <a href={"https://sentry.io/privacy/"}
                                            className="underline">https://sentry.io/privacy/</a></p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Collegamenti a Siti Web di Terze Parti</h2>
            <p>Il nostro Servizio può contenere collegamenti a siti web o servizi di terze parti che non sono di
              proprietà o controllati da Flowcal.it.
            </p>
            <p>Flowcal.it non ha alcun controllo e non si assume alcuna responsabilità per il contenuto, le politiche
              sulla privacy o le pratiche di qualsiasi sito web o servizio di terze parti. Non garantiamo le offerte di
              tali entità, individui o dei loro siti web.
            </p>
            <p>RICONOSCI E ACCETTI CHE FLOWCAL.IT NON SARÀ RESPONSABILE, DIRETTAMENTE O INDIRETTAMENTE, PER DANNI O
              PERDITE DERIVANTI O PRESUNTAMENTE DERIVANTI DALL’USO O DALL’AFFIDAMENTO SU QUALSIASI CONTENUTO, BENE O
              SERVIZIO DISPONIBILE SU O TRAMITE QUALSIASI SITO WEB O SERVIZIO DI TERZE PARTI.
            </p>
            <p>TI CONSIGLIAMO VIVAMENTE DI LEGGERE I TERMINI DI SERVIZIO E LE POLITICHE SULLA PRIVACY DI QUALSIASI SITO
              WEB O SERVIZIO DI TERZE PARTI CHE VISITI.</p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Esclusione di Garanzia</h2>
            <p>I SERVIZI SONO FORNITI DALL’AZIENDA SU BASE “COSÌ COM’È” E “COME DISPONIBILE”. L’AZIENDA NON RILASCIA
              ALCUNA DICHIARAZIONE O GARANZIA DI ALCUN TIPO, ESPRESSA O IMPLICITA, RIGUARDO AL FUNZIONAMENTO DEI
              SERVIZI, O ALL’INFORMAZIONE, CONTENUTO O MATERIALE INCLUSO NEGLI STESSI. ACCETTI ESPRESSAMENTE CHE L’USO
              DEI SERVIZI, DEI LORO CONTENUTI E DI QUALSIASI SERVIZIO O ELEMENTO OTTENUTO DA NOI È A TUO ESCLUSIVO
              RISCHIO.
            </p>
            <p>NÉ L’AZIENDA NÉ ALCUN SOGGETTO AD ESSA ASSOCIATO RILASCIANO ALCUNA GARANZIA O DICHIARAZIONE RELATIVAMENTE
              ALLA COMPLETEZZA, SICUREZZA, AFFIDABILITÀ, QUALITÀ, ACCURATEZZA O DISPONIBILITÀ DEI SERVIZI. SENZA
              LIMITARE QUANTO SOPRA, NÉ L’AZIENDA NÉ CHIUNQUE SIA ASSOCIATO ALL’AZIENDA DICHIARANO O GARANTISCONO CHE I
              SERVIZI, I LORO CONTENUTI O QUALSIASI SERVIZIO O ELEMENTO OTTENUTO ATTRAVERSO I SERVIZI SARÀ ACCURATO,
              AFFIDABILE, PRIVO DI ERRORI O ININTERROTTO, CHE EVENTUALI DIFETTI SARANNO CORRETTI, CHE I SERVIZI O IL
              SERVER CHE LI RENDE DISPONIBILI SIANO PRIVI DI VIRUS O DI ALTRI COMPONENTI DANNOSI O CHE I SERVIZI O
              QUALSIASI ELEMENTO OTTENUTO TRAMITE I SERVIZI SODDISFERÀ LE TUE ESIGENZE O ASPETTATIVE.
            </p>
            <p>L’AZIENDA DECLINA OGNI GARANZIA DI QUALSIASI TIPO, ESPRESSA O IMPLICITA, STATUTARIA O ALTRIMENTI,
              INCLUSE, MA NON LIMITATE A, QUALSIASI GARANZIA DI COMMERCIABILITÀ, NON VIOLAZIONE E IDONEITÀ A UN
              PARTICOLARE SCOPO.
            </p>
            <p>QUANTO SOPRA NON INCIDE SU EVENTUALI GARANZIE CHE NON POSSANO ESSERE ESCLUSE O LIMITATE AI SENSI DELLA
              LEGGE APPLICABILE.</p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Limitazione di Responsabilità</h2>
            <p>SALVO QUANTO VIETATO DALLA LEGGE, MANLEVIAMO NOI E I NOSTRI DIRIGENTI, DIRETTORI, DIPENDENTI E AGENTI DA
              QUALSIASI DANNO INDIRETTO, PUNITIVO, SPECIALE, ACCIDENTALE O CONSEQUENZIALE, INDIPENDENTEMENTE DA COME SI
              VERIFICHI (INCLUSI ONORARI LEGALI E TUTTI I COSTI E LE SPESE RELATIVI A CONTENZIOSI E ARBITRATI, O IN SEDE
              DI PROCESSO O APPELLO, INDIPENDENTEMENTE DALL’AVVIO DI UN CONTENZIOSO O ARBITRATO), SIA CHE DERIVI DA UN
              CONTRATTO, NEGLIGENZA O ALTRA AZIONE ILLECITA, O CHE NASCA DA O IN RELAZIONE A QUESTO ACCORDO. CIÒ
              INCLUDE, SENZA LIMITAZIONE, QUALSIASI RECLAMO PER LESIONI PERSONALI O DANNI MATERIALI DERIVANTI DA QUESTO
              ACCORDO E DA QUALSIASI VIOLAZIONE DA PARTE DELL’UTENTE DI QUALSIASI LEGGE FEDERALE, STATALE O LOCALE,
              REGOLAMENTO O NORMATIVA, ANCHE SE L’AZIENDA È STATA PREVENTIVAMENTE INFORMATA DELLA POSSIBILITÀ DI TALI
              DANNI.
              SALVO QUANTO VIETATO DALLA LEGGE, QUALORA VENISSE RISCONTRATA UNA RESPONSABILITÀ A CARICO DELL’AZIENDA,
              QUESTA SARÀ LIMITATA ALL’IMPORTO PAGATO PER I PRODOTTI E/O SERVIZI E, IN NESSUN CASO, SARANNO PREVISTI
              DANNI CONSEQUENZIALI O PUNITIVI. ALCUNI STATI NON CONSENTONO L’ESCLUSIONE O LA LIMITAZIONE DI DANNI
              PUNITIVI, ACCIDENTALI O CONSEQUENZIALI, PERTANTO LA SUDDETTA LIMITAZIONE O ESCLUSIONE POTREBBE NON ESSERE
              APPLICABILE ALL’UTENTE.
            </p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Risoluzione
              del Contratto</h2>
            <p>Possiamo terminare o sospendere il tuo account e impedire l’accesso al Servizio immediatamente, senza
              preavviso o responsabilità, a nostra esclusiva discrezione, per qualsiasi motivo, inclusa, ma non limitata
              a, una violazione dei Termini.
            </p>
            <p>
              Se desideri chiudere il tuo account, puoi semplicemente smettere di utilizzare il Servizio.
            </p>
            <p>Tutte le disposizioni dei Termini che per loro natura dovrebbero sopravvivere alla risoluzione rimarranno
              in vigore anche dopo la cessazione, incluse, senza limitazione, le disposizioni relative alla proprietà,
              le esclusioni di garanzia, le indennità e le limitazioni di responsabilità.
            </p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Modifiche al Servizio</h2>
            <p>Ci riserviamo il diritto di ritirare o modificare il nostro Servizio, nonché qualsiasi servizio o
              materiale fornito tramite il Servizio, a nostra esclusiva discrezione e senza preavviso. Non saremo
              responsabili se, per qualsiasi motivo, tutto o parte del Servizio non fosse disponibile in qualsiasi
              momento o per qualsiasi periodo. Di tanto in tanto, potremmo limitare l’accesso a determinate parti del
              Servizio o all’intero Servizio, anche per gli utenti registrati.
            </p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Modifiche ai Termini</h2>
            <p>Possiamo modificare i presenti Termini in qualsiasi momento pubblicando i termini aggiornati su questo
              sito. È tua responsabilità esaminare periodicamente i Termini.
            </p>
            <p>L’uso continuato della Piattaforma dopo la pubblicazione dei Termini aggiornati implica l’accettazione e
              l’accordo alle modifiche. Ti invitiamo a controllare questa pagina frequentemente per rimanere informato
              su eventuali cambiamenti, poiché sono vincolanti per te.
            </p>
            <p>Continuando ad accedere o utilizzare il nostro Servizio dopo l’entrata in vigore delle modifiche, accetti
              di essere vincolato ai nuovi Termini. Se non accetti i nuovi Termini, non sei più autorizzato a utilizzare
              il Servizio.
            </p>

            <h2
                className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Rinuncia e Separabilità</h2>
            <p>Nessuna rinuncia da parte della Società a qualsiasi termine o condizione stabilita nei Termini sarà
              considerata una rinuncia ulteriore o continuativa di tale termine o condizione o una rinuncia a qualsiasi
              altro termine o condizione. Inoltre, qualsiasi mancata applicazione di un diritto o di una disposizione ai
              sensi dei Termini da parte della Società non costituirà una rinuncia a tale diritto o disposizione.
            </p>
            <p>Se una qualsiasi disposizione dei Termini dovesse essere ritenuta invalida, illegale o inapplicabile da
              un tribunale o altro organo giurisdizionale competente, tale disposizione sarà eliminata o limitata al
              minimo necessario affinché le restanti disposizioni dei Termini continuino ad avere pieno vigore ed
              effetto.
            </p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Accettazione</h2>
            <p>UTILIZZANDO IL SERVIZIO O ALTRI SERVIZI FORNITI DA NOI, RICONOSCI DI AVER LETTO I PRESENTI TERMINI DI
              SERVIZIO E ACCETTI DI ESSERE VINCOLATO DA ESSI.
            </p>

            <h2 className="pb-4 pt-8 font-sans font-bold text-2xl sm:text-3xl tracking-tight text-primary">Contatti</h2>
            <p>Se hai domande sui presenti Termini di Servizio, puoi contattarci:
            </p>
            <p>Via email: support@flowcal.it</p>
          </div>
        </div>
      </main>
  );
}

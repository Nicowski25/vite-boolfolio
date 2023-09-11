<script>
export default {
    name: 'PrivacyView'
}
</script>

<template>
    <section class="text-light fs-6 w-75 m-auto">
        <router-link :to="{ name: 'home' }" class="btn btn-success mt-3">Back to Homepage</router-link>

        <h1 class="my-3">Informativa sulla Privacy</h1>

        <p><strong>Ultimo aggiornamento:</strong> 12/11/2023</p>

        <h5>1. Informazioni di Contatto</h5>
        <p>Il presente sito web è di proprietà e gestito da Nicola Faedo.</p>

        <p><strong>Contatti:</strong></p>
        <ul class="ls-none">
            <li>Email: nicola.faedo0610@gmail.com</li>
        </ul>

        <h5>2. Dati Raccolti</h5>
        <p>Raccogliamo i seguenti dati personali attraverso il nostro form di contatto:</p>
        <ul class="ls-none">
            <li>Nome</li>
            <li>Indirizzo Email</li>
        </ul>

        <h5>3. Finalità della Raccolta</h5>
        <p>Raccogliamo questi dati per rispondere alle richieste degli utenti inviate tramite il form di contatto.</p>

        <h5>4. Base Legale</h5>
        <p>La raccolta dei dati personali avviene basandoci sul consenso dell'utente, che invia volontariamente i propri
            dati tramite il form.</p>

        <h5>5. Utilizzo dei Dati</h5>
        <p>Utilizziamo l'indirizzo email fornito dagli utenti per rispondere alle loro richieste. I dati vengono conservati
            per un periodo di tempo ragionevole necessario per questo scopo.</p>

        <h5>6. Condivisione dei Dati</h5>
        <p>Non condividiamo i dati personali degli utenti con terze parti.</p>

        <h5>7. Diritti degli Utenti</h5>
        <p>Gli utenti hanno il diritto di accedere, rettificare o cancellare i propri dati personali. Per esercitare questi
            diritti o per qualsiasi domanda sulla privacy, si prega di contattarci tramite l'indirizzo email fornito sopra.
        </p>

        <h5>8. Sicurezza dei Dati</h5>
        <p>Abbiamo adottato misure di sicurezza per proteggere i dati personali degli utenti.</p>

        <h5>11. Conservazione dei Dati</h5>
        <p>I dati personali vengono conservati per il tempo necessario per rispondere alle richieste degli utenti.</p>

        <h5>12. Modifiche all'Informativa</h5>
        <p>Ci riserviamo il diritto di apportare modifiche all'informativa sulla privacy. Eventuali modifiche saranno
            comunicate su questa pagina.</p>

        <h5>13. Accettazione</h5>
        <p>Utilizzando il nostro form di contatto, accetti i termini di questa informativa sulla privacy.</p>


        <h1 class="my-3">Note Legali</h1>

        <p><strong>Diritti d'autore:</strong> Tutti i contenuti di questo sito web sono protetti da copyright e sono di
            proprietà di Nicola Faedo a meno che non sia diversamente indicato. È vietato utilizzare il
            contenuto di questo sito senza il permesso esplicito di Nicola Faedo.</p>

        <p><strong>Marchi Registrati:</strong> I marchi e i loghi utilizzati su questo sito sono marchi registrati di Nicola Faedo. È vietato l'uso di questi marchi senza autorizzazione.</p>

        <p><strong>Limitazione di Responsabilità:</strong> Nicola Faedo non è responsabile per danni
            derivanti dall'uso o dall'incapacità di utilizzare questo sito web. L'uso del sito è a proprio rischio.</p>

        <p><strong>Link Esterni:</strong> Questo sito web può contenere link ad altri siti web. Nicola Faedo non è responsabile per il contenuto o la politica sulla privacy di tali siti esterni.</p>

        <p><strong>Modifiche alle Note Legali:</strong> Nicola Faedo si riserva il diritto di apportare
            modifiche a queste Note Legali senza preavviso. Eventuali modifiche saranno pubblicate su questa pagina.</p>

        <p><strong>Contatti Legali:</strong> Per questioni legali o per segnalare violazioni, si prega di contattare
            nicola.faedo0610@gmail.com .</p>


        <router-link :to="{ name: 'home' }" class="btn btn-success my-3">Back to Homepage</router-link>

    </section>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/commons' as *;</style>
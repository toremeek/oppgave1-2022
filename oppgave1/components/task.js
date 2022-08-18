const Tasks = () => {
  return (
    <div className="oppgaver">
      <h2>Oppgaver:</h2>
      <p>
        1: Under pages - api finner du filen message.js. Fyll inn kode for å
        håndtere en forespørsel som returnerer en valgfri beskjed. Tips:{" "}
        <a href="https://nextjs.org/docs/api-routes/introduction">
          https://nextjs.org/docs/api-routes/introduction
        </a>
        <br></br>
        <br></br>
        Om du er klar for litt mer, la funksjonen også håndtere requests, for
        eksempel håndtere en post.
      </p>
      <p>
        2: Under components finner du getDataAndPrint.js. Her skal du fylle inn
        diverse kode for å hente data fra ditt nye api, samt skrive ut beskjeden
        fra api-et. Tips:{" "}
        <a href="https://rapidapi.com/guides/call-apis-next">
          Guide til API-kall
        </a>
      </p>
      <p>
        3: Under pages finner du index.js. Dette er startsiden, altså siden som
        åpnes når du kjører appen. Ta vekk Tasks og erstatt med GetDataAndPrint
        slik at du kan se api-beskjeden.
      </p>
      <p>
        4: Nå skal du hente data fra Chuck Norris-apiet. Her er URL-en:{" "}
        <a href="https://api.chucknorris.io/jokes/random">
          https://api.chucknorris.io/jokes/random
        </a>
        . Apiet returnerer en random Chuck Norris-vits. Denne skal du printe ut
        sammen med beskjeden fra api-et du lagde. Strukturen på reponsen fra
        api-et kan du se her:{" "}
        <a href="https://api.chucknorris.io/jokes/random">
          https://api.chucknorris.io/jokes/random
        </a>
      </p>
    </div>
  );
};

export default Tasks;

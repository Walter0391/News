Scrivere un’applicazione che recuperi le news dal servizio https://newsapi.org/

per utilizzare il servizio è necessario iscriversi e recuperare un api key = e5a7438bfed245cc82f855598f706adb

Tra le opzioni disponibili di autenticazione del servizio utilizzare quella che prevede di passare
l’api key nell’header authorization

L’applicazione dovra avere le seguenti rotte:

/home => pagina di presentazione dell'applicazione
/news => pagina con la lista delle news recuperate da https://newsapi.org/
/login => pagina con form di Login

La rotta news dovrà essere visibile solo agli utenti loggati attraverso una Guard che controlla che esista nel localStorage un utente loggato.

Il login è da effettuare utilizzando json-server come fatto in classe. In questo caso il token del json-server non serve a niente.
Fate solo il login per salvare l'utente nel localStorage e fare in modo che la Guard di Angular di cui sopra funzioni. NON HO CAPITO UN CAZZO

Il servizio che recupera le news deve essere fatto in modo che accetti un termine di ricerca con il quale fare una query su https://newsapi.org/

Nel componente che visualizza le news prevedere una casella di testo dove inserire il termine di ricerca per poi passarlo al servizio di cui sopra
News API
News API – Search News and Blog Articles on the Web
Get JSON search results for global news articles in real-time with our free News API.

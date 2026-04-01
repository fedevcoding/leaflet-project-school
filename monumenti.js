// Array globale di monumenti di Roma
const monumentiRoma = [
{ nome: "Colosseo", lat: 41.8902, lng: 12.4922 },
{ nome: "Fontana di Trevi", lat: 41.9009, lng: 12.4833 },
{ nome: "Pantheon", lat: 41.8986, lng: 12.4768 },
{ nome: "Piazza Navona", lat: 41.8992, lng: 12.4731 },
{ nome: "Foro Romano", lat: 41.8925, lng: 12.4853 },
{ nome: "Castel Sant'Angelo", lat: 41.9031, lng: 12.4663 },
{ nome: "Basilica di San Pietro", lat: 41.9022, lng: 12.4539 },
{ nome: "Altare della Patria", lat: 41.8955, lng: 12.4823 }
];

// Funzione che aggiunge i monumenti alla mappa tramite marker
function aggiungiMonumenti(mappa) {
for (let i = 0; i < monumentiRoma.length; i++) {
const monumento = monumentiRoma[i];

L.marker([monumento.lat, monumento.lng])
.addTo(mappa)
.bindPopup(monumento.nome);
}
}

// Funzione che mostra un alert con il numero di monumenti presenti
function mostraStatisticheMonumenti() {
alert("Numero di monumenti mostrati: " + monumentiRoma.length);
}
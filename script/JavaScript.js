function start() {
    alert('Benvingut al generador de campionat!');
    document.getElementById('startButton').style.visibility= 'hidden';
    document.getElementById('Opcions').style.visibility= 'visible';
}
function equipsIntroduits() {
    const numEquips = document.getElementById('numEquips').value;
    document.getElementById('Opcions').style.visibility= 'hidden';
    alert('Has introduït un total de ' + numEquips + ' equips.');
    document.getElementById('Equips').style.visibility= 'visible';
}
function generarNomsEquips() {
    // Codi per generar aleatoriament els noms dels equips
    
}
function IntroduirNomsEquips() {
    // Codi per introduir els noms dels equips
}

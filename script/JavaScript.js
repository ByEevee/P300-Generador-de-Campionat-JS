let equips = [];
let rondes = [];
let numEquips = 0;

function start() {
    alert('Benvingut al generador de campionat!');
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('Opcions').style.display = 'block';
}
function equipsIntroduits() {
    const numEquips = document.getElementById('numEquips').value;
    
    if (numEquips < 2) {
        alert('Has d\'introduir almenys 2 equips!');
        
    }
    if (!esPotenciaDe2(numEquips)) {
        alert('El nombre d\'equips ha de ser una potència de 2 (2, 4, 8, 16, 32) per fer un torneig!');
        
    }
    else{
    document.getElementById('Opcions').style.display = 'none';
    alert('Has introduït un total de ' + numEquips + ' equips.');
    document.getElementById('Equips').style.display = 'block';
    }
}
function esPotenciaDe2(entrada) {
    return entrada > 0 && (entrada & (entrada - 1)) === 0;
}
function generarNomsEquips() {
   equips = [];
    for (let i = 1; i <= numEquips; i++) {
        equips.push('Equip ' + i);
    }
    
    
    equips = barallarArray(equips);
    
    document.getElementById('Equips').style.display = 'none';
    generarTorneig();
    
}
function IntroduirNomsEquips() {
    document.getElementById('Equips').style.display = 'none';
    document.getElementById('NomsEquips').style.display = 'block';
    
    const formulari = document.getElementById('formulariNomsEquips');
    formulari.innerHTML = '';
    
    for (let i = 1; i <= numEquips; i++) {
        const label = document.createElement('label');
        label.textContent = 'Equip ' + i + ': ';
        label.style.display = 'block';
        label.style.marginTop = '10px';
        label.style.fontSize = '16px';
        label.style.color = '#283c5a';
        label.style.fontFamily = "'Lexend', sans-serif";
        
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'nomEquip' + i;
        input.placeholder = 'Nom de l\'equip ' + i;
        input.style.padding = '5px';
        input.style.marginLeft = '10px';
        input.style.border = '2px solid #386185';
        input.style.borderRadius = '5px';
        
        formulari.appendChild(label);
        formulari.appendChild(input);
    }
}

function barallarArray(array) {
    const nouArray = [...array];
    for (let i = nouArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nouArray[i], nouArray[j]] = [nouArray[j], nouArray[i]];
    }
    return nouArray;
}
function guardarNomsEquips() {
    equips = [];
    let totsOmplenats = true;
    
    for (let i = 1; i <= numEquips; i++) {
        const nom = document.getElementById('nomEquip' + i).value.trim();
        if (nom === '') {
            totsOmplenats = false;
            break;
        }
        equips.push(nom);
    }
    
    if (!totsOmplenats) {
        alert('Has d\'omplir tots els noms dels equips!');
        return;
    }
    
    
    equips = barallarArray(equips);
    
    document.getElementById('NomsEquips').style.display = 'none';
    generarTorneig();
}

const timer = document.getElementById('cronometro');
const lista = document.getElementById('lista-tempos');

let tempoDecorrido = 0;
let tempoInicial = 0;
let inicio = null;

export function iniciarCronometro() {
    if (inicio != null) {
        clearInterval(inicio);
    }
    
    tempoDecorrido = 0;
    tempoInicial = Date.now() - tempoDecorrido;

    inicio = setInterval(() => {
        tempoDecorrido = Date.now() - tempoInicial;
        
        let totalMs = tempoDecorrido;

        const min = Math.floor(totalMs / 60000);
        totalMs %= 60000;

        const sec=Math.floor(totalMs / 1000);
        totalMs %= 1000;

        const ms=Math.floor(totalMs / 10);

        const minFormat = String(min).padStart(2, '0');
        const secFormat = String(sec).padStart(2, '0');
        const msFormat = String(ms).padStart(2, '0');

        timer.innerText = `${minFormat}.${secFormat}.${msFormat}`;
        return(timer)
    }, 10);
}

export function pararCronometro() {
    clearInterval(inicio);
    inicio = null;
    let novoTempo = document.createElement('li');
    novoTempo.innerText = timer.innerText;
    lista.appendChild(novoTempo)
}
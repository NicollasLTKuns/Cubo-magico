import { iniciarCronometro} from "./func.js ";
import { pararCronometro} from "./func.js ";

let cmc = true;

document.addEventListener('keydown', (event)=>{
    if (event.code === 'Space') {
        if (cmc === true){
            cmc = false;
            iniciarCronometro();
        } else {
            cmc = true;
            pararCronometro();
        }
    }
})
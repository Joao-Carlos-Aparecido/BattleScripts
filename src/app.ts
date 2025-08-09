import { Personagens } from "./controller/personagens.js";
import { comecaTurno } from "./controller/turno.js";
import { MandarQuandoEscolherAlgum, trazerDadosDoPersonagemEscolhido } from "./util/btnPersonagem.js";
const PJEscolhido = document.getElementById(
  "PerJaEscolhido"
) as HTMLButtonElement;
const checarPersonagemEscolhido = document.getElementById(
  "checarPersonagens"
) as HTMLButtonElement;


const turno = document.getElementById("inicioDoTurno") as HTMLButtonElement


let PersonagemDoPlayer: Personagens = {} as Personagens;

 function gerarPersonagemDoPlayer() {
  const valoresFun = trazerDadosDoPersonagemEscolhido() as (number | string)[];
  const Personagem = new Personagens(valoresFun);
  return Personagem as Personagens
}
/* */
PJEscolhido.addEventListener(
  "click",
 function  () {
        PersonagemDoPlayer =  gerarPersonagemDoPlayer()
        return console.log(
         PersonagemDoPlayer.valores);
    })
    
turno.addEventListener("click", function() {
  comecaTurno(PersonagemDoPlayer)
})
  



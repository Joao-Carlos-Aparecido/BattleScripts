import { Personagens } from "./controller/personagens.js";
import { MandarQuandoEscolherAlgum, trazerDadosDoPersonagemEscolhido } from "./util/btnPersonagem.js";
const PJEscolhido = document.getElementById(
  "PerJaEscolhido"
) as HTMLButtonElement;
const checarPersonagemEscolhido = document.getElementById(
  "checarPersonagens"
) as HTMLButtonElement;

 function gerarPersonagemDoPlayer() {
  const valoresFun = trazerDadosDoPersonagemEscolhido() as (number | string)[];
  const Personagem = new Personagens(valoresFun);
  return Personagem;
}
/* */
PJEscolhido.addEventListener(
  "click",
 function  () {
        const PersonagemDoPlayer =  gerarPersonagemDoPlayer()
        return console.log(
         PersonagemDoPlayer.valores);
    })
    
  



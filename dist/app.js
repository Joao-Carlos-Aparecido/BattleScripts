import { Personagens } from "./controller/personagens.js";
import { trazerDadosDoPersonagemEscolhido } from "./util/btnPersonagem.js";
const PJEscolhido = document.getElementById("PerJaEscolhido");
const checarPersonagemEscolhido = document.getElementById("checarPersonagens");
function gerarPersonagemDoPlayer() {
    const valoresFun = trazerDadosDoPersonagemEscolhido();
    const Personagem = new Personagens(valoresFun);
    return Personagem;
}
/* */
PJEscolhido.addEventListener("click", function () {
    const PersonagemDoPlayer = gerarPersonagemDoPlayer();
    return console.log(PersonagemDoPlayer.valores);
});

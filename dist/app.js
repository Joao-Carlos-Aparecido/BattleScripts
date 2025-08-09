import { Personagens } from "./controller/personagens.js";
import { comecaTurno } from "./controller/turno.js";
import { trazerDadosDoPersonagemEscolhido } from "./util/btnPersonagem.js";
const PJEscolhido = document.getElementById("PerJaEscolhido");
const checarPersonagemEscolhido = document.getElementById("checarPersonagens");
const turno = document.getElementById("inicioDoTurno");
let PersonagemDoPlayer = {};
function gerarPersonagemDoPlayer() {
    const valoresFun = trazerDadosDoPersonagemEscolhido();
    const Personagem = new Personagens(valoresFun);
    return Personagem;
}
/* */
PJEscolhido.addEventListener("click", function () {
    PersonagemDoPlayer = gerarPersonagemDoPlayer();
    return console.log(PersonagemDoPlayer.valores);
});
turno.addEventListener("click", function () {
    comecaTurno(PersonagemDoPlayer);
});

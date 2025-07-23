const btnEPO = document.getElementById("escolherOgro");
const btnEPA = document.getElementById("escolherAnao");
const btnEPH = document.getElementById("escolherHumano");
const botoes = [btnEPO, btnEPH, btnEPA];
let valorDoPersonagemEscolhido = null;
export function MandarQuandoEscolherAlgum() {
    botoes.forEach((botao) => {
        botao?.addEventListener("click", function () {
            valorDoPersonagemEscolhido = JSON.parse(botao.dataset.personagem);
        }, { once: true });
    });
}
export function trazerDadosDoPersonagemEscolhido() {
    if (valorDoPersonagemEscolhido) {
        return valorDoPersonagemEscolhido;
    }
    else {
        console.log("escolhe um personagem");
    }
}
MandarQuandoEscolherAlgum();

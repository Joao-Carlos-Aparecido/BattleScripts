import { log } from "console";
import { Personagens } from "../controller/personagens.js";
import { json } from "express";

const btnEPO = document.getElementById("escolherOgro") as HTMLButtonElement;
const btnEPA = document.getElementById("escolherAnao") as HTMLButtonElement;
const btnEPH = document.getElementById("escolherHumano") as HTMLButtonElement;

const botoes = [btnEPO, btnEPH, btnEPA];

let valorDoPersonagemEscolhido: (number | string)[] | null = null

export function MandarQuandoEscolherAlgum() {
      botoes.forEach((botao) => {
        botao?.addEventListener(
          "click",
          function () {
            valorDoPersonagemEscolhido = JSON.parse(botao.dataset.personagem as string) 
            
          },
          { once: true }
        );
      });
}
export function trazerDadosDoPersonagemEscolhido() {
    if(valorDoPersonagemEscolhido) {
        return valorDoPersonagemEscolhido
    } else {
        console.log("escolhe um personagem");
        
    }
}

MandarQuandoEscolherAlgum()






import { escolhedorDeInimigo } from "../util/inimigoAleatorio.js";
export class Inimigos {
    constructor(parametros) {
        this.nome = parametros[0];
        this.forca = parametros[1];
        this.vida = parametros[2];
    }
    get retornaNome() {
        return this.nome;
    }
    get retornaForca() {
        return this.forca;
    }
    get retornaVida() {
        return this.vida;
    }
    static gerarInimigo() {
        const inimigo = new Inimigos(escolhedorDeInimigo());
        return inimigo;
    }
}

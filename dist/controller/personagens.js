export class Personagens {
    constructor(valor) {
        this.cla = "";
        this.forca = 0;
        this.vida = 0;
        this.cla = valor[0];
        this.forca = valor[1];
        this.vida = valor[2];
    }
    static escollherPersonagem(valorEscolhido) {
        return new Personagens(valorEscolhido);
    }
    get valores() {
        return `Clã:${this.cla} e força:${this.forca} e vida:${this.vida}`;
    }
}

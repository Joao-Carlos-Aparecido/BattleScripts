import { escolhedorDeInimigo } from "../util/inimigoAleatorio.js";

export class Inimigos {
  protected nome: string | number 
  protected forca: string | number 
  protected vida: string | number 

  constructor(parametros: string | number [] ) {
    this.nome = parametros[0]
    this.forca = parametros[1] 
    this.vida =parametros[2]
  }

  public get retornaNome() {
    return this.nome
  }

  public get retornaForca() {
    return this.forca
  }
  public get retornaVida() {
    return this.vida
  }
  public static gerarInimigo() {
    const inimigo = new Inimigos(escolhedorDeInimigo());
    return inimigo
  }
  
}

export class Personagens {
    protected cla : (string|number) = ""
  protected forca: (string|number) = 0;
  protected vida: (string|number) = 0;

  constructor(valor:  (string | number)[]) {
    this.cla = valor[0]
    this.forca = valor[1];
    this.vida = valor[2];
  }

  static escollherPersonagem(valorEscolhido:  (string | number)[]) {
    return new Personagens(valorEscolhido);
  }

  get valores(): string {
    return `Clã:${this.cla} e força:${this.forca} e vida:${this.vida}`;
  }
}

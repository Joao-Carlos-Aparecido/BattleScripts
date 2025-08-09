import { Inimigos } from "./inimigos.js";
import { Personagens } from "./personagens.js";

export function comecaTurno(personagem: Personagens) {
  let morte = 0;
  while (morte === 0) {
    const monstro = Inimigos.gerarInimigo();
    function luta(
      nomeMonstro : string,
      ataqueDOHeroi: number,
      ataqueMonstro: number,
      vidaHeroi: number,
      VidaMonstro: number
    ) {
      alert(`você lutara com ${nomeMonstro} `)
      let vidaAtualHeroi = vidaHeroi as number;
      let vidaAtualMonstro = VidaMonstro as number;
      while (vidaAtualHeroi > 0 || vidaAtualMonstro > 0) {
        vidaAtualMonstro = vidaAtualMonstro - ataqueDOHeroi;
        if (vidaAtualMonstro <= 0) break;
        vidaAtualHeroi = vidaAtualHeroi - ataqueMonstro;
        if (vidaAtualHeroi <= 0) break;
      }

      if (vidaAtualHeroi <= 0) {
        console.log("heroi morreu");
        return (personagem.alterarVidaDoPersonagem = vidaAtualHeroi);
      } else if (vidaAtualMonstro <= 0) {
        console.log("heroi sobreviveu");
        return (personagem.alterarVidaDoPersonagem = vidaAtualHeroi);
      }
    }

    luta(
      monstro.retornaNome as string,
      personagem.retornaForca as number,
      monstro.retornaForca as number,
      personagem.retornaVida as number,
      monstro.retornaVida as number
    );
    console.log(personagem.valores);
    break;
  }
}

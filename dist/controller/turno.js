import { Inimigos } from "./inimigos.js";
export function comecaTurno(personagem) {
    let morte = 0;
    while (morte === 0) {
        const monstro = Inimigos.gerarInimigo();
        function luta(nomeMonstro, ataqueDOHeroi, ataqueMonstro, vidaHeroi, VidaMonstro) {
            alert(`você lutara com ${nomeMonstro} `);
            let vidaAtualHeroi = vidaHeroi;
            let vidaAtualMonstro = VidaMonstro;
            while (vidaAtualHeroi > 0 || vidaAtualMonstro > 0) {
                vidaAtualMonstro = vidaAtualMonstro - ataqueDOHeroi;
                if (vidaAtualMonstro <= 0)
                    break;
                vidaAtualHeroi = vidaAtualHeroi - ataqueMonstro;
                if (vidaAtualHeroi <= 0)
                    break;
            }
            if (vidaAtualHeroi <= 0) {
                console.log("heroi morreu");
                return (personagem.alterarVidaDoPersonagem = vidaAtualHeroi);
            }
            else if (vidaAtualMonstro <= 0) {
                console.log("heroi sobreviveu");
                return (personagem.alterarVidaDoPersonagem = vidaAtualHeroi);
            }
        }
        luta(monstro.retornaNome, personagem.retornaForca, monstro.retornaForca, personagem.retornaVida, monstro.retornaVida);
        console.log(personagem.valores);
        break;
    }
}

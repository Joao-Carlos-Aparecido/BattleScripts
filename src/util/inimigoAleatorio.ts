export function escolhedorDeInimigo() : string | number [] {
    const ini1 = ["Barata", 3,7]
    const ini2 = ["Goblin Fugitivo", 13,23]
    const ini3 = ["Mascarado", 403,2003]

    const todosInimigos =[ini1, ini2, ini3]

    let inimigoEscolhido = Math.floor(Math.random() * todosInimigos.length);
    return todosInimigos[inimigoEscolhido] as string | number []

}


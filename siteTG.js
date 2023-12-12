const frm = document.querySelector('form')
const resp = document.querySelector('h2')
frm.filtrar.addEventListener('click', () => {

    const Listadejogos = [
        {
            nome: 'Free Fire',
            genero: 'Battle royale '
        },
        {
            nome: 'League of Legends',
            genero: 'Moba'
        },
        {
            nome: 'Wild Rift',
            genero: 'Moba'
        },
        {
            nome: 'Pokemon Go',
            genero: 'Aventura'
        },
        {
            nome: 'Vice online',
            genero: 'Rpg'
        },
        {
            nome: 'Sabe tudo',
            genero: 'teste de inteligencia'
        }

    ]
    const generoDoUsario = (frm.generos.value)
    const filtrar = (frm.filtrar.value)

    const ListaFiltrada = Listadejogos.filter((jogo) => jogo.genero == generoDoUsario)
    let Lista = ''
    ListaFiltrada.forEach(element => {

        Lista += `Nome do jogo - ${element.nome} - Genêro do jogo - ${element.genero}\n`
    })
    resp.innerText = Lista
})


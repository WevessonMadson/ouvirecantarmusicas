function refresh() {
    location.reload()
}
function randomize() {
    const singerAll = document.querySelector('#singerAll')
    const singer1 = document.querySelector('#singer1')
    const singer2 = document.querySelector('#singer2')
    const singer3 = document.querySelector('#singer3')
    const result = document.querySelector('#result')
    const playlist = [
        {
            description: 'Eliã Oliveira - O Sobrenatural',
            url: 'https://www.youtube.com/watch?v=wNBp41UeYVE',
            singer: 'Amanda'
        },
        {
            description: 'O Mover do Espírito (Quero Que Valorize) - Gabriela Rocha',
            url: 'https://www.youtube.com/watch?v=dBjmfu6XYn4',
            singer: 'Camila'
        },
        {
            description: 'Deus Está Te Ensinando - Nathália Braga',
            url: 'https://www.youtube.com/watch?v=Zdz55fPtpxQ',
            singer: 'Bruna'
        },
        {
            description: 'Fumaça - Léo Brandão + Julliany Souza (Casa Worship)',
            url: 'https://www.youtube.com/watch?v=k9gZ8wrMlrw',
            singer: 'Amanda'
        },
        {
            description: 'Deus Não Vai Parar - Sarah Farias, Stella Laura e Valesca Mayssa',
            url: 'https://www.youtube.com/watch?v=os4MRW7UuXA',
            singer: 'Camila'
        },
        {
            description: 'Girassol (Part. Whindersson NUNES) - Priscilla Alcantara',
            url: 'https://www.youtube.com/watch?v=f7RS8IEj108',
            singer: 'Bruna'
        },
        {
            description: 'Em teus braços - Laura Souguellis',
            url: 'https://www.youtube.com/watch?v=EG7iI5hQKtk',
            singer: 'Amanda'
        },
        {
            description: 'Volte a sonhar - Elaine Martins',
            url: 'https://www.youtube.com/watch?v=anKUf3d64Bc',
            singer: 'Camila'
        },
        {
            description: 'Deus proverá - Gabriela Gomes',
            url: 'https://www.youtube.com/watch?v=1i1673ILdVI',
            singer: 'Bruna'
        },
        {
            description: 'Me Leva - Eyshila e Nívea Soares',
            url: 'https://www.youtube.com/watch?v=3KGFs80-Qdw',
            singer: 'Amanda'
        },
        {
            description: 'Farás Outra Vez - Marcos Freire, Kemilly Santos',
            url: 'https://www.youtube.com/watch?v=iq_CHDVp4Lc',
            singer: 'Camila'
        },
        {
            description: 'Uma Nova História - Fernandinho',
            url: 'https://www.youtube.com/watch?v=SdkWBHLHTgg',
            singer: 'Bruna'
        },
        {
            description: 'Aquieta minha alma - Ministério Zoe',
            url: 'https://www.youtube.com/watch?v=ANfpF0pNob4',
            singer: 'Amanda'
        },
        {
            description: 'Prioridade - Midian Lima',
            url: 'https://www.youtube.com/watch?v=On3b_3v26YU',
            singer: 'Camila'
        },
        {
            description: 'Céu Morada de Deus - Sofia Cardoso 1996',
            url: 'https://www.youtube.com/watch?v=-F8YFw9m4Po',
            singer: 'Bruna'
        },
        {
            description: 'Eliã Oliveira - Paz no vale',
            url: 'https://www.youtube.com/watch?v=4vGHTB0pkkE',
            singer: 'Amanda'
        },
        {
            description: 'O Lamento De Israel - Sergio Lopes - Clipe Oficial',
            url: 'https://www.youtube.com/watch?v=txt9Jy8X1tc',
            singer: 'Camila'
        },
        {
            description: 'APESAR DE TUDO (Live Session) - Marcos Antônio',
            url: 'https://www.youtube.com/watch?v=yMVKDfYc3tE',
            singer: 'Bruna'
        },
        {
            description: 'MONÓLOGO (LIVE SESSION) - MARCOS ANTÔNIO',
            url: 'https://www.youtube.com/watch?v=F4Qx0yfWFOY',
            singer: 'Amanda'
        },
        {
            description: 'Rose Nascimento - Só Jesus Faz (Ao Vivo)',
            url: 'https://www.youtube.com/watch?v=5_dJ7aqEddo',
            singer: 'Camila'
        },
        {
            description: 'Nenhuma condenação há - Armando Filho',
            url: 'https://www.youtube.com/watch?v=w6pHo0SvBWU',
            singer: 'Bruna'
        },
        {
            description: 'Armando Filho-SOBERANO',
            url: 'https://www.youtube.com/watch?v=mUODYESOQ4w',
            singer: 'Amanda'
        },
        {
            description: 'Outra vez - Armando Filho',
            url: 'https://www.youtube.com/watch?v=Tx2L9s5rH9g',
            singer: 'Camila'
        },
        {
            description: 'Ozéias de Paula - Eu te amo',
            url: 'https://www.youtube.com/watch?v=rnLdDFj0OMI',
            singer: 'Bruna'
        }
    ] //É a lista que receberá
    const singersChoiced = []
    if (singerAll.checked) {
        singersChoiced.push('amanda', 'camila', 'bruna')
    }
    if (singer1.checked) {
        singersChoiced.push('amanda')
    }
    if (singer2.checked) {
        singersChoiced.push('camila')
    }
    if (singer3.checked) {
        singersChoiced.push('bruna')
    }
    if (!singerAll.checked && !singer1.checked && !singer2.checked && !singer3.checked) {
        alert(`Escolha uma das opções de cantoras, por favor.`)
        location.reload()
    }
    const musicFilters = playlist.filter(elem => elem.singer.toLowerCase() == singersChoiced[0] || elem.singer.toLowerCase() == singersChoiced[1] || elem.singer.toLowerCase() == singersChoiced[2])
    console.log(musicFilters)

    const sizeList = playlist.length // Tamanho da lista recebida para não extrapolar no randon
    const amountDraw = Number(document.getElementById('textDraw').value) //quantidade de itens que deverão ser sorteados input
    let choiceRandon //escolha do random
    let amountChoiced = 0 //quantidade que já foi escolhida
    let choicedList = [] //lista de valores já escolhidos
    let findChoiced //valor já escolhido?
    document.querySelector('h1').innerText = 'Tudo certo...'
    document.querySelector('h3').innerText = 'Agora é só adorar o senhor'
    result.innerText = ' '
    if (amountDraw > sizeList - 7) {
        alert(`O número escolhido é maior que a quantidade de músicas...
                        Iremos adicionar mais em breve.
                        Por favor selecione um número até ${sizeList - 7}`)
        location.reload()
    } else if (amountDraw <= 0 || amountDraw === null || amountDraw === undefined || (Number.isInteger(amountDraw) == false)) {
        alert(`Esse não é um número válido.
                        Por favor digite um número até ${sizeList - 7}`)
        location.reload()
    } else if (musicFilters.length <= amountDraw) {
        for (let cont = 0; cont <= musicFilters.length; cont++) {
            result.innerHTML += `<p>${cont + 1} - ${musicFilters[cont].description}<a href=${musicFilters[cont].url} target="_blank" style="text-decoration: none; color: black"><img src=""><img src="./assets/youtube2.png" alt="imagem da logo do youtube que é um link para a música selecionada ao lado."></a><br><span style="margin-left: 30px;"> - ${musicFilters[cont].singer}</span><hr></p>`
        }
    } else {
        do {
            choiceRandon = musicFilters[Math.floor(Math.random() * (sizeList))]
            findChoiced = choicedList.find(element => element == choiceRandon)
            if (choiceRandon != 0 && choiceRandon != undefined && choiceRandon != null) {
                if (findChoiced == undefined) {
                    choicedList.push(choiceRandon)
                    amountChoiced = choicedList.length
                    result.innerHTML += `<p>${amountChoiced} - ${choicedList[amountChoiced - 1].description}<a href=${choicedList[amountChoiced - 1].url} target="_blank" style="text-decoration: none; color: black"><img src=""><img src="./assets/youtube2.png" alt="imagem da logo do youtube que é um link para a música selecionada ao lado."></a><br><span style="margin-left: 30px;"> - ${choicedList[amountChoiced - 1].singer}</span><hr></p>`
                }
            }
        } while (amountChoiced < amountDraw)
    }
}

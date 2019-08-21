const readline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}

async function start(){
    const content = {
        maximumSentences: 7
    }

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    await robots.text(content)

    //Função para retornar na tela um input para interação com o usuário
    function askAndReturnSearchTerm(){
        return readline.question('Digite termo para a pesquisa no Wikipedia: ')
    }

    //Definindo prefixos para a busca
    function askAndReturnPrefix(){
        const prefixes = ['Who is','What is','The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes)
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }

    console.log(JSON.stringify(content, null, 4))
}

start()
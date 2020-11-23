/**
 * Precisei adicionar o extensão Moesif Orign & CORS Changer
 * no Chrome para me livrar do problema do CORS
 */
const API_KEY = 'SUA CHAVE AQUI'
const URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + API_KEY

const getResponseApi = async URL => {
    
    try {  
        const response = await fetch(URL)
        if (!response.ok) {
            throw new Error('Erro ao executar a requisição. Status '+ response.status)
        }

        return await response.json()
        
    } catch (error) {
        console.error(error.message);
    }
}

const showCoins  = (data) => {
    
    let text = ''
    
    for (let i = 0; i < 10; i++) {
        text += `
        <div class="media mt-4 ml-2">
            <img src="../img/coin.png" class="align-self-center mr-3" alt="coin" height="60">
            <div class="media-body">
                <h5 class="mb-1">${data.data[i].name}</h5>
                <p class="mb-1">${data.data[i].symbol}</p>
                <p class="mb-1">${new Date(data.data[i].first_historical_data)}</p>
            </div>
        </div>
        `

        document.getElementById("coins").innerHTML = text
    }
}

getResponseApi(URL)
    .then(showCoins)
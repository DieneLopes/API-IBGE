fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes?orderBy=nome')//api das regiões à serem selecionadas
    .then((resposta) => resposta.json())
    .then((regioes) => {
        regioes.forEach( (cadaRegiao) => {                             
            document.getElementById('regiao').innerHTML += `
            <option value ="${cadaRegiao.id}">${cadaRegiao.nome}</option>`
    })
});

function selecionarEstado() {                                     //função para seleção dos estados
    document.getElementById('estado').innerHTML = `
        <option>-- Selecione --</option>`                         //api dos estados apontados dentro da região selecionada
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiao.value}/estados?orderBy=nome`) 
    .then((resposta) => resposta.json())
    .then((estado) => {
        estado.forEach((cadaEstado) => {                          
            document.getElementById('estado').innerHTML += `
            <option value ="${cadaEstado.id}">${cadaEstado.nome}</option>`
        })
    });
}

function selecionarCidade() {                                    //função para seleção das cidades
    document.getElementById('cidade').innerHTML = `
        <option>-- Selecione --</option>`                        //api das cidades apontadas dentro do estado selecionado
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.value}/municipios?orderBy=nome`) 
    .then((resposta) => resposta.json())
    .then((cidade) => {
        console.log(cidade);
        cidade.forEach((cadaCidade) => {                        
            document.getElementById('cidade').innerHTML += `
            <option value ="${cadaCidade.id}">${cadaCidade.nome}</option>`
        })
    });    
}
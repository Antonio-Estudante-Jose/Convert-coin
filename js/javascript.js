window.onload = function() {
    //#region Buscando Valores dos elementos
    var valor1 = document.getElementById("valor-1");
    var valor2 = document.getElementById("valor-2");
    var botao = document.getElementById("btn-converter");
    var moeda_escolhida = document.getElementById("lista-moeda");
    var status = document.getElementById("estatus-busca");

    fetch("https://economia.awesomeapi.com.br/json/available").then(Response => {
        return Response.json()
    }).then(bloco => {
        for (propriedade in bloco) {
            if (bloco.hasOwnProperty.call(bloco, propriedade)) {
                //valor2.value = parseFloat(valor1.value) * bloco[propriedade].high;
                moeda_escolhida.innerHTML += "<option value='"+propriedade+"'>"+bloco[propriedade]+"</option>";

                console.log(bloco[propriedade]);
            }
        }
        ordenar_select();
    })
    //#endregion

    //#region Criando Exibição
    var h3 = document.createElement("h3");
    h3.setAttribute("class","tela");
    //#endregion
    status.appendChild(h3);

    botao.onclick = function() {
        fetch("https://economia.awesomeapi.com.br/last/" + moeda_escolhida.value).then(Response=>{
            return Response.json()
        }).then(bloco=>{
            for (propriedade in bloco) {
                if (bloco.hasOwnProperty.call(bloco, propriedade)) {
                    valor2.value = parseFloat(valor1.value).toFixed(2) * bloco[propriedade].high;

                    h3.innerHTML = "<b>Codigo: </b>"+bloco[propriedade].code+"<br/>"+
                                   "<b>Codigo-destino: </b>"+bloco[propriedade].codein+"<br/>"+
                                   "<b>Nome: </b>"+bloco[propriedade].name+"<br/>"+
                                   "<b>Alto: </b>"+bloco[propriedade].high+"<br/>"+
                                   "<b>Baixo: </b>"+bloco[propriedade].low+"<br/>"+
                                   "<b>Variação: </b>"+bloco[propriedade].varBid+"<br/>"+
                                   "<b>Porcentagem: </b>"+bloco[propriedade].pctChange+"%<br/>"+
                                   "<b>Compra: </b>"+bloco[propriedade].bid+"<br/>"+
                                   "<b>Venda: </b>"+bloco[propriedade].ask+"<br/>"+
                                   "<b>Data de modificação: </b>"+bloco[propriedade].create_date+"<br/>";

                    console.log(bloco[propriedade]);
                }
            }
            
        })
    }

}

function ordenar_select() {
    $("select#lista-moeda").append($("select#lista-moeda option").remove().sort(function(a, b) {
        var at = $(a).text(),
            bt = $(b).text();
        return (at > bt) ? 1 : ((at < bt) ? -1 : 0);
    }));
}
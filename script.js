
var filmes = [];

function adicionarFilme() {
    var extensoesImagens = ["jpg", "jpeg", "png", "bmp", "gif", "svg", "webp"];

    var elementoLinkPoster = document.getElementById('filme');
    var linkPoster = elementoLinkPoster.value;

    var elementoNomeFilme = document.getElementById("nome");
    var textoNome = elementoNomeFilme.value;

    var elementoTrailerFilme = document.getElementById("trailer");
    var linkTrailer = elementoTrailerFilme.value;


    if (textoNome == "") {
        alert("Preencha o nome do filme!");
        return;
    }
    else if (linkPoster == "") {
        alert("Preencha o link do poster!");
        return;
    }
    else if (linkTrailer == "") {
        alert("Preencha o link do trailer do filme!");
        return;
    }

    var ehImagem = false;
    extensoesImagens.forEach(element => {
        if (linkPoster.toLowerCase().endsWith("." + element)) {
            ehImagem = true;
        }
    });

    if (!ehImagem) {
        var textoAlerta = "Informe uma imagem válida! Extensões permitidas: ";
        for (var i = 0; i < extensoesImagens.length; i++) {
            if (i > 0 && i < extensoesImagens.length - 1) {
                textoAlerta += ", ";
            }
            else if (i == extensoesImagens.length - 1 && i > 0) {
                textoAlerta += " e ";
            }

            textoAlerta += "." + extensoesImagens[i];
        }

        alert(textoAlerta);
    }
    else {
        var filme = [];
        filme["nome"] = textoNome;
        filme["poster"] = linkPoster;
        filme["trailer"] = linkTrailer;

        filmes.push(filme);

        exibirFilmes();

        elementoNomeFilme.value = "";
        elementoLinkPoster.value = "";
        elementoTrailerFilme.value = "";
    }
}

function excluirFilme(id) {
    var auxId = id.split("_");
    var indice = parseInt(auxId[1], 10)
    filmes.splice(indice, 1);
    exibirFilmes();
}

function exibirFilmes() {
    var htmlFilmes = "";
    for (var i = 0; i < filmes.length; i++) {
        htmlFilmes += '<div id="filme_' + i + '" class="filmeEspecifico">';
        htmlFilmes += '<button class="botaoExcluir" onclick="excluirFilme(\'filme_' + i + '\')">X</button>';
        htmlFilmes += '<a href="' + filmes[i]["trailer"] + '" target="_blank">';
        htmlFilmes += '<img src="' + filmes[i]["poster"] + '">';
        htmlFilmes += '</a>';
        htmlFilmes += '<p>' + filmes[i]["nome"] + '</p>';
        htmlFilmes += '</div >';
    }

    var elementoFilmes = document.getElementById("listaFilmes");
    elementoFilmes.innerHTML = htmlFilmes;
}
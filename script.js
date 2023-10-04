const listaDeUsuarios = [
    { cpf: "123456789-00", senha: "senha123" },
    { cpf: "987654321-00", senha: "senha456" },
    { cpf: "555666777-00", senha: "senha789" },
];







function clicaLogin(){
    const cpfDigitado = document.getElementById("cpf").value;
    const senhaDigitada = document.getElementById("senha").value;
    const usuarioValido = listaDeUsuarios.find(usuario => usuario.cpf === cpfDigitado && usuario.senha === senhaDigitada);

            if (usuarioValido) {
                alert("Login bem-sucedido!");
                
                
                
                window.open("logado.html");

            } else {
                alert("CPF ou senha inválidos. Tente novamente.");
            }
        
}


function clicaProduto() {
    window.open("listaproduto.html");
}

function clicaCadastrar() {
    window.open("cadastroproduto.html");
}

function clicaPesquisar() {
    window.open("pesquisar.html");
}

function cadastroVoltar() {
    window.open("logado.html");
}

function listaprodutoVoltar(){
    window.open("logado.html");
}






const listaProdutos = document.getElementById('listagemProdutos');
const nomeProdutoInput = document.getElementById('nomeProdutoInput');
const quantidadeProdutoInput = document.getElementById('quantidadeProdutoInput');


function adicionarProduto2() {
    const nomeProduto = nomeProdutoInput.value;
    const quantidadeProduto = quantidadeProdutoInput.value;

    if (nomeProduto && quantidadeProduto > 0) {
        if (adicionarProduto(nomeProduto, quantidadeProduto)) {
            alert("Produto Adicionado com Sucesso!");

            nomeProdutoInput.value = '';
            quantidadeProdutoInput.value = '';

            atualizarListaDeProdutos();
        } else {
            alert('Ocorreu um erro ao adicionar o produto.');
        }
    } else {
        alert('Por favor, preencha o nome do produto e uma quantidade válida.');
    }
}

function atualizarListaDeProdutos() {
    const listaProdutosArray = getListaProdutos();

    listaProdutosArray.push({ nome: nomeProdutoInput.value, quantidade: quantidadeProdutoInput.value });

    listarProdutos();
}

function getListaProdutos() {
    return listaProdutosArray;
}

        
        

        
        
function listarProdutos() {
    const listaProdutosElement = document.getElementById('listagemProdutos');

    listaProdutosElement.innerHTML = '';

    for (let i = 0; i < listaProdutosArray.length; i++) {
        const produto = listaProdutosArray[i];
        const novoItem = document.createElement('li');
        novoItem.textContent = `${produto.nome} - Quantidade: ${produto.quantidade}`;
        listaProdutosElement.appendChild(novoItem);
    }
}
    



for (let i = 0; i < listaProdutosArray.length; i++) {
    const produto = listaProdutosArray[i];
    const novoItem = document.createElement('li');
    novoItem.textContent = `${produto.nome} - Quantidade: ${produto.quantidade}`;
    listaProdutosElement.appendChild(novoItem);
}







var resultadoElement = null;


         
function pesquisarPopup() {
    var popup = document.getElementById("pesquisar");
    popup.style.display = "block";
}


        
function buscarProduto() {
    

    nomeProduto = document.getElementById("produtoPesquisa").value;

    
    resultadoElement = document.getElementById("resultado");


    var produtoEncontrado = null;
        for (var i = 0; i < listaProdutosArray.length; i++) { 
            if (listaProdutosArray[i].nome === nomeProduto) {  
                produtoEncontrado = listaProdutosArray[i];     
                break;
            }
        }


        if (produtoEncontrado) {
            resultadoElement.textContent = "Produto encontrado: " + produtoEncontrado.nome + " \n Quantidade em estoque: " + produtoEncontrado.quantidade;
        } else {
            resultadoElement.textContent = "Produto não encontrado.";
        }

    }
        

        
    function fecharPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}








        
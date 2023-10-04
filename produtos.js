const listaProdutosArray = [
  {nome: "Smartphone Galaxy S21", quantidade: 50},
  {nome: "Notebook HP Pavilion", quantidade: 30},
  {nome: "TV 55 polegadas", quantidade: 20},
  {nome: "Headphone Bluetooth JBL", quantidade: 60},
  {nome: "Câmera DSLR Canon EOS", quantidade: 15},
  {nome: "Tênis esportivo Nike Air Max", quantidade: 40},
  {nome: "Liquidificador Philips Walita", quantidade: 25},
  {nome: "Relógio inteligente Apple Watch", quantidade: 35},
  {nome: "Mochila de viagem North Face", quantidade: 10},
  {nome: "Conjunto de panelas Tramontina", quantidade: 45},
];


console.log(listaProdutosArray);

function carregarProdutosDeLocalStorage() {
  const produtosArmazenados = JSON.parse(localStorage.getItem("produtosArmazenados")) || [];

  listaProdutosArray.push(...produtosArmazenados);
}

carregarProdutosDeLocalStorage();

function adicionarProduto(nome, quantidade) {
  if (nome && quantidade > 0) {
    const novoProduto = { nome, quantidade };
    
    listaProdutosArray.push(novoProduto);

    salvarProdutoEmLocalStorage(novoProduto);

    return true;

  } else {
    return false;
  }
}

function salvarProdutoEmLocalStorage(produto) {
  const produtosArmazenados = JSON.parse(localStorage.getItem("produtosArmazenados")) || [];

  produtosArmazenados.push(produto);

  localStorage.setItem("produtosArmazenados", JSON.stringify(produtosArmazenados));
}

function buscarProduto() {
  const nomeProduto = document.getElementById("produtoPesquisa").value;
  const resultado = document.getElementById("resultado");
  
  // Procurar o produto na lista de produtos
  const produtoEncontrado = listaProdutosArray.find(produto => produto.nome === nomeProduto);

  if (produtoEncontrado) {
      resultado.textContent = `Produto encontrado: ${produtoEncontrado.nome} - Quantidade: ${produtoEncontrado.quantidade}`;
  } else {
      resultado.textContent = "Produto não encontrado.";
  }
}
 
  
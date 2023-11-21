const arrayVenda = [
    {
      titulo: "Chuteira Nike Mercurial",
      Descrição: "Chuteira Nike Mercurial em promoção imperdivél, venha dar um boost na sua jogabilidade com essa oportunidade de ouro ! ",
      imagem: document.getElementsByClassName("imagem").innerHTML = "<img src = 'img/nike-mercurial-superflay-original1-bc5107e725de31107e16563643517938-640-0.jpeg'",
      Local: "BH Shopping, loja 15",
      Preço: "R$ 399,99",
      
    }
  ]
  for(let i = 0; i < arrayVenda.length; i++){
    const main = document.createElement("main")
    main.id = `venda- ${i+1}`

    main.innerHTML = `
    <h2> ${arrayVenda[i].titulo}</h2>
    <div class ="imagem"> ${arrayVenda[i].imagem}</div>
    <div class = "Preço">${arrayVenda[i].Preço}</div>
    <p> ${arrayVenda[i].Descrição}</p>
    <p class = "Local"> ${arrayVenda[i].Local}!</p>
    `
     const body = document.querySelector('body')
  body.appendChild(main)
  }

 
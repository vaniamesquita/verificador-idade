function verificar() {
  const data = new Date();
  const ano = data.getUTCFullYear();
  const fano = document.getElementById('ano');
  const resultado = document.querySelector('div#resultado');
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var sexo = document.getElementsByName("radsexo")
    const idade = ano - fano.value
    let genero = ""
    let img = document.createElement("img")
    img.setAttribute("id", "foto")
      if (sexo[0].checked) {
      genero = "Homem"
      if(idade >=0 && idade <10){
        //criança
        img.setAttribute("src", "img/foto-bebe-m.png")
      } else if (idade <21) {
        //jovem
        img.setAttribute("src", "img/foto-jovem-m.png")
        } else if (idade < 50) {
          //adulto
          img.setAttribute("src", "img/foto-adulto-m.png")
        } else {
          //idoso
          img.setAttribute("src", "img/foto-idoso-m.png")
        }
    } else if (sexo[1].checked) {
      genero = "Mulher"
      if(idade >=0 && idade <10){
        //criança
        img.setAttribute("src", "img/foto-bebe-f.png")
      } else if (idade <21) {
        //jovem
        img.setAttribute("src", "img/foto-jovem-f.png")
        } else if (idade < 50) {
          //adulto
          img.setAttribute("src", "img/foto-adulto-f.png")
        } else {
          //idoso
          img.setAttribute("src", "img/foto-idoso-f.png")
        }
    }
    
    
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
    resultado.appendChild(img)

    //resultado.innerHTML = `idade calculada: ${idade}`
  }

}





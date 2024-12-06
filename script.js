
// Criando um array em JavaScript com 50 nomes



function selectImage(){
    let nomes = [
        "Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Joana",
        "Kleber", "Lara", "Marcos", "Nina", "Otávio", "Paula", "Quirino", "Renata", "Silvio", "Tatiane",
        "Ubirajara", "Valéria", "Wagner", "Ximena", "Yuri", "Zara", "Adriano", "Bianca", "Caio", "Diana",
        "Elias", "Fabiana", "Gustavo", "Hugo", "Isabel", "Júlio", "Karina", "Lucas", "Márcia", "Natália",
        "Oscar", "Patrícia", "Quésia", "Roberto", "Sofia", "Tadeu", "Ulisses", "Vitória", "William", "Zuleica"
    ];
    
    console.log(nomes)
    let nomef = nomes.map(nomes => nomes.toLocaleLowerCase())
    console.log(nomes)
    
    let input = document.querySelector('#text').value.trim().toLocaleLowerCase()
    
    
    
    if(nomef.includes(input)){
        document.querySelector('.resultado').innerHTML= (input) 
        //console.log(input);
    }else{
          document.querySelector('.resultado').innerHTML=("Nome não enconrtrado") 
          console.log(nomef);
       }
       

    
}

const url = 'https://pokeapi.co/api/v2/pokemon/65';


async function exibirinfo(){
    const resp = await fetch(url);
    console.log(resp)
    if(resp == 200){
        const  obj = await resp.json()
        console.log(obj)
    }

}

function calcular() {
    const numero2 = document.getElementById('numero').value;
    console.log(numero2);

    if (isNaN(numero2) || numero2 === '') {
        alert('Por favor, insira um número válido.');
        return;
    }

    const parOuImpar = document.querySelector('.parOuImpar');
    
    if (parseInt(numero2) % 2 === 0) {
        parOuImpar.textContent = 'Par';
    } else {
        parOuImpar.textContent = 'Ímpar';
    }
}

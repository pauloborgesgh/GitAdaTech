// script.js

// Função para buscar os dados do Pokémon Ditto
async function fetchPokemonData() {
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Atualizando o card com os dados do Pokémon
        document.getElementById('poke-name').textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1); // Primeira letra maiúscula
       // document.getElementById('poke-img').src = data.sprites.front_default; // Imagem do Pokémon
        document.getElementById('poke-type').textContent = data.types.map(type => type.type.name).join(', '); // Tipos do Pokémon
        document.getElementById('poke-height').textContent = (data.height / 10).toFixed(1); // Altura em metros (dividido por 10)
        document.getElementById('poke-weight').textContent = (data.weight / 10).toFixed(1); // Peso em kg (dividido por 10)
        
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
}

// Chama a função para buscar os dados quando a página carregar
fetchPokemonData();
// URL da API
const url = 'https://pokeapi.co/api/v2/ability/66/';

// Função para consumir os dados da API
async function getPokemonData() {
  try {
    // Fazendo a requisição à API
    const response = await fetch(url);
    
    // Verificando se a requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro ao buscar os dados');
    }

    // Convertendo a resposta em JSON
    const data = await response.json();
    

    // Exibindo os dados no console
    console.log(data);
  } catch (error) {
    console.error('Erro:', error);
  }
}

// Chamando a função para obter os dados
getPokemonData();

// Modelo básico de quiz em JavaScript
const perguntas = [
    {
        pergunta: "Qual é a capital da França?",
        opcoes: ["Berlim", "Madrid", "Paris", "Lisboa"],
        respostaCorreta: 2 // Índice da resposta correta
    },
    {
        pergunta: "Qual é o maior planeta do sistema solar?",
        opcoes: ["Terra", "Júpiter", "Marte", "Saturno"],
        respostaCorreta: 1
    },
    {
        pergunta: "Quem escreveu 'Dom Quixote'?",
        opcoes: ["Miguel de Cervantes", "William Shakespeare", "Dante Alighieri", "Jorge Luis Borges"],
        respostaCorreta: 0
    }
];

function iniciarQuiz() {
    let pontuacao = 0;

    perguntas.forEach((perguntaAtual, index) => {
        const resposta = prompt(`Pergunta ${index + 1}: ${perguntaAtual.pergunta}\n${perguntaAtual.opcoes.map((opcao, i) => `${i + 1}. ${opcao}`).join('\n')}`);
        
        if (parseInt(resposta) - 1 === perguntaAtual.respostaCorreta) {
            alert("Resposta correta!");
            pontuacao++;
        } else {
            alert(`Resposta errada. A resposta correta é: ${perguntaAtual.opcoes[perguntaAtual.respostaCorreta]}`);
        }
    });

    alert(`Quiz finalizado! Sua pontuação foi: ${pontuacao}/${perguntas.length}`);
}

iniciarQuiz();

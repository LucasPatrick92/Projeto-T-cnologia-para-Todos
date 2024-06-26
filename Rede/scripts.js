// scripts.js

const quizQuestions = [
    {
        question: "Quais desses são riscos associados às redes sociais?",
        options: ["a) Ciberbullying", "b) Melhorar a saúde física", "c) Aumento de privacidade"],
        answer: "a"
    },
    {
        question: "Qual é um dos principais problemas causados pelo uso excessivo de redes sociais?",
        options: ["a) Aumento de produtividade", "b) Impacto negativo na saúde mental", "c) Melhoria nas habilidades sociais"],
        answer: "b"
    },
    {
        question: "O que é ciberbullying?",
        options: ["a) Bullying realizado através da internet", "b) Compartilhamento de notícias falsas", "c) Roubo de identidade online"],
        answer: "a"
    },
    {
        question: "Como você pode proteger suas informações pessoais nas redes sociais?",
        options: ["a) Compartilhando tudo com todos", "b) Usando senhas fracas", "c) Verificando e ajustando as configurações de privacidade"],
        answer: "c"
    },
    {
        question: "O que você deve fazer se encontrar comportamento abusivo nas redes sociais?",
        options: ["a) Ignorar", "b) Denunciar", "c) Participar"],
        answer: "b"
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById("quiz-questions");
    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("quiz-question");

        const questionText = document.createElement("p");
        questionText.textContent = q.question;
        questionDiv.appendChild(questionText);

        q.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => checkAnswer(index, option.charAt(0));
            questionDiv.appendChild(button);
        });

        const resultText = document.createElement("p");
        resultText.id = `result-${index}`;
        questionDiv.appendChild(resultText);

        quizContainer.appendChild(questionDiv);
    });
}

function checkAnswer(questionIndex, selectedOption) {
    const result = document.getElementById(`result-${questionIndex}`);
    const correctAnswer = quizQuestions[questionIndex].answer;
    if (selectedOption === correctAnswer) {
        result.textContent = "Correto!";
        result.style.color = "green";
    } else {
        result.textContent = "Incorreto. Tente novamente.";
        result.style.color = "red";
    }
}

function showRiskDetail(index) {
    const allRiskItems = document.querySelectorAll('.risk-item');
    allRiskItems.forEach((item, i) => {
        if (i !== index) {
            item.style.transform = 'scale(0.9)';
        }
    });
}

function hideRiskDetail(index) {
    const allRiskItems = document.querySelectorAll('.risk-item');
    allRiskItems.forEach(item => {
        item.style.transform = 'scale(1)';
    });
}

// Carrega o quiz quando a página é carregada
window.onload = loadQuiz;

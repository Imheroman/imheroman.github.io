let correctAnswer;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;
    document.getElementById("question").innerText = `${num1} + ${num2}?`;
    document.getElementById("result").innerText = ""; // Clear previous result
    document.getElementById("answer").value = ""; // Clear previous answer
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const resultDiv = document.getElementById("result");

    console.log("user answer: {}", userAnswer);

    if (userAnswer === correctAnswer) {
        resultDiv.innerText = "정답입니다 !";
    } else {
        resultDiv.innerText = "다시 한번 생각해보기 !";
    }
}

// Initialize the first question
generateQuestion();

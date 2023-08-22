// KaTeX
document.addEventListener("DOMContentLoaded", renderLaTeX);

function renderLaTeX() {
    renderMathInElement(document.body, {
        delimiters: [
            {left: "\\(", right: "\\)", display: false},
            {left: "\\[", right: "\\]", display: true}
        ]
    });
}

function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 100; i++) {
        numbers.push(Math.floor(Math.random() * 19) - 9);
    }

    return numbers;
}

function generateMatrix(numbers) {
    
    let latex = "\\[ \\begin{pmatrix} ";

    for (let i = 0; i < 10; i++) {
        latex += numbers.slice(10*i,10*(i+1)).join(" & ");
        latex += " \\\\ ";
    }

    latex += " \\end{pmatrix} \\]";

    return latex;

}

function generateMatrixProblem(){
    const numbers1 = generateRandomNumbers();
    const numbers2 = generateRandomNumbers();

    const matrix1 = generateMatrix(numbers1);
    const matrix2 = generateMatrix(numbers2);

    const latex = matrix1.slice(0,matrix1.length-2) + matrix2.slice(2,matrix2.length)

    document.getElementById("generateMatrix").textContent = latex;

    let answer = Array(100);

    for(let i = 0; i<100; i++){
        const m = Math.floor(i / 10);
        const n = i % 10;
        let elem = 0;
        for (let j = 0; j < 10; j++){
            elem += numbers1[10*m+j]*numbers2[10*j+n];
        }
        answer[i] = elem;
    }

    const answerLatex = generateMatrix(answer);
    document.getElementById("answerMatrix").textContent = answerLatex;
    renderLaTeX();

}

function toggleText() {
    // テキスト要素を取得
    const textElement = document.getElementById("hiddenText");
    const buttonElement = document.querySelector("button");

    // テキストが現在表示されているか非表示かを判定
    if (textElement.style.display === "none") {
        textElement.style.display = "block";
    } else {
        textElement.style.display = "none";
    }
}
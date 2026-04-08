const params = new URLSearchParams(window.location.search);
const tema = params.get("tema");

let selectedQuestions;
if (tema === "vse") {

selectedQuestions = [
...questions.hesla,
...questions.phishing,
...questions.ochrana,
...questions.fakenews,
...questions.stopa
];

} else {

selectedQuestions = questions[tema];

}

selectedQuestions = selectedQuestions
.sort(() => 0.5 - Math.random())
.slice(0, 10);


const testArea = document.getElementById("test-area");
const result = document.getElementById("result");
const button = document.getElementById("submit-test");

selectedQuestions.forEach((q, index) => {

let html = `<div class="question">
<h2>${index + 1}. ${q.text}</h2>
`;

q.answers.forEach((answer, i) => {
html += `
<label>
<input type="radio" name="q${index}" value="${i}">
${answer}
</label><br>
`;
});

html += `</div>`;

testArea.innerHTML += html;

});

button.onclick = function(){

let score = 0;
let wrongAnswers = [];

for (let i = 0; i < selectedQuestions.length; i++){

const checked = document.querySelector(`input[name="q${i}"]:checked`);

if(!checked){
result.textContent = "Prosím odpovězte na všechny otázky.";
return;
}

const correctIndex = selectedQuestions[i].correct;
const options = document.getElementsByName(`q${i}`);

options.forEach((option, index) => {

const label = option.parentElement;

if(index === correctIndex){
label.classList.add("correct");
}

if(option.checked && index !== correctIndex){
label.classList.add("wrong");
}

});

if(Number(checked.value) === correctIndex){
score++;
} else {
wrongAnswers.push(selectedQuestions[i].text);
}

}

result.innerHTML = `Výsledek: ${score} / ${selectedQuestions.length} správně`;

if(wrongAnswers.length > 0){

result.innerHTML += "<h3>Špatně zodpovězené otázky:</h3>";

wrongAnswers.forEach(q => {
result.innerHTML += `<p>• ${q}</p>`;
});

}

};




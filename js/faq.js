const plusIcon_1 = document.getElementById("pi_1");
const subtractIcon_1 = document.getElementById("si_1");
const answerBlock_1 = document.getElementById("ab_1");
plusIcon_1.addEventListener("click", function () {
    subtractIcon_1.style.display = "block";
    answerBlock_1.style.display = "block";
    plusIcon_1.style.display = "none";
});
subtractIcon_1.addEventListener("click", function() {
    plusIcon_1.style.display = "block";
    subtractIcon_1.style.display = "none";
    answerBlock_1.style.display = "none";
})
const plusIcon_2 = document.getElementById("pi_2");
const subtractIcon_2 = document.getElementById("si_2");
const answerBlock_2 = document.getElementById("ab_2");
plusIcon_2.addEventListener("click", function () {
    subtractIcon_2.style.display = "block";
    answerBlock_2.style.display = "block";
    plusIcon_2.style.display = "none";
});
subtractIcon_2.addEventListener("click", function() {
    plusIcon_2.style.display = "block";
    subtractIcon_2.style.display = "none";
    answerBlock_2.style.display = "none";
});
const plusIcon_3 = document.getElementById("pi_3");
const subtractIcon_3 = document.getElementById("si_3");
const answerBlock_3 = document.getElementById("ab_3");
plusIcon_3.addEventListener("click", function () {
    subtractIcon_3.style.display = "block";
    answerBlock_3.style.display = "block";
    plusIcon_3.style.display = "none";
});
subtractIcon_3.addEventListener("click", function() {
    plusIcon_3.style.display = "block";
    subtractIcon_3.style.display = "none";
    answerBlock_3.style.display = "none";
});
const plusIcon_4 = document.getElementById("pi_4");
const subtractIcon_4 = document.getElementById("si_4");
const answerBlock_4 = document.getElementById("ab_4");
plusIcon_4.addEventListener("click", function () {
    subtractIcon_4.style.display = "block";
    answerBlock_4.style.display = "block";
    plusIcon_4.style.display = "none";
});
subtractIcon_4.addEventListener("click", function() {
    plusIcon_4.style.display = "block";
    subtractIcon_4.style.display = "none";
    answerBlock_4.style.display = "none";
});
const plusIcon_5 = document.getElementById("pi_5");
const subtractIcon_5 = document.getElementById("si_5");
const answerBlock_5 = document.getElementById("ab_5");
plusIcon_5.addEventListener("click", function () {
    subtractIcon_5.style.display = "block";
    answerBlock_5.style.display = "block";
    plusIcon_5.style.display = "none";
});
subtractIcon_5.addEventListener("click", function() {
    plusIcon_5.style.display = "block";
    subtractIcon_5.style.display = "none";
    answerBlock_5.style.display = "none";
});
const plusIcon_6 = document.getElementById("pi_6");
const subtractIcon_6 = document.getElementById("si_6");
const answerBlock_6 = document.getElementById("ab_6");
plusIcon_6.addEventListener("click", function () {
    subtractIcon_6.style.display = "block";
    answerBlock_6.style.display = "block";
    plusIcon_6.style.display = "none";
});
subtractIcon_6.addEventListener("click", function() {
    plusIcon_6.style.display = "block";
    subtractIcon_6.style.display = "none";
    answerBlock_6.style.display = "none";
});
const plusIcon_7 = document.getElementById("pi_7");
const subtractIcon_7 = document.getElementById("si_7");
const answerBlock_7 = document.getElementById("ab_7");
plusIcon_7.addEventListener("click", function () {
    subtractIcon_7.style.display = "block";
    answerBlock_7.style.display = "block";
    plusIcon_7.style.display = "none";
});
subtractIcon_7.addEventListener("click", function() {
    plusIcon_7.style.display = "block";
    subtractIcon_7.style.display = "none";
    answerBlock_7.style.display = "none";
});
const plusIcon_8 = document.getElementById("pi_8");
const subtractIcon_8 = document.getElementById("si_8");
const answerBlock_8 = document.getElementById("ab_8");
plusIcon_8.addEventListener("click", function () {
    subtractIcon_8.style.display = "block";
    answerBlock_8.style.display = "block";
    plusIcon_8.style.display = "none";
});
subtractIcon_8.addEventListener("click", function() {
    plusIcon_8.style.display = "block";
    subtractIcon_8.style.display = "none";
    answerBlock_8.style.display = "none";
});
const plusIcon_9 = document.getElementById("pi_9");
const subtractIcon_9 = document.getElementById("si_9");
const answerBlock_9 = document.getElementById("ab_9");
plusIcon_9.addEventListener("click", function () {
    subtractIcon_9.style.display = "block";
    answerBlock_9.style.display = "block";
    plusIcon_9.style.display = "none";
});
subtractIcon_9.addEventListener("click", function() {
    plusIcon_9.style.display = "block";
    subtractIcon_9.style.display = "none";
    answerBlock_9.style.display = "none";
});
const plusIcon_10 = document.getElementById("pi_10");
const subtractIcon_10 = document.getElementById("si_10");
const answerBlock_10 = document.getElementById("ab_10");
plusIcon_10.addEventListener("click", function () {
    subtractIcon_10.style.display = "block";
    answerBlock_10.style.display = "block";
    plusIcon_10.style.display = "none";
});
subtractIcon_10.addEventListener("click", function() {
    plusIcon_10.style.display = "block";
    subtractIcon_10.style.display = "none";
    answerBlock_10.style.display = "none";
});
const plusIcon_11 = document.getElementById("pi_11");
const subtractIcon_11 = document.getElementById("si_11");
const answerBlock_11 = document.getElementById("ab_11");
plusIcon_11.addEventListener("click", function () {
    subtractIcon_11.style.display = "block";
    answerBlock_11.style.display = "block";
    plusIcon_11.style.display = "none";
});
subtractIcon_11.addEventListener("click", function() {
    plusIcon_11.style.display = "block";
    subtractIcon_11.style.display = "none";
    answerBlock_11.style.display = "none";
});

document.getElementById('globalSearch').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const questionBlocks = document.querySelectorAll('.question__block');

    questionBlocks.forEach((block) => {
        const questionText = block.querySelector('.question__text').textContent.toLowerCase();
        const answerBlock = block.nextElementSibling;

        // Show or hide the question/answer based on the search term
        if (questionText.includes(searchTerm)) {
            block.style.display = '';
            answerBlock.style.display = ''; // Display the answer if necessary
        } else {
            block.style.display = 'none';
            answerBlock.style.display = 'none';
        }
    });
});
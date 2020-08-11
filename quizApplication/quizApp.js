var quesArr = [{
    question: "WWW stands for___________?",
    answer: "World Wide Web",
    options: ["World Wide Web", "World Whole Web", "Wide World Web", "Web World Wide"]
},
{
    question: "If a computer has more than one processor then it is known as__________?",
    answer: "Multiprocessor",
    options: ["Uni-process", "Multiprocessor", "Multi-threaded", "Multi-programming"]

},
{
    question: "Who is the father of Internet ?",
    answer: "Vint Cerf",
    options: ["Chares Babbage", "Denis Riche", "Vint Cerf", "Martin Cooper"]

},
{
    question: "1 Gigabyte is equal to ____________?",
    answer: "1024 megabytes",
    options: ["1024 bits", "1000 megabytes", "1024 kilobytes", "1024 megabytes"]

},
{
    question: "ALU is____________?",
    answer: "Arithmetic Logic Unit",
    options: ["Arithmetic Logic Unit", "Array Logic Unit", "Application Logic Unit", "None of above"]

}
];
var ques_Ele = document.getElementById("question");
var nextCount = 0, countclck = 0;
var flag = false
var score = 0;
var ques_Option = document.getElementsByClassName("quesOption")


function showQues() {
    var act_ive = document.getElementsByClassName("active")
    if (countclck < quesArr.length) {

        for (var i = 0; i < quesArr.length; i++) {
            ques_Ele.innerHTML = quesArr[nextCount].question
            for (var j = 0; j < quesArr[nextCount].options.length; j++) {
                ques_Option[j].innerHTML = quesArr[nextCount].options[j]
            }
        }
        nextCount++
        countclck++
        console.log(score)
        flag=false
    }
    else {
        alert("Congratulations!! " + "You scored " + score + " Points")
    }
}
function addActive1(e) {
    var act_ive = document.getElementsByClassName("active")

    for (var i = 0; i < act_ive.length; i++) {
        act_ive[i].classList.remove("active")
    }
    e.classList.add("active")
    if (flag == false) {
        if (act_ive[0].innerHTML == quesArr[nextCount - 1].answer) {
            score += 10
            flag = true
        }
    }
}

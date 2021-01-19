var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {


    alert("Overall Grade: "
        + parseInt(document.getElementById("assignments").value)*.5
        + parseInt(document.getElementById("projects").value)*.1
        + parseInt(document.getElementById("quizzes").value)*.1
        + parseInt(document.getElementById("exams").value)*.2
        + parseInt(document.getElementById("intex").value)*.1

    )

});
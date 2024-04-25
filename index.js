let submit = document.getElementById("submit")



submit.addEventListener("click" , function(e){
    let rollNumber = document.getElementById("roll_number").value
    let showName = document.getElementById("name").value
    let batch = document.getElementById("batch").value
    let section = document.getElementById("section").value
    e.preventDefault();


    localStorage.setItem('rollNumber', rollNumber);
    localStorage.setItem('name', showName);
    localStorage.setItem('batch', batch);
    localStorage.setItem('section', section);


    window.location.href="quiz.html"
   
        // var form = document.getElementById("quizForm");
        // var score = 0;

        
        
        // if (form.q1.value === "Paris") {
            
        //     score++;
        // }
        // if (form.q2.value === "Jupiter") {
        //     score++;
        // }
        
        // result.innerHTML=score
        //     var resultDiv = document.getElementById("result");
        //     resultDiv.innerHTML = "Your score: " + score + " out of 2"; // Update this value based on the number of questions
        
    }
)
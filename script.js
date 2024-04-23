
let result = document.querySelector("#result")
let submitForm = document.getElementById("submitForm")



submitForm.addEventListener("submit" , function(e){
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



window.onload=function(){

    let newName = localStorage.getItem('name');
    let batch1 = localStorage.getItem('batch');
    let section1 = localStorage.getItem('section');
    // const marks = localStorage.getItem('marks');

    
    

    let rnoResult=document.querySelector(".rnoResult")
    let nameResult=document.querySelector(".nameResult")
    let batchResult=document.querySelector(".batchResult")
    let sectionResult=document.querySelector(".sectionResult")

    nameResult.textContent=a
    batchResult.textContent=b
    sectionResult.textContent=c
    
    
}





let clickBtn = document.getElementById("clickBtn")
let result = document.getElementById("result")
let printName = document.getElementById("printName")
let studentsNames = document.getElementById("studentsNames")




function printNames(trainer){
    
    printName.innerHTML = trainer
    
}

function printStudents(student){
    studentsNames.innerHTML+=`<li>${student}</li>`
}


clickBtn.addEventListener("click",function(e){
    e.preventDefault()
    fetch("https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json")
    .then(function(response){
        response.json(response)
        .then(function(data){
            
            printNames(data.trainer)
            printStudents(data.students)

        })
        .catch(function(error){
            console.log(error)
        })
    })

    .catch(function(error){
        console.log(error)
    })
})
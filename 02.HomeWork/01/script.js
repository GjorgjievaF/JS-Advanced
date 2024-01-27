let callBtn = document.getElementById("callBtn")
let result = document.getElementById("result")



function printNames(people){
    result.innerHTML =`<li>${people[0].name}</li>
    <li>${people[1].name}</li>
    <li>${people[2].name}</li>
    <li>${people[3].name}</li>
    <li>${people[4].name}</li>
    <li>${people[5].name}</li>
    <li>${people[6].name}</li>`
       
       
    }
      



callBtn.addEventListener("click",function(e){
    e.preventDefault()
    fetch("http://api.open-notify.org/astros.json ")
    .then(function(response){
        response.json(response)
        .then(function(data){
            printNames(data.people)
            console.log(data.people)
            

        })
        .catch(function(error){
            console.log(error)
        })

    .catch(function(error){
        console.log(error)
    })

        
    })
})
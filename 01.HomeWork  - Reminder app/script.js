let titleInput = document.getElementById("titleInput")
let priorityInput = document.getElementById("priorityInput")
let colorInput =document.getElementById("colorInput")
let textarea = document.getElementById("textarea")
let addButton =document.getElementById("addBtn")
let showAllRemindersButton = document.getElementById("remindersShowBtn")
let result = document.getElementById("result")
let errMsg = document.getElementById("errMsg")


function colorTitle(){
    let color = colorInput.value
    titleInput.style.color=color
    
    
}


function addBtnFunction(){
    if(titleInput.value === "" || priorityInput.value ==="" || colorInput.value ==="" || textarea.value ===""){
        errMsg.innerHTML="*Invalid Input"
        errMsg.style.color = "red"

       
       
    }
    
    else{
        for(let i=0;i<dataBase.length;i++){  
                
            let myContent='<table border =1 height=50px >'
            myContent+='<tbody>'
    
            myContent+=`<tr>
           <td style.color :"red">Title :${dataBase[i].inputTitle}</td>
           <td>Prioority:${dataBase[i].inputPriority}</td>
        
           <td>Description :${dataBase[i].inputTarea}</td>`

           colorTitle(dataBase) 
                 
    
           result.innerHTML=myContent
           
           
           titleInput.value=""
           priorityInput.value=""
           colorInput.value=""
           textarea.value=""

           errMsg.innerHTML="";         

    }

    }

}

function Reminder(title,priority,color,tarea){
    this.inputTitle = title;
    this.inputPriority = priority;
    this.inputColor = color;
    this.inputTarea = tarea;
}

let dataBase=[];
addButton.addEventListener("click",function(e){
    e.preventDefault()

    


    let myReminder = new Reminder(titleInput.value,priorityInput.value,colorInput.value,textarea.value)
    dataBase.push(myReminder)
    
})

showAllRemindersButton.addEventListener("click" , function(e){
    e.preventDefault()
    

    addBtnFunction(dataBase)
    colorTitle(dataBase)
   

})



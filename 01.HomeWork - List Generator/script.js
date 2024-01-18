let colorInput=document.getElementById("colorInput")
let fontSizeInput = document.getElementById("fontSizeInput")
let itemInput = document.getElementById("itemInput")
let generateBtn = document.getElementById("generateBtn")
let result = document.getElementById("result")
let errMsg = document.getElementById("errMsg")
let dataBase=[];


function colorChange(){
   
        let color = colorInput.value;
        document.body.style.color = color  

}

function fontChange(){
    let font = fontSizeInput.value;
    document.body.style.fontSize=font
}

function List(color,fontSize,item){
    this.inputColor = color;
    this.inputFontSize = fontSize;
    this.inputItem = item;
}

generateBtn.addEventListener("click",function(e){
    
    e.preventDefault();

    

    if(!colorInput.value || !fontSizeInput.value || !itemInput.value ){
        errMsg.innerHTML="Invalid inputs"
        errMsg.style.color = "red"
        return

    }

    errMsg.innerHTML=""   
    
    
    let myList = new List(colorInput.value,fontSizeInput.value,itemInput.value)
    
    dataBase.push(myList)

    let myContent = '<ul>'
    result.innerHTML=""

    for(let i=0;i<  dataBase.length;i++){
        myContent+=`<li>${dataBase[i].inputColor}-${dataBase[i].inputFontSize}-${dataBase[i].inputItem}</li>`
        colorChange(dataBase)
        fontChange(dataBase)
    }
    

    

    result.innerHTML=myContent
    
    colorInput.value="";
    fontSizeInput.value="";
    itemInput.value="";

   

})
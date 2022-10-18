var saveButtons=document.querySelectorAll(".saveBtn")
for (var i=0; i<saveButtons.length; i++){
    saveButtons[i].addEventListener ("click", saveNote)
}   
function saveNote(event){
console.log(event)
var className=event.target.attributes[1].value
console.log(className)
var inputValue=document.querySelector("." + className).value
console.log(inputValue)
localStorage.setItem(className, inputValue)
}
//set up local storage for save button to save entries

document.querySelector(".text9").value=localStorage.getItem("text9")
document.querySelector(".text10").value=localStorage.getItem("text10")
document.querySelector(".text11").value=localStorage.getItem("text11")
document.querySelector(".text12").value=localStorage.getItem("text12")
document.querySelector(".text1").value=localStorage.getItem("text1")
document.querySelector(".text2").value=localStorage.getItem("text2")
document.querySelector(".text3").value=localStorage.getItem("text3")
document.querySelector(".text4").value=localStorage.getItem("text4")
document.querySelector(".text5").value=localStorage.getItem("text5")
document.querySelector(".text6").value=localStorage.getItem("text6")

//do queryselector for each timeblock
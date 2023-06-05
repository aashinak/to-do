
const button= document.getElementById('btn')
const textBox= document.getElementById('input-val')
const list =document.getElementById('lists')

//event listener for identifying button click or enter from keyboard for adding tasks
button.addEventListener('click', btnClick)
addEventListener('keypress', (e)=>{
    if (e.key === 'Enter') {
        btnClick()
      }
})
//function checks for null value input, else creates each child 
function btnClick(){
    var inputText= textBox.value
    if(inputText ===""){
        alert('You have to enter something')
    }else{
        
        const listBox= document.createElement("li")
        listBox.innerText=textBox.value
        list.appendChild(listBox)
        const span =document.createElement("img")
        span.src="./image/close.png"
        listBox.appendChild(span)
        textBox.value=""
        dataStore()
        
        
    }
}

//identifies clicks for strikeoff and removal off tasks
list.addEventListener('click', (e)=>{
   

    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('check')
        dataStore()
    }else if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove()
        dataStore()
    }

    
})

//stores data to localstorage
function dataStore(){
    localStorage.setItem("data",list.innerHTML)
}
//loads previously stored data back
function load(){
    list.innerHTML=localStorage.getItem("data")
}
load()







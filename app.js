
const button= document.getElementById('btn')
const textBox= document.getElementById('input-val')
const list =document.getElementById('lists')


button.addEventListener('click', btnClick)
addEventListener('keypress', (e)=>{
    if (e.key === 'Enter') {
        btnClick()
      }
})
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
list.addEventListener('click', (e)=>{
   

    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('check')
        dataStore()
    }else if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove()
        dataStore()
    }

    
})
function dataStore(){
    localStorage.setItem("data",list.innerHTML)
}

function load(){
    list.innerHTML=localStorage.getItem("data")
}
load()







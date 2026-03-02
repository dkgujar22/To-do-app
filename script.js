

const inputtext=document.getElementById("exampleFormControlInput1");
const btn=document.getElementById("btn")
const list=document.getElementById("list");

btn.addEventListener('click',()=>{
    const inputvalue=inputtext.value
    

    if(inputvalue.trim()!==''){
    const newelem=document.createElement("li");
    const dateElem=document.createElement("a");
    const date=new Date()
    newelem.innerText=inputvalue;
    dateElem.innerText=date
    // newelem.innerHTML=date
    list.appendChild(newelem);
    newelem.appendChild(dateElem)
    inputtext.value=''
    }
   
    
})

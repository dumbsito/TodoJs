const dateNumber=document.getElementById("dateNumber");
const dateText=document.getElementById("dateText");
const dateMonth=document.getElementById("dateMonth");
const dateYear=document.getElementById("dateYear");


const tasksContainer= document.getElementById("tasksContainer");

const setDate=function(){
    const date=new Date();
    dateNumber.textContent=date.toLocaleDateString("es",{day:"numeric"});
    dateText.textContent=date.toLocaleDateString("es",{weekday:"long"});
    dateMonth.textContent=date.toLocaleDateString("es",{month:"short"});
    dateYear.textContent=date.toLocaleDateString("es",{ year:"numeric"});
};


 
const agregarTask=function(event){
    event.preventDefault();
    const{value}=event.target.taskText;
    if(!value)return;
    const task=document.createElement("div");
    task.classList.add("task","roundBorder");
    task.addEventListener("click",changeTaskState)
    task.textContent=value;
    tasksContainer.prepend(task);
    event.target.reset();
    
};

const changeTaskState=function(event){
    event.target.classList.toggle("done"); 
}

const order=function(){
    const done=[];
    const toDo=[];
    tasksContainer.childNodes.forEach((e)=>{
        e.classList.contains("done")? done.push(e): toDo.push(e)
    })
    return[...toDo,...done];
}

const ordenarTask=()=>{
    order().forEach(e=>tasksContainer.appendChild(e))
    }

setDate();
dateYear.style.backgroundColor='#f3f3f3';


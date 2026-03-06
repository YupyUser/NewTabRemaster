let management = document.querySelector(".management-button");
let work = document.querySelector(".work-button");
let knowledge = document.querySelector(".knowledge-button");
let forums = document.querySelector(".forums-button");

let management_group = document.querySelector(".management").getElementsByTagName("a");
let work_group = document.querySelector(".work").getElementsByTagName("a");
let knowledge_group = document.querySelector(".knowledge").getElementsByTagName("a");
let forums_group = document.querySelector(".forums").getElementsByTagName("a");

management.addEventListener("click",()=> {
    let c=0;
    setInterval(()=>{
        if (management_group[c].style.display == "none") { 
            management_group[c].style.display = "flex";
            c++;
        } else {
            management_group[c].style.display = "none";
            c++;
        }
    },50);
});
work.addEventListener("click",()=> {
    let c=0;
    setInterval(()=>{
        if (work_group[c].style.display == "none") { 
            work_group[c].style.display = "flex";
            c++;
        } else {
            work_group[c].style.display = "none";
            c++;
        }
    },50);
});
knowledge.addEventListener("click",()=> {
    let c=0;
    setInterval(()=>{
        if (knowledge_group[c].style.display == "none") { 
            knowledge_group[c].style.display = "flex";
            c++;
        } else {
            knowledge_group[c].style.display = "none";
            c++;
        }
    },50);
});
forums.addEventListener("click",()=> {
    let c=0;
    setInterval(()=>{
        if (forums_group[c].style.display == "none") { 
            forums_group[c].style.display = "flex";
            c++;
        } else {
            forums_group[c].style.display = "none";
            c++;
        }
    },50);
});
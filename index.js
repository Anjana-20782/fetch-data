
document.getElementById("btn").addEventListener("click",()=>{
fetch("https://jsonplaceholder.typicode.com/posts").then(response=>response.json())
.then((data)=>{
console.log(data);
let str=``

data.forEach(ele => {
    str+=`
    <li><a href="./add.html${ele.id}">${ele.title}</a></li>
    `
})
document.getElementById("list").innerHTML=str
})
})
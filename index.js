// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { nav } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=nav();

import { search,append } from "./fetch.js";


let categories = document.getElementById("sidebar").children;


// console.log(categories);

async function myfunc(){
    let query = document.getElementById("search_input").value;
    let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;
    let data = await search(url);
    console.log(data.articles);
    let container = document.getElementById("results"); 
    container.innerHTML=null;      
        append(data.articles,container);
}


document.getElementById("search_input").addEventListener("keydown",myfunc)


for(let el of categories){
    el.addEventListener("click",function(){
        // console.log(this.id);
        clfun(this.id)
    })    
}


async function clfun(qu){
    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${qu}`;

    let data = await search(url);
    console.log(data.articles);
    let container = document.getElementById("results"); 
    container.innerHTML=null;      
        append(data.articles,container);    

}


async function myfu(){
    let url1 = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;
    let data = await search(url1);
    let container = document.getElementById("results");
    append(data.articles,container)
}
myfu();



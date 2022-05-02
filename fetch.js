

async function search(url){
    try {
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data);
        return data;
    } catch (err) {
        console.log(err);        
    }
    // return data;
}

function append(data,container){
    data.forEach(el => {

        let mDiv = document.createElement("div");
        mDiv.addEventListener("click",function(){
            localtorage(el)
        })
        
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src=el.urlToImage;
        let title = document.createElement("h3");
        title.innerText=el.title;
        let containt = document.createElement("p");
        containt.innerText=el.content;

        mDiv.append(image,title,containt);
        container.append(mDiv);
    });
}

function localtorage(el){
    localStorage.setItem("news",JSON.stringify(el));
    window.location.href="news.html"
}


export {search,append};

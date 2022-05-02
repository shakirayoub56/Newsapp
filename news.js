// Ude Import export (MANDATORY)

let data = JSON.parse(localStorage.getItem("news"));

console.log(data);

let container = document.getElementById("detailed_news");

        let mDiv = document.createElement("div");
              
        // let div = document.createElement("div");

        let image = document.createElement("img");
        image.src=data.urlToImage;

        let title = document.createElement("h3");
        title.innerText=data.title;

        let containt = document.createElement("p");
        containt.innerText=data.content;

        mDiv.append(image,title,containt);
        container.append(mDiv);

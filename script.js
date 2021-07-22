var i = 0;
var poze = new Array("./img/image0.jpg","./img/image1.jpg","./img/image2.jpg","./img/image3.jpg","./img/image4.jpg");
var bg = document.getElementById("id");
var h1 = document.getElementById("h"); 
var j = 0;


function poo() {
    i++;
    
     if (i == poze.length) {
        i = 0;
     }
     bg.style.background = "url(" + poze[i] + ") center center fixed";
     console.log(i);
     
     h1.innerHTML = "sint gey de " + i + " ori"; 
     if(i==1){
        h1.innerHTML = "sint foarte gey";
     }
     if(i==0){
        h1.innerHTML = "coaie cat de ratata sa fii sa plangi lmao";
     }
     
     j++;
     if(j == 10){
         location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
     }

}
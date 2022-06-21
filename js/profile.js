const Container = document.querySelector(".New__bg")

let manga;
let MyManga=[]

if(localStorage.manga){
    manga = JSON.parse(localStorage.getItem("manga"))
}
else{
    manga=[]
}

function Card(img,title, Genre,description) {
    this.img = img;
    this.title = title;
    this.Genre = Genre;
    this.description = description;
    
}

const CreateCard = (manga, index) => {
    return `
    <div class="Manga">
    
    <img src="./img/${manga.img}.jpg" alt="berserk">
    <div class="info">
        <h3><a href="#">${manga.title}</a></h3>
        <button onClick="AddMangaInMyList(${index})" class="AddBtn">Добавить</button>
        <h4>Жанры: ${manga.Genre}</h4>
        <p>${manga.description}</p>
        
    </div>
    

</div>
    `
}

const Show = ()=>{
    Container.innerHTML="" 
    if(manga.length>0){
        manga.forEach((item,index) => {
            Container.innerHTML += CreateCard(item,index); 
        });
    }
}

Show()
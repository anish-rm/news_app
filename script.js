const cont = document.querySelector('.con');
const im = document.querySelector('.im1');
const im2 = document.querySelector('.im2');
const im3 = document.querySelector('.im3');
const det = document.querySelector('.details');
const det2 = document.querySelector('.details2');
const det3 = document.querySelector('.details3');
const search = document.querySelector('.city')
const getTodos = async() => { 
const response = await fetch('https://newsapi.org/v2/everything?q=Tesla&apiKey=8a2c8a8140af4f958383d2e32cc874b8');
const data = await response.json();
console.log(data);
return data.articles;
}


getTodos().then(data=> {
    im.setAttribute('src',data[0].urlToImage);
    const html1 =` <h5 class="card-title">Author: ${data[0].author}</h5>
    <h1 class="card-text"><small class="text-muted">${data[0].title}</small></h1>
    <p class="card-text">${data[0].description}</p>
    <a href=${data[0].url}>Know more</a>
    `;
    det.innerHTML = html1;
    im2.setAttribute('src',data[1].urlToImage);
    const html2 =` <h5 class="card-title">Author: ${data[1].author}</h5>
    <h1 class="card-text"><small class="text-muted">${data[1].title}</small></h1>
    <p class="card-text">${data[1].description}</p>
    <a href=${data[1].url}>Know more</a>
    `;
    det2.innerHTML = html2;
    im3.setAttribute('src',data[2].urlToImage);
    const html3 =` <h5 class="card-title">Author: ${data[2].author}</h5>
    <h1 class="card-text"><small class="text-muted">${data[2].title}</small></h1>
    <p class="card-text">${data[2].description}</p>
    <a href=${data[2].url}>Know more</a>
    `;
    det3.innerHTML = html3;
    console.log(data);
}).catch((err) => console.log(err));

search.addEventListener('submit', e=>{
    e.preventDefault();
    console.log(search.city.value);
})
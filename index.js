function displaySongs(data){ 
    if(data.length === 0) {
        const div = document.createElement("div")
        div.innerText = "Result not found..."
        document.body.appendChild(div);
    }
    for (var i = 0; i < data.length; i++){
        let div1 = document.createElement("div"),
             div2 = document.createElement("div");
        div1.classList.add("col-lg");
        div2 = document.createElement("card-body");
        var thumbnail = document.createElement("img");
        thumbnail.src = data[i].result.header_image_thumbnail_url;
        thumbnail.style.height = '300px';
        thumbnail.style.width = '300px';
        var a = document.createElement("a");
        a.innerHTML = data[i].result.full_title
        a.href = data[i].result.url;
        div1.appendChild(thumbnail);
        div2.appendChild(a);
        div1.appendChild(div2);
        document.getElementById("row").appendChild(div1);
    }
    
}

const form = document.querySelector("form");
const searchBtn = document.getElementById("search-btn");

form.addEventListener("submit", function(event){
    event.preventDefault();
    var searchKeyword = document.getElementById("keyword").value;
    console.log(searchKeyword)
    
});

var options = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/search',
    params: {q: `${searchKeyword}`},
    headers: {
        'x-rapidapi-host': 'genius.p.rapidapi.com',
        'x-rapidapi-key': 'ee685e6aadmshabc472a5750b606p1b5ea4jsn162990b75a3b'
    }
};

searchBtn.addEventListener("click",function(event){
    event.preventDefault();
    axios.request(options)
        .then(res => displaySongs(res.data.response.hits))
        .catch(err => console.error(err)); 
});

   













    



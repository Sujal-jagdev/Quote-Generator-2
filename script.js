let quate = document.getElementById('quate');
let author = document.getElementById('author');
let btn = document.getElementById('btn');

const getData = async ()=>{
    let response = await axios.get('https://api.quotable.io/random');
    let author_ = response.data.author;
    let qute_ = response.data.content;

    quate.innerHTML=qute_;
    author.innerHTML=author_;
}

getData()

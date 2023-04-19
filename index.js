const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ed23e17862msh695cac1642ce76ep1aa4fdjsn16b7c59ea9ce',
		'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
	}
};

fetch('https://gamerpower.p.rapidapi.com/api/giveaways?platform=steam&type=loot&sort-by=popularity', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

var gamemov =document.getElementsByClassName('gamemov')
var gameAPI= 'https://rapidapi.com/digiwalls/api/gamerpower/'

// function start(){
// gamemov(rendergamemov);
// }
// start();

function start(){
    gamemov(function(options){
        // console.log(options);
    rendergamemov(options);
    });
    }
    start();

function gamemov(callback){
fetch(gameAPI)
.then(function(response){
    return response.json();
})
    .then(callback);
}

function rendergamemov(options){
    var gamemovBlock = document.querySelector('#gamemov');
    var htmls = options.map(function(option){
        return`
        <li>
        <h3${options.title}></h3>
        <p>${options.description}</p>
        <p>${options.instruction}</p>
        </li>
        `;
    });
    gamemovBlock.innerHTML=htmls.join('');
}


/**
 *  .map() tạo một mảng từ việc gọi một hàm cụ thể trên từng mục trong mảng cha. 
 join() method creates and returns a new string by concatenating all of the elements in an array*/

function sub(){
    var sub= getElementsById('submit');
    sub.addEventListener('click', addItem);
}
 var store = localStorage




async function movieShow(){

	let name = document.getElementById("movie").value
	
	//keyboard enter
	let input = document.getElementById("movie")
	input.addEventListener("keydown", function(event){
		if(event.keyCode === 13){
			event.preventDefault();
			document.getElementById("search").click()
		}
	})

	//Api call from the imdb Api.
	//if this is being used please change Api key to your own from rapid api imdb.
	let response = await fetch("https://imdb8.p.rapidapi.com/auto-complete?q="+ name, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c43531d21bmsh0c344bc04980952p1e269ajsn1ab5efe1f235",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
})
	let data = await response.json()

  	//displaying data
	let title = data['d'][0]['l']
	let starring = data['d'][0]['s']
	let image = data['d'][0]['i']['imageUrl']
	let year = data['d'][0]['y']
	let rank = data['d'][0]['rank']

	document.getElementById("title").innerHTML = title
	document.getElementById("starring").innerHTML = "Starring:" + " " + starring
	document.getElementById("image").src = image
	document.getElementById("rank").innerHTML = "Rank:" + " " + rank
	document.getElementById("year").innerHTML = "Release Year:" + " " + year


}



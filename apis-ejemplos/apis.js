
// fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=1281")
fetch("https://pokeapi.co/api/v2/pokemon")

.then((response)=> {
  return response.json();
})
.then((json)=> {
  console.log(json)
})

 

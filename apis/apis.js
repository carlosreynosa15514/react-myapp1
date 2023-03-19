const data = fetch("https://es.wikipedia.org/wiki/Wikipedia:Portada") {
.then(response)=> {
        console.log(response);
  }
}
 
console.log(data)
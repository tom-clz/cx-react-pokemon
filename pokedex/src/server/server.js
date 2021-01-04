const express = require("express");
const cors = require("cors");
const app = express();
const pokemons = require("./pokedex.json");

app.use(cors());
app.use(express.static("public"));


app.get("/pokemons", function (request, response) {
  let my_filter = request.param("filter");

  if (my_filter){
    const regex = "[a-z]*"+ my_filter.toLowerCase() + "[a-z]*";
    let filtered_pokemons = [];

    for (var key in pokemons) {
             if (pokemons[key]["nom"].toLowerCase().match(regex)){
        filtered_pokemons.push(pokemons[key]);
      }
    }
    console.warn(filtered_pokemons);

    return response.json(filtered_pokemons);
  }
  else{
    return response.json(pokemons);
  }
});

app.get("/pokemons/:id", function (request, response) {
  return response.json(pokemons[`${request.params.id - 1}`]);
});


// Programme principal
var myArgs = process.argv.slice(2);

if ( myArgs[0] === undefined) {
  console.log("\n[usage] node server.js <port>\n")
  process.exit(1);
}

const port = Number(myArgs[0])
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

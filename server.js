const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios"); //acessa app assim como 'fetch'

app.use(cors());
//politica de comunicação do browser (bloqueia acesso a API como padrão), caso não utilizado o cors

app.get("/", async (req, res) => {
  //Promise -> função deve ser assincrona
  try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    //Response.data() == Response.json() -> Retirar dado do output
    //Desconstructor {data} from response

    //return res.json([{ name: "daniel" }, { name: "dandara" }]);
    return res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen("3030");

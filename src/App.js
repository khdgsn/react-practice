import "./App.css";
import SocialFollow from "./SocialFollow.js/social";
import Header from "./header.js";
import Content from "./content.js";
/* import axios from "axios";

const options = {
  method: 'POST',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/classify',
  params: {locale: 'en_us'},
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
  },
  data: {plu_code: '', title: 'Kroger Vitamin A & D Reduced Fat 2% Milk', upc: ''}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
*/

function App() {
  let arrOne = [{ 
    name: "Kat", 
    story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam.", 
    img: "https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg"
  }];
  
  let arrTwo = [{ 
    name: "Kath", 
    story: "The Peacock's spectacular pattern of eyespots evolved to startle or confuse predators, make it one of the most easily recognized and best-known species.",
    img: "https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png"
  }];

  let arrThree = [{ 
    name: "Kathryn", 
    story: "The Belgian or Belgian Draft, French: Trait belge, Dutch: Belgisch Trekpaard, is a Belgian breed of draft horse.", 
    img: "https://i.pinimg.com/originals/cd/5b/e9/cd5be92c353be4ac383d4644ffeccb64.jpg"
  }];

  return (
    <div className="App">
      <div className="nav-container">
        <nav>
          <ul>
            <li className="nav-links">
              <a href="app.js">About me </a>
            </li>
            <li className="nav-links">
              <a href="app.js">Contact </a>
            </li>
          </ul>
        </nav>
      </div>
      <Header />

      <div className="welContainer">
        <h2>Hello and welcome to my blog</h2>
      </div>

      <Content locator="one" author={arrOne[0]["name"]} paragraph={arrOne[0]["story"]} avatar={arrOne[0]["img"]} />

      <Content locator="two" author={arrTwo[0]["name"]} paragraph={arrTwo[0]["story"]} avatar={arrTwo[0]["img"]} />

      <Content locator="three" author={arrThree[0]["name"]} paragraph={arrThree[0]["story"]} avatar={arrThree[0]["img"]} />

      <header>
        <SocialFollow />
      </header>
    </div>
  );
}

export default App;

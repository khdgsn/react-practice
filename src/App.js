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
  let text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam.";
  let speech = "hello world";

  let imageOne =
    "https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg";
  let imageTwo =
    "https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png";

  arr = [{ author: "kath", story: "words wokjadf;ljas d", img: "address" }];

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

      <Content locator="one" paragraph={arr[0][1]} avatar={imageOne} />

      <Content locator="two" paragraph={speech} avatar={imageTwo} />
      {/*
      <Content />

      <Content /> */}

      <header>
        <SocialFollow />
      </header>
    </div>
  );
}

export default App;

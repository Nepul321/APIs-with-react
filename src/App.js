import './App.css';
import { useState, useEffect } from 'react';

function CoffeeIngredients(props) {
  const {currentCoffee} = props
  const ingredients = currentCoffee.ingredients
  return (
    ingredients.map((ingredient, id) => {
      return (
        <p key={id}>{ingredient}</p>
      )
    })
  )
}

function Coffee(props) {
  const {item} = props
  return (
    <div key={item.id} className="card mb-3">
    <div className="card-body">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <div id="ingredients">
        <h4>Ingredients</h4>
        <CoffeeIngredients currentCoffee={item}/>
      </div>
    </div>
    </div>
  )
}

function Coffeelist() {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    const url = "https://api.sampleapis.com/coffee/hot"
    fetch(url)
    .then((res) => {
       return res.json();
    })
    .then((data) => {
      setCoffee(data)
    })
  }, [])


  return (
    <div className="container App">
      <h1 className="my-3">Coffee</h1>
      <div id="coffee">
      {
        coffee.map((item) => {
          return (
           <Coffee item={item} />
          )
        })
      }
      </div>
    </div>
  );
}

function App() {
  return (
    <Coffeelist />
  )
}

export default App;

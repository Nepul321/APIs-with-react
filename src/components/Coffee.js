import CoffeeIngredients from "./Ingredients";

function Coffee(props) {
    const {item} = props
    return (
      <div className="card mb-3">
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

export default Coffee;
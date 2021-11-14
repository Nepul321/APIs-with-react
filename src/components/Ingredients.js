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

export default CoffeeIngredients;
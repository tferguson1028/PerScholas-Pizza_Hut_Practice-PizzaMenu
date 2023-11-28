function createPizza(name, description, vegetarian, image)
{
  image = image ? String(image) : `https://www.pizzahut.com/assets/w/tile/thor/pizza_${name}.png`;
  image = image.replaceAll(" ", "_").replaceAll("'", "").replaceAll("®", "");
  return(
  {
    name: `${name.trim()} Pizza`,
    description: description,
    vegetarian: vegetarian,
    imagePath: image
  })
}

// Ref
// createPizza(`Name`, `Description`, false, imageURL)

const pizzas = [
  createPizza(
    `Cheese`, 
    `Your favorite cheese pizza, with your choice of crust covered in classic marinara sauce and topped with gooey mozzarella cheese. It's anything but "plain."`, 
    true,
  ),
  createPizza(
    `Pepperoni`, 
    `You literally can't go wrong with pepperoni and mozzarella cheese. Classic for a reason.`, 
    false,
  ),
  createPizza(
    `Supreme`, 
    `This loaded pizza is the perfect choice for family dinner or a lunch with your crew. Includes pepperoni, seasoned pork, beef, mushrooms, green bell peppers and onions.`, 
    false,
  ),
  createPizza(
    `Meat Lover's®`, 
    `Packed with pepperoni, Italian sausage, ham, bacon, seasoned pork and beef, this pizza is NOT messing around.`, 
    false,
    "https://www.pizzahut.com/assets/w/tile/thor/MeatLovers_RecipeTile_Web_175x210.png"
  ),
  createPizza(
    `Pepperoni Lover's®`, 
    `Ever wished your pepperoni pizza had more pepperoni? Of course you did. This oven-hot pizza has 50% more pepperoni than our average pizza pie.`, 
    false,
    // "https://www.pizzahut.com/assets/w/tile/thor/pizza_Pepperoni_Lovers.png"
  ),
  createPizza(
    `Veggie Lover's®`, 
    `Description`, 
    true
  ),
  createPizza(
    `Backyard BBQ Chicken`, 
    `Description`, 
    false
  ),
  createPizza(
    `Buffalo Chicken`, 
    `Description`, 
    false
  ),
  createPizza(
    `Hawaiian Chicken`, 
    `Description`, 
    false
  ),
];

module.exports = pizzas;

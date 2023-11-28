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
    true
  ),
  createPizza(
    `Pepperoni`, 
    `You literally can't go wrong with pepperoni and mozzarella cheese. Classic for a reason.`, 
    false
  ),
  createPizza(
    `Supreme`, 
    `This loaded pizza is the perfect choice for family dinner or a lunch with your crew. Includes pepperoni, seasoned pork, beef, mushrooms, green bell peppers and onions.`, 
    false
  ),
  createPizza(
    `Meat Lover's®`, 
    `Packed with pepperoni, Italian sausage, ham, bacon, seasoned pork and beef, this pizza is NOT messing around.`, 
    false
  ),
  createPizza(
    `Pepperoni Lover's®`, 
    `Ever wished your pepperoni pizza had more pepperoni? Of course you did. This oven-hot pizza has 50% more pepperoni than our average pizza pie.`, 
    false
  ),
  createPizza(
    `Veggie Lover's®`, 
    `Pizza is officially a vegetable. This garden delight has all the fresh veggie toppings you love: mushrooms, red onions, green bell peppers, Roma tomatoes and black olives.`, 
    true
  ),
  createPizza(
    `Backyard BBQ Chicken`, 
    `This BBQ pizza comes topped with grilled chicken, bacon and red onion. Who's the grillmaster now?`, 
    false
  ),
  createPizza(
    `Buffalo Chicken`, 
    `We took your favorite food and put it on a pizza. With tangy buffalo sauce, tender chicken and banana peppers, this beautiful masterpiece tastes like a football game feels.`, 
    false
  ),
  createPizza(
    `Hawaiian Chicken`, 
    `Give your taste buds a tropical vacation with this amped up Hawaiian pizza. It's got tasty chicken, ham, pineapple AND green peppers.`, 
    false
  ),
];

module.exports = pizzas;

function createPizza(name, description, vegetarian, image = "#")
{
  return(
  {
    name: `${name.trim()} Pizza`,
    description: description,
    vegetarian: vegetarian,
    imagePath: image
  })
}

// createPizza(`Name`, `Description`, false)

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

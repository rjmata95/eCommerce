export default function (data) {
  const products = data.map((product) => {
    let price = getRandomInt(100);
    return {
      id: product.idMeal,
      title: product.strMeal,
      image: product.strMealThumb,
      price,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, esse!",
    };
  });
  return products;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

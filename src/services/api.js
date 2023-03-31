import imgEstrella from "../images/estrellitaylaia.png";
const callToApi = () => {
  const url = "https://fakestoreapi.com/products";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const selectedData = data.map((eachProduct) => {
        return {
          title: eachProduct.title,
          price: eachProduct.price,
          id: eachProduct.id,
          image: eachProduct.image || imgEstrella,
          rating: eachProduct.rating,
          category: eachProduct.category,
        };
      });
      return selectedData;
    });
};

export default callToApi;

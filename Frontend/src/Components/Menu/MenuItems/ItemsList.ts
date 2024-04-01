import axios from "axios";
const baseUrl = "http://localhost:8000/";
const categoryUrl = `${baseUrl}app/categories/`;
axios
  .get(categoryUrl)
  .then((respons) => {
    console.log(respons.data);
  })
  .catch((error) => {
    console.error(error);
  });

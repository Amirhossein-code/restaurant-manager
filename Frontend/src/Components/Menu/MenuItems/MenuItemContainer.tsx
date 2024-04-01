import { useState, useEffect } from "react";
import { CATEGORYURL } from "../../../Constans";
import { ITEMSURL } from "../../../Constans";
import axios, { CanceledError } from "axios";
// import MenuItemHolder from "./MenuItemHolder";
interface Category {
  id: number;
  title: string;
  image: string;
  slug: string;
}
interface CategoryApiResponse {
  results: Category[];
}
interface Items {
  id: number;
  title: string;
  image: string;
  slug: string;
}
interface ItemsApiResponse {
  results: Items[];
}
const MenuItemContainer = () => {
  const [categories, setCategories] = useState<Items[]>([]);
  useEffect(() => {
    // getting categories from api and set it to categories state hook
    const controller = new AbortController();
    axios
      .get<ItemsApiResponse>(CATEGORYURL, {
        signal: controller.signal,
      })
      .then((response) => {
        setCategories(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        console.error(error);
      });
    return () => controller.abort();
  }, []);
  // getting items from api and set it to items state hook
  const [items, setItems] = useState<Category[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<CategoryApiResponse>(ITEMSURL, {
        signal: controller.signal,
      })
      .then((response) => {
        setItems(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        console.error(error);
      });
    return () => controller.abort();
  }, []);
  console.log(items, categories);
  return <></>;
};

export default MenuItemContainer;

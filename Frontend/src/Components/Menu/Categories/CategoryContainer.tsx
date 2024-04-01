import axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";
import Category from "./Category";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
interface Category {
  id: number;
  title: string;
  image: string;
  slug: string;
}
interface ApiResponse {
  results: Category[];
}
const CategoryContainer = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<ApiResponse>("http://localhost:8000/app/categories/", {
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
  console.log(categories);
  return (
    <div className="w-full h-full flex-center">
      <Swiper
        loop={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
      >
        {categories.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div>
                <Category
                  slug={item.slug}
                  id={item.id}
                  name={item.title}
                  img={item.image}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoryContainer;

import Category from "./Category";
import CategoryList from "./CategoryList";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
interface Category {
  id: number;
  name: string;
  img: string;
}

const CategoryContainer = () => {
  return (
    <div className="w-full h-full flex-center">
      <Swiper
        loop={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
      >
        {CategoryList.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div>
                <Category slug={item.slug} id={item.id} name={item.name} img={item.img} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoryContainer;

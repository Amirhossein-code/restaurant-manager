import {useEffect} from "react"
import CategoryContainer from "./Categories/CategoryContainer"
import MenuItemContainer from "./MenuItems/MenuItemContainer"
const MenuPage = () => {
  useEffect(() =>{
    const getElementDom = ()=> {
      const targetCategory = document.getElementsByClassName("swiper-slide-next")
      console.log(targetCategory)
    }
  } ,[])
  return (
    <div className="w-full h-full container">
        <div className="w-full my-5 h-1/6">
            <CategoryContainer onSwiper={() => getElementDom()} />
        </div>
        <div className="bg-red-900 w-full h-[10%] flex-center">
            <p>menu title</p>
        </div>
        <div className="w-full bg-violet-900">
            <MenuItemContainer />
        </div>
    </div>
  )
}

export default MenuPage
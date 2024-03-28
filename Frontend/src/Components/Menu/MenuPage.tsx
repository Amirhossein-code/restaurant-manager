import CategoryContainer from "./Categories/CategoryContainer"
import MenuItemContainer from "./MenuItems/MenuItemContainer"

const MenuPage = () => {
  return (
    <div className="w-full h-full container">
        <div className="w-full h-1/6 bg-green-200">
            <CategoryContainer />
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
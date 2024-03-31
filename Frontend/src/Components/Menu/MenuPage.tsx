
import CategoryContainer from "./Categories/CategoryContainer"
import MenuItemContainer from "./MenuItems/MenuItemContainer"
const MenuPage = () => {
  return (
    <div className="w-full h-full container">
        <div className="w-full my-5 h-1/6">
            <CategoryContainer />
        </div>
        <div className="w-full bg-violet-900">
            <MenuItemContainer />
        </div>
    </div>
  )
}

export default MenuPage
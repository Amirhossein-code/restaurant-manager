interface Props {
  id: number;
  name: string;
  img: string;
}
const Category = ({ name, img , id }: Props) => {
  return (
    <div id={String(id)}
      className=" rounded-full flex items-center justify-around flex-col space-y-1
     bg-green-800 w-[80px] h-[120px]"
    >
      <img className="w-full bg-white rounded-full" src={img} alt={name} />
      <span className="">{name}</span>
    </div>
  );
};

export default Category;

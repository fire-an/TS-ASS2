import { useEffect, useState } from "react";
import { IProduct } from "../type/product";
interface IProps {
  products: IProduct[];
  onRemove: (id: number) => void;
}
const ProductPage = (props: IProps) => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    setData(props.products);
  }, [props]);
  const removeProduct = (id: number) => {
    props.onRemove(id);
  };
  return (
    <div>
      <header className="container mx-auto flex justify-between items-center">
        <nav>
          <a className="px-4 py-3" href="#">
            Danh mục 1
          </a>
          <a className="px-4 py-3" href="#">
            Danh mục 2
          </a>
          <a className="px-4 py-3" href="#">
            Danh mục 3
          </a>
          <a className="px-4 py-3" href="#">
            Danh mục 4
          </a>
          <a className="px-4 py-3" href="#">
            Danh mục 5
          </a>
        </nav>
        <form action="">
          <input className="border-2 mr-2" type="text" placeholder="Tìm kiếm" />
          <input className="bg-[#34A1E8]" type="submit" />
        </form>
        <div>
          <button className="mx-3 border p-2">
            <a href="/signin">Đăng nhập</a>
          </button>
          <button className="mx-3 border p-2">
            <a href="/signup">Đăng ký</a>
          </button>
        </div>
      </header>
      <section>
        <img
          src="https://hoangphuongtek.com/wp-content/uploads/2021/03/Banner-Infinity-Gear.jpg"
          alt=""
        />
      </section>
      <h2 className="text-center font-bold text-4xl my-5">Sản phẩm mới</h2>
      <div className="grid grid-cols-3 gap-8">
        {data.map((product) => {
          return (
            <div className="border p-4" key={product.id}>
              <img className="h-[300px] mx-auto" src={product.image} alt="" />
              <h2 className="text-[#34A1E8]">{product.name}</h2>
              <h2>{product.price} ₫</h2>
              <a href=""></a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;

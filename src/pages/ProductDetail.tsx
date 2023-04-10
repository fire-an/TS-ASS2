import React from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../type/product";
interface IProps {
  products: IProduct[];
}

const ProductDetailPage = (props: IProps) => {
  const { id } = useParams();
  const currentProduct = props.products.find((item) => item.id == Number(id));
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
      <div>
        <h3>{currentProduct?.name}</h3>
        <p>{currentProduct?.price}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;

{
  /* <div>
      <h3>{currentProduct?.name}</h3>
      <p>{currentProduct?.price}</p>
    </div> */
}

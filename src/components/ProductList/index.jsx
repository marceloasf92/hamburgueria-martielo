import Product from "../Product";
import "./styles.css";
const ProductList = ({
  products,
  handleClick,
  filteredProducts,
  setFilteredProducts,
}) => {
  return (
    <>
      <ul className="listaProdutosScroll listaProdutosScrollcomFiltro">
        {filteredProducts.length === 0 ? (
          <>
            {products.map(({ id, name, category, price, img }) => {
              return (
                <Product
                  key={id}
                  id={id}
                  name={name}
                  category={category}
                  price={price}
                  img={img}
                  handleClick={handleClick}
                  setFilteredProducts={setFilteredProducts}
                />
              );
            })}
          </>
        ) : (
          <>
            {filteredProducts.map(({ id, name, category, price, img }) => {
              return (
                <Product
                  id={id}
                  name={name}
                  category={category}
                  price={price}
                  img={img}
                  handleClick={handleClick}
                  setFilteredProducts={setFilteredProducts}
                />
              );
            })}
          </>
        )}
      </ul>
    </>
  );
};
export default ProductList;

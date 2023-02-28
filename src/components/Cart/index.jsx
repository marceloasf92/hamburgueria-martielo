import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import "./styles.css";
const Cart = ({ currentSale, handleClickFilter, setCurrentSale }) => {
  return (
    <aside className="containerCarrinho">
      <div className="tituloCarrinho">
        <h2>Carrinho de compras</h2>
      </div>
      {currentSale.length === 0 ? (
        <div className="containerVazio">
          <h2>Sua sacola está vazia</h2>
          <p>Adicione itens</p>
        </div>
      ) : (
        <div className="containerGeralProdutos">
          <ul>
            {currentSale.map(({ id, img, name, category }) => {
              return (
                <>
                  <CartProduct
                    key={id}
                    id={id}
                    img={img}
                    name={name}
                    category={category}
                    handleClickFilter={handleClickFilter}
                  />
                </>
              );
            })}
          </ul>
          <div className="linhaHorizontal"></div>
          <CartTotal
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </div>
      )}
    </aside>
  );
};

export default Cart;

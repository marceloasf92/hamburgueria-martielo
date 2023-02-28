import Button from "../Button";
import "./styles.css";
const CartTotal = ({ currentSale, setCurrentSale }) => {
  return (
    <div>
      <div className="valorTotal">
        <p>Total</p>
        <p>
          R${" "}
          {currentSale
            .reduce((acc, { price }) => {
              return acc + price;
            }, 0)
            .toFixed(2)
            .replace(".", ",")}
        </p>
      </div>
      <Button className="removerTodos" onClick={() => setCurrentSale([])}>
        Remover todos
      </Button>
    </div>
  );
};
export default CartTotal;

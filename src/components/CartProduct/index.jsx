import Button from "../Button";
import "./styles.css";
const CartProduct = ({ id, img, name, category, handleClickFilter }) => {
  return (
    <li key={id} className="containerProdutosCarrinho">
      <figure>
        <img src={img} alt={name} />
      </figure>

      <div>
        <h2>{name}</h2>
        <p>{category}</p>
      </div>
      <Button onClick={() => handleClickFilter(id)}>Remover</Button>
    </li>
  );
};

export default CartProduct;

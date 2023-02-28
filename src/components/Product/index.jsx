import Button from "../Button";
import "./styles.css";
const Product = ({
  id,
  name,
  category,
  price,
  img,
  handleClick,
  setFilteredProducts,
}) => {
  return (
    <li key={id} className="containerProdutos">
      <figure className="containerImagensProdutos">
        <img src={img} alt={name} />
      </figure>
      <div className="containerInformacoesProdutos">
        <h2>{name}</h2>
        <p>{category}</p>
        <span>R$ {price.toFixed(2).replace(".", ",")}</span>
        <Button
          onClick={() => {
            handleClick(id);
            setFilteredProducts([]);
          }}
        >
          Adicionar
        </Button>
      </div>
    </li>
  );
};

export default Product;

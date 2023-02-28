import Button from "../Button";
import "./styles.css";

const InputSearch = ({ setTextInput, textInput, showProducts }) => {
  return (
    <div className="containerInput">
      <input
        placeholder="Digitar Pesquisa"
        type="text"
        value={textInput}
        onChange={(event) => {
          setTextInput(event.target.value.trim());
        }}
      />
      <Button onClick={() => showProducts(textInput)}>Pesquisar</Button>
    </div>
  );
};

export default InputSearch;

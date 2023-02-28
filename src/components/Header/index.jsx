import InputSearch from "../InputSearch";
import Logo from "../Logo";
import "./styles.css";

//IMPORTAR FONTE INTER
const Header = ({
  setTextInput,
  textInput,
  showProducts,
  setFilteredProducts,
}) => {
  return (
    <>
      <Logo setFilteredProducts={setFilteredProducts} />
      <InputSearch
        setTextInput={setTextInput}
        textInput={textInput}
        showProducts={showProducts}
      />
    </>
  );
};
export default Header;

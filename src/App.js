import "./reset.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  const handleClick = (productId) => {
    const verificarID = currentSale.every(
      (product) => product.id !== productId
    );
    if (verificarID === true) {
      const produtoSelecionado = products.find(
        (product) => product.id === productId
      );
      setCurrentSale([...currentSale, produtoSelecionado]);
    }
  };

  const handleClickFilter = (productId) => {
    const removerProduto = currentSale.filter(
      (product) => product.id !== productId
    );
    setCurrentSale(removerProduto);
  };

  const showProducts = (textSearch) => {
    if (textSearch !== "") {
      const filter = products.filter(
        (item) =>
          item.category
            .toLowerCase()
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(textSearch) ||
          item.name
            .toLowerCase()
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(textSearch)
      );

      setFilteredProducts(filter);
      setTextInput("");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <header className="headerContainer">
          <Header
            setTextInput={setTextInput}
            textInput={textInput}
            showProducts={showProducts}
            setFilteredProducts={setFilteredProducts}
          />
        </header>
        {filteredProducts.length !== 0 && (
          <div className="resultado">
            <p>
              Resultados para: <span>{filteredProducts[0].category}</span>
            </p>
          </div>
        )}
        <main>
          <ProductList
            products={products}
            handleClick={handleClick}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
          />
          <Cart
            currentSale={currentSale}
            handleClickFilter={handleClickFilter}
            setCurrentSale={setCurrentSale}
          />
        </main>
        <footer></footer>
      </header>
    </div>
  );
}

export default App;

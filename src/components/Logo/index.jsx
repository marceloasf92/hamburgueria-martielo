import logoKenzie from "./img/logoKenzie.png";
import "./styles.css";
const Logo = ({ setFilteredProducts }) => {
  return (
    <>
      <figure
        className="containerLogo"
        onClick={() => {
          setFilteredProducts([]);
        }}
      >
        <img src={logoKenzie} alt="logoKenzie" />
      </figure>
    </>
  );
};

export default Logo;

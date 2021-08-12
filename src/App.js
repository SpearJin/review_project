import Cart from "./components/Cart";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <Header />
      {/* <Cart /> */}
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;

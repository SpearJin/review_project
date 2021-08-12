import Cart from "./components/Cart";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("list");
  const renderPage = page === "list" ? <ProductList /> : <Cart />;
  return (
    <div>
      <Header />
      {renderPage}
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;

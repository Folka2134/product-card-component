import "./App.css";
import product from "./assets/image-product-desktop.jpg";

function App() {
  return (
    <div className="App">
      <div className="card flex flex-col w-96 md:flex-row md:h-[500px] md:w-[700px] rounded">
        <div className="rounded flex-1">
          <img
            className="h-72 md:h-full w-full rounded-t md:rounded object-cover"
            src={product}
            alt="product"
          />
        </div>
        <article className="card-content bg-white text-black flex flex-col justify-evenly flex-1 p-5 md:p-10 rounded">
          <h3 className="text-gray-500 text-sm uppercase tracking-[0.3em]">
            Perfume
          </h3>
          <h1 className="text-4xl font-semibold my-3 md:m-0">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-gray-500 my-2 md:mb-2  md:pr-10">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <h1 className="text-4xl text-green-800 font-semibold my-4 md:m-0">
            $149.99{" "}
            <span className="text-sm line-through text-gray-500">$169.99</span>
          </h1>
          <button className="bg-green-700 text-white font-semibold rounded p-4 hover:bg-green-900">
            Add to Cart
          </button>
        </article>
      </div>
    </div>
  );
}

export default App;

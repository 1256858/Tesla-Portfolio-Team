import "./Product.css";
import { useState } from "react";

import coil from "../assets/image/05tesla-500.webp";
import motor from "../assets/image/download.jpg";
import wireless from "../assets/image/Tesla_coil_art.png";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Tesla Coil",
      image: coil,
      year: "1891",
      description:
        "The Tesla Coil is a high-voltage electrical transformer invented by Nikola Tesla. It became one of his most famous inventions and is still used today in electrical demonstrations and radio technology.",
    },
    {
      id: 2,
      name: "AC Motor",
      image: motor,
      year: "1888",
      description:
        "Tesla's AC Motor revolutionized the way electricity is generated and transmitted. It became the foundation of modern electrical power systems.",
    },
    {
      id: 3,
      name: "Wireless Energy",
      image: wireless,
      year: "1901",
      description:
        "Tesla dreamed of transmitting electrical energy wirelessly through the Wardenclyffe Tower project, a revolutionary idea ahead of its time.",
    },
  ];

  return (
    <section className="products" id="products">
      <h2 className="section-title">
        TESLA <span>PRODUCTS</span>
      </h2>

      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <span>Invented: {product.year}</span>

            <button onClick={() => setSelectedProduct(product)}>
              Learn More ⚡
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />

            <h2>{selectedProduct.name}</h2>

            <p>{selectedProduct.description}</p>

            <span>Invented: {selectedProduct.year}</span>

            <button
              className="close-btn"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
import React from 'react';
import { products } from '../data/ProductsData';
import { useParams } from 'react-router-dom';
import { MdShoppingCart } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { FaStar } from "react-icons/fa6";
import { Col, Row } from 'react-bootstrap';
import Header from '../Components/Header';

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const productDetail = products.find(mobile => mobile.id === Number(id));

  const handleAddToCart = () => {
    addToCart(productDetail);
  };

  return (
    <div className='body'>
      <div className="container-fluid">
        <Header />
        <div className="container">
          <Row>
            <Col sm={5}>
              <div className="imagefixed">
                <img className="productimage" src={productDetail.images} alt={productDetail.brand} />
                <div className="grpbtn">
                  <button className="cartbtn" onClick={handleAddToCart}>
                    <MdShoppingCart /> Add To Cart
                  </button>
                  <button className="buybtn"><ImPower /> Buy Now</button>
                </div>
              </div>
            </Col>
            <Col sm={7}>
              <h3>{productDetail.title}</h3>
              <h3><span className="me-3">Price:</span>₹<strong>{productDetail.price}</strong></h3>
              <p className="rating">
                {productDetail.rating} <FaStar />
              </p>
              <dt className="text-success">Special price</dt>
              <p>{productDetail.description}</p>
              <h3>Specifications</h3>
              <dl>
                {productDetail.Specifications.map((spec, index) => (
                  <div className="d-flex" key={index}>
                    <dd>{spec}</dd>
                  </div>
                ))}
              </dl>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

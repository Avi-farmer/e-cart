import React, { useState } from 'react';
import { products } from '../data/ProductsData';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import { FaStar } from 'react-icons/fa6';
import { Col, Row } from 'react-bootstrap';

function Mobiles() {

    const [selectedBrands, setSelectedBrands] = useState([]);


    const allBrands = [...new Set(products.map((product) => product.brand))];


    const filteredMobiles = selectedBrands.length === 0
        ? products.slice(0, 20)
        : products.filter((product) => selectedBrands.includes(product.brand)).slice(0, 20);


    const handleCheckboxChange = (brand) => {
        setSelectedBrands((Brands) => {
            if (Brands.includes(brand)) {

                return Brands.filter((b) => b !== brand);
            } else {

                return [...Brands, brand];
            }
        });
    };

    return (
        <>
            <Header />
            <Row className='container-fluid'>
                <Col sm={2}>
                    <div className="filters">
                        <h5>Filter by Brand</h5>
                        {allBrands.map((brand) => (
                            <div key={brand} className="checkbox-group">
                                <input
                                    type="checkbox"
                                    id={brand}
                                    onChange={() => handleCheckboxChange(brand)}
                                    checked={selectedBrands.includes(brand)}
                                />
                                <label className='ps-3'>{brand}</label>
                            </div>
                        ))}
                    </div>
                </Col>

                <Col>
                    <div className="data">
                        {filteredMobiles.map((e) => (
                            <Link to={`/mobiles/${e.id}`} key={e.id} style={{ textDecoration: 'none' }}>
                                <div className="data1">
                                    <div className="dataimage">
                                        <img src={e.images} alt={e.images} />
                                    </div>
                                    <div className="p-2 text-dark">
                                        <h6>{e.brand}</h6>
                                        <h5>{e.price}/-</h5>
                                        <p className="rating">
                                            {e.rating}
                                            <FaStar />
                                        </p>
                                        <small>{e.description.slice(0, 50)}</small>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Mobiles;

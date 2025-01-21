import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Row, Col, Container, Alert } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
    const [productLists, setProductLists] = useState([]);
    const [query, setQuery] = useSearchParams();
    let [error, setError] = useState("");

    const getProducts = async () => {
        let keyword = query.get("q") || "";
        let url = `https://my-json-server.typicode.com/seonyoungg/Shopmall//products?q=${keyword}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductLists(data);
    };

    useEffect(() => {
        getProducts();
      }, [query]);

    return (
        <Container>
            <Row className="gy-3">
                {productLists.map((menu) => (
                    <Col xs="12" md="4" lg="3">
                        <ProductCard item={menu} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductAll;
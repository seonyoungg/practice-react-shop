import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {
    let{id} = useParams();
    const [product,setProduct] = useState([]);
    const getProductDetail = async()=>{
        let url = `https://my-json-server.typicode.com/seonyoungg/Shopmall//products?q=${id}`;
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        setProduct(data);
    }
    
    useEffect(() => {
        getProductDetail();
    }, [id]); // id가 변경될 때마다 호출되도록 의존성 배열 추가

    const numberFormat = (price) => {
        return new Intl.NumberFormat('ko-KR', {
            style: 'currency',
            currency: 'KRW',
        }).format(price);
    };

  return (
    <div>
        <Container>
            <Row>
                <Col xs="12" md="4">
                    <div class="img-box">
                        <img src={product?.img}/>
                    </div>
                </Col>
                <Col xs="12" md="8">
                    <div class="product-detail-item">
                        <div class="product-text">
                            <p class="product-title">
                                {product?.title}
                            </p>
                            <p class="product-price">
                                {numberFormat(product?.price)}
                            </p>
                            <p className='subtitle'>
                                {product.choice==true?'Conscious choice':''}
                            </p>
                        </div>
                        <Form.Select>
                            {product?.size?.map((size) => (
                                <option value={size}>{size}</option>
                            ))}
                        </Form.Select>
                        <Button variant="dark">장바구니 담기</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ProductDetail

import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { NavLink } from 'react-router-dom';
import "../styles/CardContainer.css";
import { memo } from "react";

const CardContainer = ({ data }) => {
    return (
        <Container>
            {

                console.log("cardcontaier loading..")
            }
            <Row
                className="justify-content-center g-4"
            >
                {data.map((product) => {
                    return <Col key={product.id} md={3} sm={6} xs={12} >
                        <NavLink to={`/product/${product.id}`}
                            className={({ isActive }) =>
                                `${isActive ? 'active' : ''}`
                            }><ProductCard title={product["name"]} price={product["price"]} img={product["main_image"]} /></NavLink>
                    </Col>

                })}

            </Row>

        </Container>

    )
}

export default memo(CardContainer);

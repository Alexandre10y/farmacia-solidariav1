import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Container, Row, Col, } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from "react-icons/fa";
import Tabela from '../../components/table';
import Menu from '../../components/menu'
import './style.css'
function Home() {
    const [produto, setProduto] = useState('');


    return (
        <>
            <Header></Header>
            <Container className='pt-3'>
                <Row>
                    <div>
                        <div>
                            <h1>Medicamentos</h1>
                        </div>
                        <div className='search'>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Buscar"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    <FaSearch />
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                    <Col sm={8}>
                        <Tabela></Tabela>
                    </Col>
                    <Col sm={4} className='txt-center d-flex'>
                        <Menu />
                    </Col>
                </Row>

            </Container>
            <Footer></Footer>

        </>
    );
}

export default Home;
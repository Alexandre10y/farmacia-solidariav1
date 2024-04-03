import React from "react";
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo from "../../assets/images/logo.svg"
import './style.css';
function Footer() {
    return (
        <>
            <Container className="pt-4">
                <Row>
                    <Col className="txt-center">
                        <img className="w-50" src={Logo} alt="" />
                    </Col>
                    <Col>
                        <Col className="al txt-center">
                            <h5 >Visite nossas redes sociais</h5>
                        </Col>
                        <Col >
                            <ul className="d-flex txt-center">
                                <li className="iconT"><a target='_blank' href="https://www.instagram.com/alexandremendesbelloni/"><FaInstagram /></a></li>
                                <li className="pl-3 iconT"><a target='_blank' href="https://wa.me/5542984022669?text=Bem+Vindo%2C+Sou+Alexandre%2C+Desenvolvedor++Front-End.+Como+posso+lhe+ajudar%3F"><FaWhatsapp /></a></li>
                                <li className="pl-3 iconT"><a target='_blank' href="https://github.com/Alexandre10y"><FaGithub /></a></li>
                            </ul>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Footer;
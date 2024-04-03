import Form from '../../components/form'
import Header from '../../components/header';
import Footer from '../../components/footer';
import Logo from '../../assets/images/logo.svg'
import { Container, } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './style.css'
function Cadastrar() {
    const [produto, setProduto] = useState('');


    return (
        <>
            <Header></Header>
            <Container className='pt-3'>
                <div>
                    <h1 className='txt-center'>CADASTRAR</h1>
                </div>
                <br />
                <div className=' form-center'>
                    <div className='input-form'>
                        <Form></Form>
                    </div>

                </div>
            </Container>
            <Footer></Footer>
        </>
    );
}

export default Cadastrar;
import Form from 'react-bootstrap/Form';
import Logo from '../../assets/images/logo.svg'
import { Container, } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './style.css'
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


  return (
    <>
      <Container className='padding-center d-flex'>
            <div className='padding-center'>
                <div className="justify-content-center pl-3">

                <img className='pl-3 w-100' src={Logo} alt="" />
                <div className='flex-column pt-4'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Login</Form.Label>
                            <Form.Control type="text" placeholder="Usuário" onChange={(c) => setUsername(c.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" onChange={(c) => setPassword(c.target.value)} />
                            <Form.Text className="text-muted">
                                Se você não possui o usuário por favor contate o fabricante.
                            </Form.Text>
                        </Form.Group>
                        <Button className='col-lg-12 text-center' variant="primary">
                            Entrar
                        </Button>
                    </Form>
                </div>
                </div>
            </div>
        </Container>
    </>
  );
}

export default Login;
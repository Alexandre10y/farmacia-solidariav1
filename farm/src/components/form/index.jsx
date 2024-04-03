import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './style.css'
function FormExample() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Label>Medicamento</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nome do Medicamento"
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor adicione nome do medicamento.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12 mt-3" controlId="validationCustom02">
                    <Form.Label>Princípio Ativo</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ex: Dipirona"
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor adicione o Princípio Ativo do produto.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12 mt-3" controlId="validationCustomUsername">
                    <Form.Label>Data De Entrada</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="date"
                            placeholder="Data de entrada"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor adicione a data de entrado do produto.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label>Data de Vencimento</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Data de Vencimento"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor adicione a data de vencimento.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12 mt-3" controlId="validationCustom04">
                    <Form.Label>Posologia</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">mg</InputGroup.Text>
                        <Form.Control
                            type="number"
                            placeholder="Peso do medicamento"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor informe o peso medicamento.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="12 mt-3" controlId="validationCustom05">
                    <Form.Label>Quantidade</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Quantidade de itens doados"
                        required />
                    <Form.Control.Feedback type="invalid">
                        Por favor adicione a quantidade de itens.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col} md="12" controlId="validationCustom06">
                    <Form.Label>Código do Cadastrante</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Código pessoal #123"
                        required />
                    <Form.Control.Feedback type="invalid">
                        Por favor adicione seu código.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12 mt-3" controlId="validationCustom07">
                    <Form.Label>Obersevação</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Detalhes"
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor adicione uma descrição.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12 mt-3" controlId="validationCustom08">
                    <Form.Label>Doador</Form.Label>
                    <Form.Control
                        type="Doador"
                        placeholder="Pessoa que está doando o medicamento"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Informe o Doador do remédio
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <div className='txt-center d-flex'>

            <Button className='button-form ' type="submit">Cadastrar</Button>
            </div>
        </Form>
    );
}

export default FormExample;
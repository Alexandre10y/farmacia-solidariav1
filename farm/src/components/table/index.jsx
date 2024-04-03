import { Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Tabela() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Nome Comercial</th>
          <th>Data de Validade</th>
          <th>Principio Ativo</th>
          <th>Posologia</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lisador</td>
          <td>15/12/2024</td>
          <td>Dipirona</td>
          <td>400mg</td>
          <td>2</td>
        </tr>
        <tr>
        <td>Lisador</td>
          <td>19/10/2024</td>
          <td>Dipirona</td>
          <td>100mg</td>
          <td>5</td>
        </tr>
        <tr>
        <td>Lisador</td>
          <td>03/02/2025</td>
          <td>Dipirona</td>
          <td>200mg</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tabela;
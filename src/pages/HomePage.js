import React, { Component } from 'react';

import {
  Alert, Button,
} from 'reactstrap';

import Artigo from '../components/Artigo';
import Contador from '../components/Contador';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Alert color="primary">Teste 001</Alert>
        <Alert color="danger">ERRO 404</Alert>
        <Button color="primary">Clique aqui</Button>

        <Artigo
          nome="Bruno"
          texto="Programação Web com React JS"
        />
        <Artigo
          nome="Roani GAZIN"
          texto="Programação Web com PHP"
        />

        <Contador tempo={500} />
        <Contador numero={100} />
      </div>
    )
  }
}

export default HomePage;

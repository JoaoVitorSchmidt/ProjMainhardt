import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  return (
    <div className="Formulário">
      <h1>Formulário</h1>

      <form action="" method="get">
        <label for="GetNome" class="nome">
          Nome Completo:
          <input type="text" name="nome" />
        </label>
        <br />
        <label for="GetEmail" class="email">
          E-mail:
          <input type="text" name="email" class="texto"/>
        </label>
        <br />
        <label for="GetDataEntrega" class="data">
          Data de Entrega:
          <input type="text" name="dataEntrega" />
        </label>
        <br />
        <label for="GetCEP" class="cep">
          CEP:
          <input type="text" name="cep" class="texto"/>
        </label>
        <br />
        <label for="GetEndereco">
          Número do Endereço:
          <input type="text" name="endereco" class="texto"/>
        </label>
        <br />
        <label for="GetComplemento" >
          Complemento:
          <input type="text" name="complemento" class="texto"/>
        </label>
        <br />
        <button class="botao">Limpar</button>
      </form>
    </div>
  );
}

export default App;

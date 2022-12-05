import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  return (
    <div className="Formulário">
      <h1>Formulário</h1>

      <form action="" method="get">
        <label for="Nome" class="nome">
          Nome Completo:
          <input type="text" name="nome" />
        </label>
        <br />
        <label for="Email" class="email">
          E-mail:
          <input type="text" name="email" class="texto" />
        </label>
        <br />
        <label for="DataEntrega" class="data">
          Data de Entrega:
          <input type="text" name="dataEntrega" />
        </label>
        <br />
        <label for="CEP" class="cep" id="CEP">
          CEP:
          <input
            type="text"
            name="cep"
            class="PosCEP"
            onChange = "function (verificaCep());"
          />
        </label>
        <br />
        <label for="Logradouro">
          Logradouro:
          <input type="text" name="logradouro" class="PosCEP" id="logradouro"/>
        </label>
        <br />
        <label for="Bairro">
          Bairro:
          <input type="text" name="bairro" class="PosCEP" />
        </label>
        <br />
        <label for="Localidade">
          Localidade:
          <input type="text" name="localidade" class="PosCEP" />
        </label>
        <br />
        <label for="UF">
          UF:
          <input type="text" name="uf" class="PosCEP" />
        </label>
        <br />
        <label for="IBGE">
          IBGE:
          <input type="text" name="ibge" class="PosCEP" />
        </label>
        <br />
        <label for="GIA">
          GIA:
          <input type="text" name="gia" class="PosCEP" />
        </label>
        <br />
        <label for="DDD">
          DDD:
          <input type="text" name="ddd" class="PosCEP" />
        </label>
        <br />
        <label for="SIAFI">
          SIAFI:
          <input type="text" name="siafi" class="PosCEP" />
        </label>
        <br />
        <label for="Endereco">
          Número do Endereço:
          <input type="text" name="endereco" class="texto" />
        </label>
        <br />
        <label for="Complemento">
          Complemento:
          <input type="text" name="complemento" class="texto" />
        </label>
        <br />
        <button class="botao" type="reset">
          Limpar
        </button>
        <br />
      </form>
    </div>
  );
}

export default App;

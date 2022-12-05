var json =
  '{"cep": "01001-000", "logradouro": "Praça da Sé", "complemento": "lado ímpar", "bairro": "Sé", "localidade":"São Paulo", "uf": "SP", "ibge": "3550308", "gia": "1004", "ddd": "11", "siafi": "7107" }';

var obj = JSON.parse(json);

function verificaCep(e) {
  e.preventDefault();

  const cep = document.getElementById('CEP');

  var log = (document.getElementById('logradouro').readOnly = true);

  if (cep.value == '01001-000') {
    document.getElementsById('Logradouro').value = obj.logradouro;
    document.getElementsById('Complemento').value = obj.complemento;
    document.getElementsById('Bairro').value = obj.bairro;
    document.getElementsById('Localidade').value = obj.localidade;
    document.getElementsById('UF').value = obj.uf;
    document.getElementsById('IBGE').value = obj.ibge;
    document.getElementsById('GIA').value = obj.gia;
    document.getElementsById('DDD').value = obj.ddd;
    document.getElementsById('SIAFI').value = obj.siafi;
  }
}

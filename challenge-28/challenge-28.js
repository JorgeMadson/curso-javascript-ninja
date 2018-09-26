  /*
  =======peguei do udemy===========
  Antes de resolver o desafio 28, por favor, leia!
  Seção 28, aula 170
  Antes de finalizar essa aula, preciso dar uma notícia muito importante: você vai ver, no desafio 28 - e na resolução do mesmo, no início da aula 29 - que eu pedi para fazer uso da API do ViaCEP.

  Infelizmente houve algumas atualizações recentes nessa API, e ela não está respondendo exatamente da mesma forma que eu mostrei na solução. Provavelmente você terá problemas ao utilizá-la.

  Nesse caso, vou deixar aqui um outro link, de uma outra API, que funciona sem problemas, mas de uma forma um pouco diferente da ViaCEP, ok? =)

  Guarde esse link para usar na hora da solução do desafio 28:

  http://apps.widenet.com.br/busca-cep/api-de-consulta



  Detalhe: esse problema veio à tona, pois um aluno teve uma dúvida por conta do problema e abriu uma Issue no GitHub.

  Então se você quiser saber mais detalhes sobre o problema, e mais informações sobre o uso dessa nova API, dá uma olhadinha na issue abaixo, fechado? =)

  https://github.com/da2k/curso-javascript-ninja/issues/2048



  Bom, era só isso :D
  ===========fim==============

  
  
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

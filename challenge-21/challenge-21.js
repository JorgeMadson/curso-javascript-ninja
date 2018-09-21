(function () {
    'use struct';
    /*
    O desafio de hoje será um pequeno projeto: um cronômetro!
    As regras para criação do cronômetro são as seguintes:
    1. Crie um arquivo index.html e adicione esse script a ele;
    2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
    Ele será o nosso cronômetro;
    3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
    4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
    cada segundo;
    5. Ao clicar em Stop, o cronômetro deve parar de contar;
    6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.
    
    Utilize o atributo data-js para nomear o campo e os botões. Você pode
    usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
    dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
    */
    //Input
    var $input = document.querySelector('[type="text"]');
    //Butoes
    var $start = document.querySelector('[data-js="start"]');
    var $stop = document.querySelector('[data-js="stop"]');
    var $reset = document.querySelector('[data-js="reset"]');

    //Eventos
    $start.addEventListener('click', start, false);
    $stop.addEventListener('click', stop, false);
    $reset.addEventListener('click', reset, false);    
    
    //Funções
    var idTimeout = 0;
    function start() {
        $input.value++;
        idTimeout = setTimeout(start, 1000);
    }

    function stop() {
        clearTimeout(idTimeout);
    }

    function reset() {
        $input.value = 0;
    }

})();

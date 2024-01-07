$(document).ready(function(){
    $('header button').click(function() {
       $('form').slideDown();
    })

    $('#cancelar-botao').click(function() {
        $('form').slideUp();
    });

     $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style= "display: none"></li>');
        $(`<img src ="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class= "overlay-imagem-link">
                <a href= "$(enderecoDaNovaImagem)" target= "_blank" title= "Ver imagem em tamanho real">
                    Ver imagem em tamabho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('endereco-imagem-nova').val('');
    })
})

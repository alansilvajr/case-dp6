// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
$(document).ready(function() {

    $( "#formContato" ).click(function() {
        //alert('teste');
        ga('send', {
            hitType: 'event',
            eventCategory: 'menu',
            eventAction: 'entre_em_contato',
            eventLabel: 'link_externo'
        });
        //return false;
    });

    $( "#downloadPDF" ).click(function() {
        //alert('teste pdf');
        ga('send', {
            hitType: 'event',
            eventCategory: 'menu',
            eventAction: 'download_pdf',
            eventLabel: 'download_pdf'
        });
    });

    $( ".card-montadoras" ).click(function() {
        //alert('teste imagens');
        var dados = $(this).data();
        ga('send', {
            hitType: 'event',
            eventCategory: 'analise',
            eventAction: 'ver_mais',
            eventLabel: dados.name
        });
    });

    $( "#nome" ).change(function() {
        if($("#nome").val()!="")
        {   
            //alert('teste nome');
            ga('send', {
                hitType: 'event',
                eventCategory: 'contato',
                eventAction: 'nome',
                eventLabel: 'preencheu'
            });
        }
    });

    $( "#email" ).change(function() {
        if($("#email").val()!="")
        {
            //alert('teste email');
            ga('send', {
                hitType: 'event',
                eventCategory: 'contato',
                eventAction: 'email',
                eventLabel: 'preencheu'
            });
        }
    });

    $( "#telefone" ).change(function() {
        //alert('teste telefone');
        if($("#telefone").val()!="")
        {
            ga('send', {
                hitType: 'event',
                eventCategory: 'contato',
                eventAction: 'telefone',
                eventLabel: 'preencheu'
            });
        }
    });

    $( "#aceito" ).change(function() {
        //
        if($("#aceito").is(':checked')==true)
        {
            //alert($("#aceito").is(':checked'));
            ga('send', {
                hitType: 'event',
                eventCategory: 'contato',
                eventAction: 'aceito',
                eventLabel: 'preencheu'
            });
        }
    });

    $('.contato').on('submit', function () {
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: 'enviado',
            eventLabel: 'enviado'
        });
    });

});

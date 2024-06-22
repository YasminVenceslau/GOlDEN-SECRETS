$(document).ready(function(){
    $('#carrosel').slick({ // faz o carrosel na sessão carrosel
        
        dots: true, //adiciona pontos abaixo da imagem
        speed: 50,  // indica a velocidade do giro 
        Infinite: false, //  impede que o carrosel reinicie
        arrows: false, // remove as setas
        
    })

    $('.giro').slick({ // faz o carrosel na sessão giro 
        slideToShow: 1, //mostra uma imagem por vez 
        arrows: false, // remove as setas

    })


   function setupHandlers(buttonId, contentClass){
    $(`#${buttonId}`).click(function(){
        $(`.${contentClass}`).removeAttr('id').slideDown()
    });

    $(`.${contentClass}`).mouseleave(function(){
        setTimeout(function(){
            $(`.${contentClass}`).attr('id', 'esc')
        }, 200)
    })

   }

    setupHandlers('make', 'make');
    setupHandlers('perf', 'perf');
    setupHandlers('hair', 'hair');
   setupHandlers('golden', 'golden');
    

})

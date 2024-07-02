$(document).ready(function(){
    $('#carrosel').slick({ // faz o carrosel na sessão carrosel
        slidesToShow: 1,
        dots: false, //adiciona pontos abaixo da imagem
        speed: 50,  // indica a velocidade do giro 
        Infinite: true, //  impede que o carrosel reinicie
        arrows: false, // remove as setas
        variableWidth: true,
        centerMode: true,
        
        
        responsive: [
            {
            breakpoint: 677,
            settings:{
                slideToShow: 1,
                dots: false,
                
            }
                
            

        }
        ]
        
    })

    $('.giro').slick({ // faz o carrosel na sessão giro 
        slideToShow: 1, //mostra uma imagem por vez 
        arrows: false, // remove as setas
        
        

    })

    function initializeSlick(){ //quando a larguira da pg for menor que 640px
        if ($(window).width() <= 640){
            if (!$('.giro2').hasClass('slick-initialized')){
                $('.giro2').slick({
                    dots:false,
                    speed: 500,
                    infinite: false,
                    slidesToShow: 3 ,
                    slidesToScroll: 1,
                    arrows: false,

                });
            }
        }else {
            if($('giro2').hasClass('slick-initialized')){
                $('.giro2').slick('unslick')
                    } 
        }
    } 

initializeSlick()


    $('.buy').on('mouseenter' , function(){ /*  mostra o botão*/
        $(this).siblings('div').find('button').removeAttr('id')
        $('.giro').mouseleave(function(){
            $('.butao').attr('id' , 'compra')
        })
    })


    function setupHandlers(buttonId, contentClass){ /* mostra o seguinte o menu do cabeçalho */
    $(`#${buttonId}`).click(function(){
        $(`.${contentClass}`).removeAttr('id').slideDown(100)
    });

    $(`.${contentClass}`).dblclick(function(){
        setTimeout(function(){
            $(`.${contentClass}`).attr('id', 'esc')
        }, 200)
    })

    }

    setupHandlers('make', 'make');
    setupHandlers('perf', 'perf');
    setupHandlers('hair', 'hair');
    setupHandlers('golden', 'golden');
        
    $('.loja').click(function(){
        
        $('.foot').slideToggle(10)
    })


    

    $('#tel').mask('(00) 00000-0000',{ /* mascara do telefone */
        placeholder: '(00) 00000-0000'}
    )
    
    $('form').validate({ /* validação do tex tel e email */
        rules: {
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true,
                tel: true
            },
            text: {
                required: true
            },
        }, 
        messages: { /* mudanbça no texto da validação */
            text: 'Digite a ID do item',
            tel: 'Digite seu número do celular',
            email: 'Digite seu e-mail'
        },

        submitHandler: function(form) { /* diz que a vcalidação está errdad */
            console.log(form)
        },

        invalidHandler: function(evento, validador){
            let camposInco = validador.numberOfInvalids();
            console.log(camposInco)

            if (camposInco){
                console.log(`Existem ${camposInco} campos incorretos, corrija-os`)
            }
        }
    })


    $('.lista-itens a').click(function(){ /* ao clilcar em comprar ,vai direto para a parte da compra e add o id automaticamente */
        const destino = $('#finalize');

        const nomeid = $(this).parent().find('h6 a').text();
        $('#text').val(nomeid)


        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    $('#Loja').click(function(){ /* clique direto  no sobre a loja */
        const destino = $('#sobre');

        
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})

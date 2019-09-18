/*  Codigo utilizado no web curse de web
    Autor: Andre Trigueiro
*/

$(document).ready(function(){

    var el = document.getElementById('text');

    $(document).on('mousedown', function(event){
        event.preventDefault();

        switch(event.which){
            case 1:
                console.log("Clicked left mouse button");
                break;
            case 2:
                    console.log("Clicked middle mouse button");
                    break;          
            case 3:
                    console.log("Clicked right mouse button");
                    break;
        }
    });


    $('[data-trigger="dropdown"]').on('mouseenter', function(){
        var submenu = $(this).parent().find('.submenu');
        //submenu.addClass('active');
        submenu.fadeIn(400);

        $('.profile-menu').on('mouseleave', function(){
            //submenu.removeClass('active');
            submenu.fadeOut(400);
        });
    });

    $('#append, #prepend, #replace').on('click', function(e){

        var el = $(e.currentTarget);
        var action = el.attr('id');
        var content = $('.text').val();

        if(action == "append"){
            console.log("appending")
            $('#main-text').append(content);
        }
        else if(action == "prepend"){
            console.log("prepending")
            $('#main-text').prepend(content);
        }
        else if(action == "replace"){
            console.log("replacing")
            $('#main-text').html(content);
        }

        $('.text').val('');
    });














});
$('.like').click(function(){
    if ($(this).attr('do') == 'yes'){
        $(this).text('Уже не нравится');
        $(this).attr('do', 'no');
        id_el =$(this).attr('attr');
        $.post( "/news/", { element: id_el, like: "1" } );
    }
    else {
        $(this).text('Мне нравится');
        $(this).attr('do', 'yes');
        id_el =$(this).attr('attr');
        $.post( "/news/", { element: id_el, dislike: "1" } );
    }

})
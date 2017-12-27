function deleteRow(i) {
    $('#'+i).remove();
};

$(document).ready(function(){
    $('.add_book').click(function(){
        $('.content_addBook').show();
    });

    $('.button_save_add').click(function(){

        var maxYear = $('.input_add_year').val();
        if ( maxYear > 2017) {
        alert ("Год выпуска книги не может быть больше 2017 года");
        return;};    

        var name = $('.input_add_name').val();
        var author = $('.input_add_author').val();
        var year = $('.input_add_year').val();
        var src = $('.input_add_src').val();        
        
        if ($('tr:last-child').attr('id') == undefined) {
                var id_last_child = '1';
            } else {
                var id_last_child = parseInt($('tr:last-child').attr('id').slice(2), 10) + 1;
            };
       
        $('table').append(
        '<tr id="tr' + id_last_child + '">'+
            '<td class="first-column">'+
                '<img class="book_img" src="' + src + '" alt="book img">'+
            '</td>'+
            '<td>'+
                '<p class="head_name">' + name + '</p>'+
                '<p class="author">'+ author +'</p>'+
                '<p class="year">'+'<span class="number_year">'+ year +'</span>г.</p>'+
            '</td>'+
            '<td class="third-column">'+
                '<button class="edit" type="button" onclick="editRow(' +"'"+'tr' + id_last_child +"'"+ ')" >Редактировать</button>'+
                '<button class="del"  type="button" onclick="deleteRow(' +"'"+'tr' + id_last_child +"'"+ ')" >Удалить</button>'+
            '</td>'+
        '</tr>'
        );
        
        document.getElementById('form_add').reset();

        $('.content_addBook').hide();
    });

    $('.button_esc').click(function(){
        $('.content_addBook').hide();
    });

});

function editRow(i) {
    
    $('.content_editBook').show();

    $('.input_edit_name').val($('#' +i+ ' .head_name').text());
    $('.input_edit_author').val($('#' +i+ ' .author').text());
    $('.input_edit_year').val($('#' +i+ ' .number_year').text());
    $('.input_edit_src').val($('#' +i+ ' .book_img').attr('src'));
    $('.button_save_edit').unbind("click");

    $('.button_save_edit').click(function(){

        var maxYear = $('.input_edit_year').val();
        if ( maxYear > 2017) {
        alert ("Год выпуска книги не может быть больше 2017 года");
        return;};
      
        $('#' +i+ ' .head_name').text($('.input_edit_name').val());
        $('#' +i+ ' .author').text($('.input_edit_author').val());
        $('#' +i+ ' .number_year').text($('.input_edit_year').val());
        $('#' +i+ ' .book_img').attr('src', $('.input_edit_src').val());
        $('.content_editBook').hide();  
    });

    $('.button_esc').click(function(){
        $('.content_editBook').hide();
    });

    $('.add_book').click(function(){
        $('.content_editBook').hide();
        $('.content_addBook').show();
    });    
};
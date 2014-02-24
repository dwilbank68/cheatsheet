$(document).ready(function(){
    $('pre').hide();
    $('.code').find('i').on('click', function(){
        $(this).closest('.code').find('pre').slideToggle(300);
    });
});
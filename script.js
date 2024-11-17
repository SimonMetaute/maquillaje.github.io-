$(document).ready(function(){
$('.category_list .category_item[category="all"]').addClass('ct_item-active');


$('.category_item').click(function(){
    
    var catProduct=$(this).attr('category');
    console.log(catProduct);

    $('.category_item').removeClass('ct_item-active');
    $(this).addClass('ct_item-active');

        $('.product_item').css('transform', 'scale(0)');
     function hideProduct(){
        $('.product_item').hide();
     } setTimeout(hideProduct,400);
    
     function showProduct(){
         $('.product_item[category="'+catProduct+'"]').css('transform', 'scale(1)');
         $('.product_item[category="'+catProduct+'"]').show();
        } setTimeout(showProduct,400);

});
$('.category_item[category="all"]').click(function() {

    function showAll () {
        $('.product_item').show();
        $('.product_item').css('transform', 'scale(1)');
        
    } setTimeout(showAll,400);



});

});
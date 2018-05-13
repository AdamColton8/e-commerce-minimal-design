$('.change-grid').on('click', function () {
    $size=$(this).data('style');
    $('.product-item').removeClass('col-md-3 col-md-6 col-md-12').addClass($size);
});




$("#hide").click(function(){
    $(".filter").slideToggle("slow");

});
// $( "#book" ).slideToggle( "slow", function() {
//     // Animation complete.
// });
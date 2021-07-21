$(document).ready(function() {
    //Main page FullPage
	$('#fullpage').fullpage({
		//options here
	});

    //Main Page Slide
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable	:true
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
});//document ready end

// $(document).ready(function(){
//   $('header select').change(function(){
//       location.href=$(this).val();
//   });
// });
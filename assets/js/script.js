// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1,
//             loop:true
//         },
//         600:{
//             items:3,
//             loop:true
//         },
//         1000:{
//             items:5,
//             loop:true
//         }
//     }
// })
// / clone the first four images and append them to the end of the carousel
const imageContainer = document.querySelector('.moving-carousel .image-container');
const firstFourImages = imageContainer.innerHTML.slice(0, 872); 
imageContainer.innerHTML += firstFourImages;


// $('.navbar-toggler').clickToggle(function() {   
//     $(this).animate({
//         width: "260px"
//     }, 1500);
// })
$(".navbar-toggler").click(function(){
    $(".navbar-toggler").toggleClass("active");
  });
//   viewport
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};
var lastScrollTop = 0;
var x=1;
var y=1;
var j=1;
var k=1;
$(window).on('resize scroll', function() {
 
    if ($('.intro img:nth-child(1)').isInViewport()) {
      var st = $(this).scrollTop();
      
      if (st > lastScrollTop){
        x++;
        y--;
        $('.intro img:nth-child(1),.intro img:nth-child(6)').css({'transform' : 'translatey(' + x/2+'px' +')'});
        $('.intro img:nth-child(2),.intro img:nth-child(3)').css({'transform' : 'translatey(' + x+'px' +')'});
      } else {
        x--;
        y++;
        $('.intro img:nth-child(1),.intro img:nth-child(6)').css({'transform' : 'translatey(-' + y/2+'px' +')'});
        $('.intro img:nth-child(2),.intro img:nth-child(3)').css({'transform' : 'translatey(-' + y+'px' +')'});
      }
      lastScrollTop = st;
    } 
    if ($('section.socials').isInViewport()) {
      var st = $(this).scrollTop();
      
      if (st > lastScrollTop){
        j++;
        k--;
        $('.socials .post-container img:nth-child(1)').css({'transform' : 'translatey(' + k/4+'px' +')'});
        $('.socials .post-container img:nth-child(2)').css({'transform' : 'translatey(' + j/4+'px' +')'});
      } else {
        j--;
        k++;
        $('.socials .post-container img:nth-child(1)').css({'transform' : 'translatey(-' + k/4+'px' +')'});
        $('.socials .post-container img:nth-child(2)').css({'transform' : 'translatey(-' + j/4+'px' +')'});
      }
      lastScrollTop = st;
    } 
});

$('.usecase .categories div').click(function(){
    var btn = $(this).data('cat');
    $(".usecase .cats .active").removeClass('active');
    $(".usecase .categories .active").removeClass('active');
    $(".usecase ."+btn).addClass('active');
})
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
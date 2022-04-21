$(document).ready(function(){
  $(".slider-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: true, 
    autoplay: true,
    autoplaySpeed: 4000,   
    speed: 1000,           
  });
});
$(document).ready(function(){
    $(".cover_best-team").slick({
      slidesToShow: 3,
      arrow: true,
      dots: true,
      prevArrow:`<button class='slick-prev pull-left'>
                    <img src="./images/arrow left2.png">
                    <img src="./images/arrow left.png" >
                  </button>`,
      nextArrow:`<button class='slick-next pull-right'>
                    <img src="./images/arrow right2.png">
                    <img src="./images/arrow right.png" >
                  </button>`,      
      responsive: [
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: true,
          }
        },
      ]
    });
  });
$(document).ready(function(){
  $(".client-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    dots: true,     
    responsive: [
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
    ]
  });
});
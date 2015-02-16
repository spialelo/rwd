/*RWD TEST JavaScript*/

 $(document).ready(function(){
      $('.single-item').slick({
        autoplay: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
      }),


     $(function() {
     var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $("nav ul li a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("active");
     })
})



    });



(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > $("#about").offset().top) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })

	var slide  = $('.intro .slide');
      animateSlide(slide.eq(0))
      var count = 0;
      setInterval(function(){
         var item = slide.eq(++count).fadeIn();
         slide.not(item).fadeOut();

         slide.find(".slide-content").children().removeClass("is-visible");
         animateSlide(slide.eq(count));
		 if (count == 2) {
            count = -1;
         }
      }, 4000);

      function animateSlide(item){
         var child = $(item).find(".slide-content").children();
         child.each(function (i) {
           setTimeout(function () {
              child.eq(i).addClass('is-visible');
           }, 300 * (i + 1));
        });
      }
      setVisible();
	  $(window).scroll(setVisible);

	  function setVisible (){
	  	$.each($("section .slide-content").children(), function(index, item){
			var elementTop = $(item).offset().top;
			var elementBottom = elementTop + $(item).outerHeight();

			var viewportTop = $(window).scrollTop();
			var viewportBottom = viewportTop + $(window).height();

			if (elementTop < viewportBottom)
			{
				$(item).addClass("is-visible");
			}

              if (elementTop > viewportBottom || viewportTop > elementBottom)
              {
                $(item).removeClass("is-visible");
              }
		  });
	  };

    $(".progress-bar").each(function(index, item){

    $(item).animate({
       'width' : $(item).data("length") + '%'
     }, 100).find("span").text($(item).data("length") + '%');
  })
$(window).scroll(setProgressbar);
setProgressbar();
    function setProgressbar(){
      $(".progress-bar").each(function(index, item){

        var elementTop = $(item).offset().top;
        var elementBottom = elementTop + $(item).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        var per = $(item).data("length");
        var visible = false;

        // 안에 있을때
        if (elementTop < viewportBottom && elementBottom > viewportTop)
        {
          if ($(item).hasClass("is-visible")){
            return;
          }
          $(item).addClass("is-visible");
        }
        // 밖에 있을때
        if (elementTop > viewportBottom || viewportTop > elementBottom)
        {
          console.log(1)
          if (!$(item).hasClass("is-visible")){
            return;
          }
          per = 0;
          $(item).removeClass("is-visible");
        }

        
        $(item).animate({
           'width' : per + '%'
         }, 50);
         
         $(item).find("span").animate({
           'left' : per + '%'
         });

         /*
         $(item).find("span").animate({
           Counter: $(item).data("length"),
           'left' : $(item).data("length") + '%'
         }, {
          duration: 300,
          easing: 'swing',
          step: function (now) {
            $(item).find("span").text(Math.ceil(now) + "%");
          }
         });*/

        })
    }
  // 타임 라인
 var data = [{
   "date": "2008",
   "career": "상일여자고등학교 졸업",
   "description": ""
   }, {
      "date": "2009 ~ 2011",
      "career": "한양여자대학교",
      "description": "패션디자인과 졸업"
   }, {
      "date": "2012 ~ 2015",
      "career": "가천대학교",
      "description": "국어국문학과 편입 후 졸업"
   }, {
      "date": "2015.01 ~ 2015.04",
      "career": "KF컴퓨터학원",
      "description": "포토샵<br/>일러스트레이터회사실무 교육 수료"
   }, {
      "date": "2015.06.16 ~ 2015.09.09",
      "career": "더조은컴퓨터아트학원",
      "description": "웹표준디자인(HTML/드림위버)교육 수료"
   }, {
      "date": "2016.01.04 ~ 2016.04.04",
      "career": "㈜더웹스타일",
      "description": "제휴회사 페이지 코딩, 이벤트페이지 코딩, 웹접근성 인증마크 획득 프로젝트"
   }, {
      "date": "2016.05.04 ~ 2016.11.04",
      "career": "(주)옐로트래블랩스",
      "description": "우리펜션 사이트 리뉴얼, 사이트 관리, 이벤트페이지 코딩,어드민코딩"
   }, {
      "date": "2017.03.20 ~ 재직중",
      "career": "㈜CBSi",
      "description": "CBS,노컷뉴스 사이트 관리 및 리뉴얼, 이벤트성 페이지 코딩,CBS바이블 사이트 관리"
   }];

  $.each(data, function(index, item){
     $(".timeline")
        .append($(document.createElement("li")).addClass(index % 2 != 0 ? "timeline-inverted" : "")
            .append($(document.createElement("div")).addClass("timeline-image slide-content")
                 .append($(document.createElement("img")).addClass("rounded-circle img-fluid").attr("src", "img/about/" + (index + 1)+".jpg")))
            .append($(document.createElement("div")).addClass("timeline-panel")
                 .append($(document.createElement("div")).addClass("timeline-heading slide-content")
                    .append($(document.createElement("em")).text(item.date))
                    .append($(document.createElement("h4")).addClass("subheading").text(item.career)))
                 .append($(document.createElement("div")).addClass("timeline-body slide-content")
                    .append($(document.createElement("p")).addClass("text-muted").html(item.description)))));
  });
  $(".timeline")
     .append($(document.createElement("li")).addClass("timeline-inverted")
         .append($(document.createElement("div")).addClass("timeline-image slide-content").html("<h4>Final<br>goal<br>Developer!</h4>")));

})(jQuery); // End of use strict

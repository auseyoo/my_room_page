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
    if ($("#mainNav").offset().top > 600) {
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
		 if (count == 3) {
            count = -1;
         }
      }, 5000);

      function animateSlide(item){
         var child = $(item).find(".slide-content").children();
         child.each(function (i) {
           setTimeout(function () {
              child.eq(i).addClass('is-visible');
           }, 300 * (i + 1));
        });
      }

	  $(window).scroll(function(){
		  $.each($("section .slide-content").children().not(".is-visible"), function(index, item){
			var elementTop = $(item).offset().top;
			var elementBottom = elementTop + $(item).outerHeight();

			var viewportTop = $(window).scrollTop();
			var viewportBottom = viewportTop + $(window).height();

			if (elementTop < viewportBottom)
			{
				$(item).addClass("is-visible");
			}
		  });
	  });

  // 타임 라인
  var data = [{
   "date": "2008.02",
   "career": "상일여자고등학교 졸업",
   "description": ""
   }, {
      "date": "2011.02",
      "career": "한양여자대학교 패션디자인과 졸업",
      "description": ""
   }, {
      "date": "2012.03 ~ 2015.02",
      "career": "가천대학교 글로벌캠퍼스 국어국문학과 3학년 편입 후 졸업",
      "description": ""
   }, {
      "date": "2014.10.02",
      "career": "MOS Excel, PowerPoint, Word 최종합격",
      "description": ""
   }, {
      "date": "2015.01.20 ~ 2015.04.08",
      "career": "KF컴퓨터학원 일러스트레이터회사실무 교육 수료",
      "description": ""
   }, {
      "date": "2015.06.16 ~ 2015.09.09",
      "career": "더조은컴퓨터아트학원 웹표준디자인(HTML/드림위버)교육 수료",
      "description": ""
   }, {
      "date": "2016.01.04 ~ 2016.04.04",
      "career": "에이전시 ㈜더웹스타일 퍼블리싱팀 소속",
      "description": "제휴회사 페이지 코딩, 이벤트페이지 코딩, 웹접근성 인증마크 획득 프로젝트"
   }, {
      "date": "2016.05.04 ~ 2016.11.04",
      "career": "(주)옐로트래블랩스 '우리펜션 개발팀' 소속",
      "description": "우리펜션 사이트 리뉴얼, 사이트 관리, 이벤트페이지 코딩,어드민코딩"
   }, {
      "date": "2017.03.20 ~ 재직중",
      "career": "기독교 방송 ㈜CBSi 'IT운영팀' 소속 ",
      "description": "CBS,노컷뉴스 사이트 관리 및 리뉴얼, 이벤트성 페이지 코딩,CBS바이블 사이트 관리"
   }];

  $.each(data, function(index, item){
     $(".timeline")
        .append($(document.createElement("li")).addClass(index % 2 != 0 ? "timeline-inverted" : "")
            .append($(document.createElement("div")).addClass("timeline-image")
                 .append($(document.createElement("img")).addClass("rounded-circle img-fluid").attr("src", "img/about/" + (index + 1)+".jpg")))
            .append($(document.createElement("div")).addClass("timeline-panel")
                 .append($(document.createElement("div")).addClass("timeline-heading")
                    .append($(document.createElement("em")).text(item.date))
                    .append($(document.createElement("h4")).addClass("subheading").text(item.career)))
                 .append($(document.createElement("div")).addClass("timeline-body")
                    .append($(document.createElement("p")).addClass("text-muted").text(item.description)))));
  });
  $(".timeline")
     .append($(document.createElement("li")).addClass("timeline-inverted")
         .append($(document.createElement("div")).addClass("timeline-image").html("<h4>Final<br>goal<br>Developer!</h4>")));

})(jQuery); // End of use strict

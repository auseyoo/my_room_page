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
  // 스크롤 발생시 이벤트 처리 함수
  $(window).scroll(function(){
    navbarCollapse();
    setProgressbar();
    setVisible();
  });

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })

  // 메뉴바 닫기 버튼 클릭 이벤트
  $(".close-link").click(function(){
    $(".navbar-collapse").removeClass("show");
  });

//setHeaderSliderInterval();
setProgressbar();
setVisible();
renderTimeline();

// 메인 header interval 함수
function setHeaderSliderInterval(){
  var slide  = $('.intro .slide');
  var count = 0;
  setHeaderSlider(slide.eq(0));
  setInterval(function(){
    var item = slide.eq(++count).fadeIn();
    slide.not(item).fadeOut();

    slide.find(".slide-content").children().removeClass("is-visible");
    setHeaderSlider(slide.eq(count));
    if (count == 2) count = -1;
  }, 4000);
}

// 메인 header is-visible 추가 함수
function setHeaderSlider(item){
  var child = $(item).find(".slide-content").children();
  child.each(function (i) {
    setTimeout(function () {
      child.eq(i).addClass('is-visible');
    }, 300 * (i + 1));
  });
}

// slide-content 내에 자식 element 들의 is-visible class 추가
function setVisible (){
  $.each($("section .slide-content").children(), function(index, item){
    var position = getElementPosition(item);

    if (position.in) $(item).addClass("is-visible");
    if (position.out) $(item).removeClass("is-visible");
  });
};

// skill-bar 스크롤 위치 변경에 따른 값 셋팅
function setProgressbar(){
  $(".progress-bar").each(function(index, item) {

    var position = getElementPosition(item);
    var per = $(item).data("length");

    // 안에 있을때
    if (position.in)
    {
      if ($(item).hasClass("visible")){
        return;
      }
      $(item).addClass("visible");
    }
    // 밖에 있을때
    if (position.out)
    {
      if (!$(item).hasClass("visible")){
        return;
      }
      per = 0;
      $(item).removeClass("visible");
    }

    $(item).animate({
       'width' : per + '%'
     }, 50).find("span").animate({
       'left' : per + '%'
     });
  });
}

// 특정 엘리먼트가 화면내에 존재 여부를 체크 하는 함수
function getElementPosition(item){
  var rst = {
    in : false,
    out : false
  };

  var elementTop = $(item).offset().top;
  var elementBottom = elementTop + $(item).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  // 안에 있을때
  rst.in = elementTop < viewportBottom && elementBottom > viewportTop;
  // 밖에 있을때
  rst.out = elementTop > viewportBottom || viewportTop > elementBottom;

  return rst;
}

// 타임라인은 객체 함수형으로 생성, 랜더링
function renderTimeline() {
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
      "description": "회사실무 포토샵,<br/>일러스트레이터 교육 수료"
   }, {
      "date": "2015.06.16 ~ 2015.09.09",
      "career": "더조은컴퓨터아트학원",
      "description": "웹표준디자인(HTML/드림위버),<br/>웹퍼블리셔 디지털웹디자인(HTML&CSS2.0&HTML5)<br/> 교육 수료"
   }, {
      "date": "2016.01.04 ~ 2016.04.04",
      "career": "(주)더웹스타일",
      "description": "제휴회사 페이지 코딩, 이벤트페이지 코딩, 웹접근성 인증마크 획득 프로젝트"
   }, {
      "date": "2016.05.04 ~ 2016.11.04",
      "career": "(주)옐로트래블랩스",
      "description": "우리펜션 사이트 리뉴얼, 사이트 관리, 이벤트페이지 코딩,어드민코딩"
   }, {
      "date": "2017.03.20 ~ 2019.06",
      "career": "(주)CBSi",
      "description": "CBS,노컷뉴스 사이트 관리 및 리뉴얼, 이벤트성 페이지 코딩,CBS바이블 사이트 관리"
  },{
    "date": "2019.06 ~ 2019.09",
    "career": "인터파크",
    "description": "2020 도쿄 올림픽 사이트 구축 및 운영, 올림픽 티켓 어드민 사이트 구축"
},{
  "date": "2019.10 ~ 2020.01",
  "career": "(주)샐러드소프트 프리랜서",
  "description": "항공사 에어프레미아 포털사이트 구축(React, Bootstrap)"
},{
  "date": "2020.03 ~ 2020.09",
  "career": "(주)오지큐",
  "description": "Vue.js 기반 네이버 오지큐마켓 사이트 구축 퍼블리싱 및 컴포넌트 개발"
},{
  "date": "2021.08 ~ 2021.11",
  "career": "LG CNS",
  "description": "ERP 시스템사이트 경량화를 위한 React 디자인 공통화 작업 및 컴포넌트 개발"
}];

  $.each(data, function(index, item){
     $(".timeline")
        .append($(document.createElement("div")).attr("data-text", item.date).addClass("timeline-item")
            .append($(document.createElement("div")).addClass("timeline__content")
                .append($(document.createElement("img")).attr("src", "img/about/" + (index + 1) + ".jpg" || ".png").addClass("timeline__img"))
                .append($(document.createElement("h2")).addClass("timeline__content-title").text(item.career))
                .append($(document.createElement("p")).addClass("timeline__content-desc").html(item.description))));
     /*
        .append($(document.createElement("li")).addClass(index % 2 != 0 ? "timeline-inverted" : "")
            .append($(document.createElement("div")).addClass("timeline-image slide-content")
                 .append($(document.createElement("img")).addClass("rounded-circle img-fluid").attr("src", "img/about/" + (index + 1)+".jpg")))
            .append($(document.createElement("div")).addClass("timeline-panel")
                 .append($(document.createElement("div")).addClass("timeline-heading slide-content")
                    .append($(document.createElement("em")).text(item.date))
                    .append($(document.createElement("h4")).addClass("subheading").text(item.career)))
                 .append($(document.createElement("div")).addClass("timeline-body slide-content")
                    .append($(document.createElement("p")).addClass("text-muted").html(item.description)))));*/
  });
}
 
$.fn.timeline = function() {
  var selectors = {
    id: $(this),
    item: $(this).find(".timeline-item"),
    activeClass: "timeline-item--active",
    img: ".timeline__img"
  };
  selectors.item.eq(0).addClass(selectors.activeClass);
  selectors.id.css(
    "background-image",
    "url(" +
      selectors.item
        .first()
        .find(selectors.img)
        .attr("src") +
      ")"
  );
  var itemLength = selectors.item.length;
  $(window).scroll(function() {
    var max, min;
    var pos = $(this).scrollTop();
    selectors.item.each(function(i) {
      min = $(this).offset().top;
      max = $(this).height() + $(this).offset().top;
      var that = $(this);
      if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
        selectors.item.removeClass(selectors.activeClass);
        selectors.id.css(
          "background-image",
          "url(" +
            selectors.item
              .last()
              .find(selectors.img)
              .attr("src") +
            ")"
        );
        selectors.item.last().addClass(selectors.activeClass);
      } else if (pos <= max && pos + $('.navbar.navbar-expand-lg').outerHeight(true) >= min) {
        selectors.id.css(
          "background-image",
          "url(" +
            $(this)
              .find(selectors.img)
              .attr("src") +
            ")"
        );
        selectors.item.removeClass(selectors.activeClass);
        $(this).addClass(selectors.activeClass);
      }
    });
  });
};

$("#timeline-1").timeline();
 

})(jQuery); // End of use strict

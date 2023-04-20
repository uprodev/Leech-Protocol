jQuery(document).ready(function ($) {
  var header = document.querySelector(".header");
  var headroom = new Headroom(header);
  headroom.init();

  $(".navbar-toggler").on("click", function () {
    if ($(this).hasClass("active")) {
      $(".header").removeClass("menu-opened");
      $(this).removeClass("active");
      $(".main-navigation").removeClass("active");
      headroom.unfreeze();
      const body = document.body;
      const scrollY = body.style.top;
      body.removeAttribute("style");
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    } else {
      const scrollY = $(window).scrollTop();
      $("body").css({ position: "fixed", top: -scrollY });
      $(".header").addClass("menu-opened");
      $(this).addClass("active");
      $(".main-navigation").addClass("active");
      headroom.freeze();
    }
  });

  $(".btn-read-more").on("click", function () {
    $(this).hide();
    var txt = $(this).parent().prev(".read-more-wrapper").find("p");
    txt.slideDown(200, function () {
      ScrollTrigger.refresh();
    });
  });

  $(".block-logos .btn-more").on("click", function () {
    var $block = $(this).closest(".block-logos");
    var cols = $block.find(".row > div");
    $(this).hide();
    cols.slideDown(200, function () {
      ScrollTrigger.refresh();
    });
  });

  $(".block-roadmap .btn-more").on("click", function () {
    var $block = $(this).closest(".block-roadmap");
    var stages = $block.find(".roadmap-stage");
    $(this).hide();
    stages.slideDown(300, function () {
      ScrollTrigger.refresh();
    });
    $(".block-roadmap").addClass("opened");
  });

  // $(".contact-form form").on("submit", function (e) {
  //   e.preventDefault();
  //   var err = false;
  //   $(this)
  //     .find("input, textarea")
  //     .each(function () {
  //       if ($(this).val() === "") {
  //         $(this).addClass("error");
  //         err = true;
  //       } else {
  //         $(this).removeClass("error");
  //       }
  //     });
  //   if (!err) {
  //     $(".contact-form").fadeOut(200);
  //     $(".contact-form-success").fadeIn(200);
  //   }
  // });

  // $(".blog-form form").on("submit", function (e) {
  //   e.preventDefault();
  //   var err = false;
  //   $(this)
  //     .find("input")
  //     .each(function () {
  //       if ($(this).val() === "") {
  //         $(this).parent(".field").addClass("error");
  //         err = true;
  //       } else {
  //         $(this).parent(".field").removeClass("error");
  //       }
  //     });
  //   if (!err) {
  //     $(".blog-form-success").addClass("active");
  //   }
  // });

  $(".theme-switch a").on("click", function (e) {
    e.preventDefault();
    var $page = $(".page-wrapper");
    if (!$(this).hasClass("active")) {
      var theme = $(this).attr("data-theme");
      $page.removeClass("theme-dark").removeClass("theme-light").addClass(theme);
      $(".theme-switch a.active").removeClass("active");
      $(this).addClass("active");
      if (theme === "theme-dark") {
        $("body").get(0).style.setProperty("--body-bg", "#000");
        document.querySelectorAll(".roadmap-step.active .roadmap-step-icon").forEach((el) => {
          el.style.borderColor = "b9ff1f";
          el.style.backgroundColor = "b9ff1f";
        });
      } else {
        $("body").get(0).style.setProperty("--body-bg", "#fff");
        document.querySelectorAll(".roadmap-step.active .roadmap-step-icon").forEach((el) => {
          el.style.borderColor = "#84bf00";
          el.style.backgroundColor = "#84bf00";
        });
      }
    }
  });

  $(".btn-more-categories-accordion").on("click", function () {
    var txt1 = "More categories",
      txt2 = "Less categories";
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find("span").text(txt1);
      $(".cat-mobile-hidden").slideUp(300, function () {
        ScrollTrigger.refresh();
      });
    } else {
      $(this).addClass("active").find("span").text(txt2);
      $(".cat-mobile-hidden").slideDown(300, function () {
        ScrollTrigger.refresh();
      });
    }
  });

  $(".btn-more-categories-tabs").on("click", function () {
    var txt1 = "More categories",
      txt2 = "Less categories";
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find("span").text(txt1);
      $(".cat-list--hidden").slideUp(300);
    } else {
      $(this).addClass("active").find("span").text(txt2);
      $(".cat-list--hidden").slideDown(300);
    }
  });

  if ($(".tag-list .inner").height() <= $(".tag-list ").height()) {
    $(".btn-more-tags").hide();
    ScrollTrigger.refresh();
  }
  $(window).on("resize", function () {
    if ($(".tag-list .inner").height() <= $(".tag-list ").height()) {
      $(".btn-more-tags").hide();
      ScrollTrigger.refresh();
    } else {
      $(".btn-more-tags").css("display", "inline-flex");
      ScrollTrigger.refresh();
    }
  });
  $(".btn-more-tags").on("click", function () {
    var txt1 = "See more",
      txt2 = "See less";
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find("span").text(txt1);
      $(".tag-list").removeClass("active");
      ScrollTrigger.refresh();
    } else {
      $(this).addClass("active").find("span").text(txt2);
      $(".tag-list").addClass("active");
      ScrollTrigger.refresh();
    }
  });

  $(".article-read-more").on("click", function () {
    var txt1 = "See more",
      txt2 = "See less";
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find("span").text(txt1);
      $(this).prev(".read-more-wrapper").find("*").slideUp(200);
      ScrollTrigger.refresh();
    } else {
      $(this).addClass("active").find("span").text(txt2);
      $(this).prev(".read-more-wrapper").find("*").slideDown(200);
      ScrollTrigger.refresh();
    }
  });

  $(".btn-play").on("click", function () {
    var video = $(this).prev().get(0);
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  $(".header .btn-wrapper")
    .on("mouseenter", function () {
      var tooltip = $('<div class="tooltip" />');
      tooltip.text("Coming soon..");
      $(this).append(tooltip);
    })
    .on("mouseleave", function () {
      $(this).find(".tooltip").remove();
    });

  function accordion() {
    if ($(window).width() < 1024) {
      var activeAccBtn = $(".accordion button.active");
      var activePanel = activeAccBtn.parent().next();
      activePanel.show();
      ScrollTrigger.refresh();
    }

    $(".accordion .accordion-header button").on("click", function () {
      if (!$(this).hasClass("active")) {
        $(".accordion .accordion-header button.active").parent().next().slideUp(300);
        $(".accordion .accordion-header button.active").removeClass("active");
        var nextPanel = $(this).parent().next(),
          nextPanelId = $(this).parent().next().attr("id");
        nextPanel.slideDown(300, function () {
          ScrollTrigger.refresh();
        });
        $(this).addClass("active");

        $(".tabs-nav .active").removeClass("active");
        $(".tabs-nav a").each(function () {
          if ($(this).attr("href") === "#" + nextPanelId) {
            $(this).addClass("active");
          }
        });
      }
    });
  }
  accordion();

  function tabs() {
    if ($(window).width() >= 1024) {
      var activeTabBtn = $(".tabs-nav .active");
      var activePanel = $(activeTabBtn.attr("href"));
      activePanel.show();
      ScrollTrigger.refresh();
    }

    $(".tabs-nav a").on("click", function (e) {
      e.preventDefault();
      if (!$(this).hasClass("active")) {
        var activePanel = $($(".tabs-nav .active").attr("href"));
        activePanel.hide();
        $(".tabs-nav .active").removeClass("active");
        var nextPanel = $($(this).attr("href")),
          nextPanelId = nextPanel.attr("id");
        nextPanel.fadeIn(200, function () {
          ScrollTrigger.refresh();
        });
        $(this).addClass("active");

        $(".accordion .accordion-header button.active").removeClass("active");
        $(".accordion .accordion-header button").each(function () {
          if ($(this).attr("data-tab") === nextPanelId) {
            $(this).addClass("active");
          }
        });
      }
    });
  }
  tabs();

  if (document.querySelector(".related-slider")) {
    var slider = document.querySelector(".related-slider");
    const swiper = new Swiper(slider, {
      speed: 500,
      loop: true,
      spaceBetween: 50,
      slidesPerView: 1,
      navigation: {
        nextEl: slider.querySelector(".swiper-button-next"),
        prevEl: slider.querySelector(".swiper-button-prev"),
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 56,
        },
      },
      on: {
        init: function () {
          ScrollTrigger.refresh();
        },
      },
    });
  }

  if (document.querySelector(".image-slider")) {
    var sliderImg = document.querySelector(".image-slider");
    const swiper1 = new Swiper(sliderImg, {
      speed: 500,
      loop: false,
      spaceBetween: 50,
      slidesPerView: 1,
      navigation: {
        nextEl: sliderImg.querySelector(".swiper-button-next"),
        prevEl: sliderImg.querySelector(".swiper-button-prev"),
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 27,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 27,
        },
      },
      on: {
        init: function () {
          ScrollTrigger.refresh();
        },
      },
    });
  }

  $(".block-cookies .btn-close").on("click", function () {
    $(".block-cookies").fadeOut(200);
  });
});

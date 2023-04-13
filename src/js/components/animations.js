jQuery(document).ready(function ($) {
  imagesLoaded("body", function () {
    ScrollTrigger.refresh();
  });

  // roadmap animations
  if (document.querySelector(".block-roadmap")) {
    var roadmapStage = document.querySelectorAll(".roadmap-stage-first");
    var roadmapLines = document.querySelectorAll(".roadmap-stage-first .roadmap-step");
    var roadmapLinesActive = document.querySelectorAll(".roadmap-step.active .roadmap-step-icon");
    if (roadmapLines) {
      gsap.to(roadmapLines, {
        scrollTrigger: {
          trigger: roadmapStage,
          toggleActions: "play resume resume resume",
          start: "top 50%",
        },
        delay: 0,
        duration: 0.2,
        ease: "linear",
        y: "0",
        opacity: 1,
        stagger: 0.2,
      });

      var delay = 1;
      gsap.to(roadmapLinesActive, {
        scrollTrigger: {
          trigger: roadmapStage,
          toggleActions: "play resume resume resume",
          start: "top 50%",
        },
        delay: delay,
        duration: 0.2,
        ease: "linear",
        borderColor: "#b9ff1f",
        opacity: 0.6,
        stagger: 0.2,
      });
    }
  }

  // technology
  if (document.querySelector(".block-technology")) {
    let coins1 = document.getElementById("coinsLottie02");

    const timeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: document.querySelector(".block-technology .animation-mobile"),
          start: "top 80%",
          ease: "none",
          toggleActions: "play resume resume resume",
          // scrub: true,
          // end: "bottom bottom",
        },
        onComplete: function () {
          coins1.play();
        },
      })
      .to(".t-box-01", {
        opacity: 1,
        duration: 0.5,
      })
      .to(
        ".t-box-01-connect .circle-top",
        {
          opacity: 1,
          duration: 0.1,
        },
        "-=0.3"
      )
      .to(
        ".t-box-01-connect path",
        {
          strokeDashoffset: 0,
          duration: 0.2,
        },
        "-=0.1"
      )
      .to(".t-box-01-connect .circle-bottom", {
        opacity: 1,
        duration: 0.1,
      })
      .to(".t-box-02", {
        opacity: 1,
        duration: 0.5,
      })
      .to(
        ".t-box-02-connect path:not(.line)",
        {
          strokeDashoffset: 0,
          duration: 0.2,
        },
        "-=0.3"
      )
      .to(
        ".t-box-02-connect path.line",
        {
          opacity: 1,
          duration: 0.2,
        },
        "-=0.3"
      )
      .to(".t-box-02-connect circle", {
        opacity: 1,
        duration: 0.1,
      })
      .to(".t-box-03", {
        opacity: 1,
        duration: 0.5,
      })
      .to(
        ".t-box-03-connect path:not(.line)",
        {
          strokeDashoffset: 0,
          duration: 0.2,
        },
        "-=0.3"
      )
      .to(
        ".t-box-03-connect path.line",
        {
          opacity: 1,
          duration: 0.2,
        },
        "-=0.3"
      )
      .to(".t-box-03-connect circle", {
        opacity: 1,
        duration: 0.1,
      })
      .to(".t-box-04", {
        opacity: 1,
        duration: 0.5,
      })
      .to(
        ".t-box-04-connect path",
        {
          opacity: 1,
          duration: 0.2,
        },
        "-=0.3"
      )
      .to(".t-box-04-connect circle", {
        opacity: 1,
        duration: 0.1,
      })
      .to(".t-box-05", {
        opacity: 1,
        duration: 0.5,
      })
      .to(
        ".t-box-05-connect path",
        {
          opacity: 1,
          duration: 0.2,
        },
        "-=0.3"
      )
      .to(".t-box-06", {
        opacity: 1,
        duration: 0.5,
      })
      .to(
        ".t-box-06-connect .circle-top",
        {
          opacity: 1,
          duration: 0.1,
        },
        "-=0.3"
      )
      .to(
        ".t-box-06-connect path",
        {
          strokeDashoffset: 0,
          duration: 0.2,
        },
        "-=0.3"
      )
      .to(".t-box-06-connect .circle-bottom", {
        opacity: 1,
        duration: 0.1,
      })
      .to(".t-box-07", {
        opacity: 1,
        duration: 0.5,
      });

    $(".t-box-trigger").on("click", function () {
      if (!$(this).hasClass("active")) {
        var box = $(this).attr("data-change");
        var height = $(this).attr("data-height");
        $(".t-box-trigger.active").removeClass("active");
        $(this).addClass("active");
        $(".t-box-change.active").removeClass("active");
        $(".tech-svg").attr("viewBox", "0 0 270 " + height);
        $(".tech-svg").attr("height", height);
        $(".t-box-change").each(function () {
          if ($(this).attr("data-box") === box) {
            $(this).addClass("active");
          }
        });
      }
    });

    let coins2 = document.getElementById("coinsLottie03");
    let coins3 = document.getElementById("coinsLottie04");

    const timeline1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: document.querySelector(".block-technology .animation-desktop"),
          start: "top 50%",
          ease: "none",
          toggleActions: "play resume resume resume",
        },
        onStart: function () {
          coins2.play();
        },
        onComplete: function () {
          coins3.play();
        },
      })
      .to(".t-box-01-d", {
        opacity: 1,
        duration: 0.5,
      })
      .to(
        ".t-box-connect-01 .c-left",
        {
          opacity: 1,
          duration: 0.1,
        },
        "-=0.5"
      )
      .to(
        ".t-box-connect-01 .line",
        {
          strokeDashoffset: 0,
          duration: 1,
        },
        "-=0.5"
      )
      .to(
        ".t-box-connect-01 .c-right",
        {
          opacity: 1,
          duration: 0.1,
        },
        "-=0.5"
      )
      .to(
        ".t-box-trigger-wrapper",
        {
          opacity: 1,
          duration: 0.5,
        },
        "-=0.5"
      )
      .to(".t-box-connect-02 ", {
        opacity: 1,
        duration: 0.3,
      })
      .to(".t-box-02-d ", {
        opacity: 1,
        duration: 0.3,
      })
      .to(".t-box-connect-03 .c-left", {
        opacity: 1,
        duration: 0.1,
      })
      .to(
        ".t-box-connect-03 .line",
        {
          strokeDashoffset: 0,
          duration: 0.2,
        },
        "-=0.1"
      )
      .to(".t-box-connect-03 .c-right", {
        opacity: 1,
        duration: 0.1,
      })
      .to(".t-box-03-d ", {
        opacity: 1,
        duration: 0.5,
      });

    $(".t-box-trigger-d").on("click", function () {
      if (!$(this).hasClass("active")) {
        var box = $(this).attr("data-change");
        console.log(box);
        $(".t-box-trigger-d.active").removeClass("active");
        $(this).addClass("active");
        $(".t-box-change-d.active").removeClass("active");
        $(".t-box-change-d").each(function () {
          if ($(this).attr("data-box") === box) {
            $(this).addClass("active");
          }
        });
        if (box === "t4d") {
          $(".animation-desktop").addClass("coins-bottom");
        } else {
          $(".animation-desktop").removeClass("coins-bottom");
        }
      }
    });
  }

  // form
  if (document.querySelector(".blog-form")) {
    var form = document.querySelector(".blog-form");
    ScrollTrigger.create({
      trigger: form,
      start: "top bottom",
      onLeaveBack: function () {
        form.classList.add("minify");
      },
    });
  }

  // share
  if (document.querySelector(".article-content .article-share")) {
    var container = document.querySelector(".article-content");
    var share = document.querySelector(".article-content .article-share");
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom 200px",
      pin: share,
    });
  }
});

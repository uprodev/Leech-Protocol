jQuery(document).ready((function(t){if(imagesLoaded("body",(function(){ScrollTrigger.refresh()})),document.querySelector(".block-roadmap")){var o=document.querySelectorAll(".roadmap-stage-first"),e=document.querySelectorAll(".roadmap-stage-first .roadmap-step"),a=document.querySelectorAll(".roadmap-step.active .roadmap-step-icon"),c="#b9ff1f";if(document.querySelectorAll(".page-wrapper.theme-light").length&&(c="#84bf00"),e){gsap.to(e,{scrollTrigger:{trigger:o,toggleActions:"play resume resume resume",start:"top 50%"},delay:0,duration:.2,ease:"linear",y:"0",opacity:1,stagger:.2});gsap.to(a,{scrollTrigger:{trigger:o,toggleActions:"play resume resume resume",start:"top 50%"},delay:1,duration:.2,ease:"linear",borderColor:c,backgroundColor:c,opacity:1,stagger:.2})}}if(document.querySelector(".block-technology")){let o=document.getElementById("coinsLottie02");gsap.timeline({scrollTrigger:{trigger:document.querySelector(".block-technology .animation-mobile"),start:"top 80%",ease:"none",toggleActions:"play resume resume resume"},onComplete:function(){o.play()}}).to(".t-box-01",{opacity:1,duration:.5}).to(".t-box-01-connect .circle-top",{opacity:1,duration:.1},"-=0.3").to(".t-box-01-connect path",{strokeDashoffset:0,duration:.2},"-=0.1").to(".t-box-01-connect .circle-bottom",{opacity:1,duration:.1}).to(".t-box-02",{opacity:1,duration:.5}).to(".t-box-02-connect path:not(.line)",{strokeDashoffset:0,duration:.2},"-=0.3").to(".t-box-02-connect path.line",{opacity:1,duration:.2},"-=0.3").to(".t-box-02-connect circle",{opacity:1,duration:.1}).to(".t-box-03",{opacity:1,duration:.5}).to(".t-box-03-connect path:not(.line)",{strokeDashoffset:0,duration:.2},"-=0.3").to(".t-box-03-connect path.line",{opacity:1,duration:.2},"-=0.3").to(".t-box-03-connect circle",{opacity:1,duration:.1}).to(".t-box-04",{opacity:1,duration:.5}).to(".t-box-04-connect path",{opacity:1,duration:.2},"-=0.3").to(".t-box-04-connect circle",{opacity:1,duration:.1}).to(".t-box-05",{opacity:1,duration:.5}).to(".t-box-05-connect path",{opacity:1,duration:.2},"-=0.3").to(".t-box-06",{opacity:1,duration:.5}).to(".t-box-06-connect .circle-top",{opacity:1,duration:.1},"-=0.3").to(".t-box-06-connect path",{strokeDashoffset:0,duration:.2},"-=0.3").to(".t-box-06-connect .circle-bottom",{opacity:1,duration:.1}).to(".t-box-07",{opacity:1,duration:.5});t(".t-box-trigger").on("click",(function(){if(!t(this).hasClass("active")){var o=t(this).attr("data-change"),e=t(this).attr("data-height");t(".t-box-trigger.active").removeClass("active"),t(this).addClass("active"),t(".t-box-change.active").removeClass("active"),t(".tech-svg").attr("viewBox","0 0 270 "+e),t(".tech-svg").attr("height",e),t(".t-box-change").each((function(){t(this).attr("data-box")===o&&t(this).addClass("active")}))}}));let e=document.getElementById("coinsLottie03"),a=document.getElementById("coinsLottie04");gsap.timeline({scrollTrigger:{trigger:document.querySelector(".block-technology .animation-desktop"),start:"top 50%",ease:"none",toggleActions:"play resume resume resume"},onStart:function(){e.play()},onComplete:function(){a.play()}}).to(".t-box-01-d",{opacity:1,duration:.5}).to(".t-box-connect-01 .c-left",{opacity:1,duration:.1},"-=0.5").to(".t-box-connect-01 .line",{strokeDashoffset:0,duration:1},"-=0.5").to(".t-box-connect-01 .c-right",{opacity:1,duration:.1},"-=0.5").to(".t-box-trigger-wrapper",{opacity:1,duration:.5},"-=0.5").to(".t-box-connect-02 ",{opacity:1,duration:.3}).to(".t-box-02-d ",{opacity:1,duration:.3}).to(".t-box-connect-03 .c-left",{opacity:1,duration:.1}).to(".t-box-connect-03 .line",{strokeDashoffset:0,duration:.2},"-=0.1").to(".t-box-connect-03 .c-right",{opacity:1,duration:.1}).to(".t-box-03-d ",{opacity:1,duration:.5});t(".t-box-trigger-d").on("click",(function(){if(!t(this).hasClass("active")){var o=t(this).attr("data-change");console.log(o),t(".t-box-trigger-d.active").removeClass("active"),t(this).addClass("active"),t(".t-box-change-d.active").removeClass("active"),t(".t-box-change-d").each((function(){t(this).attr("data-box")===o&&t(this).addClass("active")})),"t4d"===o?t(".animation-desktop").addClass("coins-bottom"):t(".animation-desktop").removeClass("coins-bottom")}}))}if(document.querySelector(".blog-form")){var r=document.querySelector(".blog-form");ScrollTrigger.create({trigger:r,start:"top bottom",onLeaveBack:function(){r.classList.add("minify")}})}if(document.querySelector(".article-content .article-share")){var i=document.querySelector(".article-content"),n=document.querySelector(".article-content .article-share");ScrollTrigger.create({trigger:i,start:"top top",end:"bottom 200px",pin:n})}}));
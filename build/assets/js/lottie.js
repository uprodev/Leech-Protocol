let l0=document.getElementById("bannerLottie");l0.addEventListener("ready",()=>{ScrollTrigger.refresh()}),document.querySelector(".block-banner .animation-box").addEventListener("mouseenter",(function(){l0.play()})),document.querySelector(".block-banner .animation-box").addEventListener("mouseleave",(function(){l0.stop()}));let l1=document.getElementById("blockchainLottie");l1.addEventListener("ready",()=>{ScrollTrigger.refresh()});let l2=document.getElementById("strategyLottie");l2.addEventListener("ready",()=>{ScrollTrigger.refresh()}),LottieInteractivity.create({player:"#coinsLottie01",mode:"scroll",actions:[{visibility:[0,1],type:"playOnce"}]});let l3=document.getElementById("transferLottie");l3.addEventListener("ready",()=>{ScrollTrigger.refresh()}),LottieInteractivity.create({player:"#transferLottie",mode:"scroll",actions:[{visibility:[0,1],type:"playOnce"}]});let l4=document.getElementById("protocolLottie");l4.addEventListener("ready",()=>{ScrollTrigger.refresh()}),LottieInteractivity.create({player:"#protocolLottie",mode:"scroll",actions:[{visibility:[0,1],type:"playOnce"}]});let l5=document.getElementById("joinLottie");l5.addEventListener("ready",()=>{ScrollTrigger.refresh()}),LottieInteractivity.create({player:"#joinLottie",mode:"scroll",actions:[{visibility:[0,1],type:"loop",frames:[1,200]}]});
window.addEventListener("load", async function () {
  const $ = (str, dom = document) => [...dom.querySelectorAll(str)];
  const wait = t => new Promise(r => setTimeout(r,t));
  console.log("The Eagle has liftoff! 🦅");


  // var swiper = new Swiper(".mySwiper", {
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return '<span class="' + className + '">' + (index + 1) + "</span>";
  //     },
  //   },
  // });
});

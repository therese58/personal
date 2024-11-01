window.addEventListener("scroll", function() {
  const header = document.getElementById("header");
  // 스크롤이 50px 이상 내려가면 색상 변경, 아니면 원래 색상
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener('DOMContentLoaded', function() {

  const mynavi = this.document.querySelector("#navmenu ul"); //배열형 데이터 아님!
  
  let mytag = '';

  for( x in navidata){
    mytag += `<li><a href="${navidata[x].d1href}" target="${navidata[x].__target}">${navidata[x].d1text}</a></li>`;

    mynavi.innerHTML = mytag;
  }

  const myslide = this.document.querySelector("#hero-carousel .slideitems");

  let slidetag = '';


  for (let y in slideData) {
    slidetag += `<div class="carousel-item ${y == 0 ? 'active' : '' }">
        <video src="${slideData[y].video}" alt="${slideData[y].alt}" autoplay loop muted></video>
        <div class="carousel-container container-xl">
          <h2>${slideData[y].h2text}</h2>
          <p>${slideData[y].ptext}</p>
        </div>
      </div>`;
  }
  
  myslide.innerHTML = slidetag;

  const indicators = document.querySelector("#hero-carousel .carousel-indicators");
let indicatorTags = '';

for (let i = 0; i < slideData.length; i++) {
  indicatorTags += `<li data-bs-target="#hero-carousel" data-bs-slide-to="${i}" class="${i === 0 ? 'active' : ''}"></li>`;
}

indicators.innerHTML = indicatorTags;

    setTimeout(function() {
      var myCarousel = new bootstrap.Carousel(document.getElementById('hero-carousel'), {
        interval: 5000, // 5초 간격으로 슬라이드 전환 (필요시 조정)
        ride: 'carousel' // Carousel 자동 실행
      });
    }, 500); // 0.5초 대기 후 실행


})
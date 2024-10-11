window.addEventListener('load',function(){

  const mynavi = this.document.querySelector("#navmenu ul"); //배열형 데이터 아님!
  
  let mytag = '';

  for( x in navidata){
    mytag += `<li><a href="${navidata[x].d1href}" target="${navidata[x].__target}">${navidata[x].d1text}</a></li>`;

    mynavi.innerHTML = mytag;
  }

  const myslide = this.document.querySelector("#hero-carousel div");

  let slidetag = '';

  for( y in slideData){

    slidetag += `<div class="carousel-item">
      <img src="${slideData[y].img}" alt="${slideData[y].alt}">
      <div class="carousel-container">
        <h2>${slideData[y].h2text}</h2>
        <p>${slideData[y].ptext}</p>
      </div>
    </div>`;
  
    myslide.innerHTML = slidetag;
  }

})
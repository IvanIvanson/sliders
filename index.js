const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgsEl = document.querySelectorAll(".img");
const imageContainerEl = document.querySelector(".image-container");
let currentImg = 1;
let timeout;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 300}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 2000);
};

// slider 2
let img1 = "./images/card_men1.png";
let img2 = "./images/card_men2.png";
let img3 = "./images/card_men3.png";
 const slider = {
   slides: [img1, img2, img3],
   frame: 0,
   set: function (image) {
     document.getElementById("src").style.backgroundImage =
       "url(" + image + ")";
   },
   init: function () {
     this.set(this.slides[this.frame]);
   },
   left: function () {
     this.frame--;
     if (this.frame < 0) {
       this.frame = this.slides.length - 1;
     }
     this.set(this.slides[this.frame]);
   },
   right: function () {
     this.frame++;
     if (this.frame == this.slides.length) {
       this.frame = 0;
     }
     this.set(this.slides[this.frame]);
   },
 };

 window.onload = function () {
   slider.init();

   setInterval(function () {
     slider.right();
   }, 2000);
};
 
// slider 3
 function getEll(x) {
   return document.getElementById(x);
 }

 let ba,
   bi = 0,
   intrvl;
let img11 = "<img src='./images/card_men1.png' alt='img1'>";
let img22 = "<img src='./images/card_men2.png' alt='img1'>";
let img33 = "<img src='./images/card_men3.png' alt='img1'>";
let img34 = "<img src='./images/card_men2.png' alt='img1'>";
 let bca = [img11, img22, img33, img34];

 function bubbles(bi) {
   getEll("bubblecontent").style.opacity = 0;
   for (let i = 0; i < ba.length; i++) {
     ba[i].style.background = "rgba(0,0,0,0.1)";
   }
   ba[bi].style.background = "#999";
   setTimeout(function () {
     getEll("bubblecontent").innerHTML = bca[bi];
     getEll("bubblecontent").style.opacity = 1;
   }, 300);
 }

 function bubbleSlide() {
   bi++;
   if (bi == ba.length) {
     bi = 0;
   }
   bubbles(bi);
 }

 window.addEventListener("load", function () {
   ba = getEll("bubbles").children;
   intrvl = setInterval(bubbleSlide, 2000);
 });

//  slider 4

    let slider4 = document.querySelector(".slider-4");

    //icon load
    let loadIcon = document.createElement("i");
    loadIcon.classList.add("fas", "fa-spinner", "fa-spin");
    slider4.insertAdjacentElement("afterbegin", loadIcon);

    // left arrow

    let leftArrow = document.createElement("i");
    leftArrow.classList.add("fas", "fa-chevron-circle-left", "slider-leftArrow");
    slider4.insertAdjacentElement("beforeend", leftArrow);

    // right arrow

    let rightArrow = document.createElement("i");
    rightArrow.classList.add(
        "fas",
        "fa-chevron-circle-right",
        "slider-rightArrow"
    );
    slider4.insertAdjacentElement("beforeend", rightArrow);

    // ждём загрузку всего контента

    //--—---------------

    function hideLoadIcon(loadIcon) {
        loadIcon.style.display = "none";
    }

    function setSizes(slider) {
        let width = slider4.getAttribute("data-width");
        let height = slider4.getAttribute("data-height");
        if (width !== null && width !== "") {
            slider4.style.width = width;
        }
        if (height !== null && height !== "") {
            slider4.style.height = height;
        }
    }
    setSizes(slider);

    // создаём объект слайдера

    let images = {
        //номер текущего изображения
        currentIdx: 0,
        slides: null,
        init() {
            this.slides = document.querySelectorAll(".slider-item");
            this.showImageWithCurrentIdx();
        },
        showImageWithCurrentIdx() {
            this.slides[this.currentIdx].classList.remove("hidden-slider");
        },
        hideVisibleImage() {
            this.slides[this.currentIdx].classList.add("hidden-slider");
        },
        setNextLeftImage() {
            this.hideVisibleImage();
            if (this.currentIdx == 0) {
                this.currentIdx = this.slides.length - 1;
            } else {
                this.currentIdx--;
            }
            this.showImageWithCurrentIdx();
        },

        setNextRightImage() {
            this.hideVisibleImage();
            if (this.currentIdx == this.slides.length - 1) {
                this.currentIdx = 0;
            } else {
                this.currentIdx++;
            }
            this.showImageWithCurrentIdx();
        },
    };

    let id = setInterval(function () {
        images.setNextRightImage();
    }, 3000);

    slider4.addEventListener("onmouseover", function () {
        clearInterval(id);
    });

    // ждём загрузку контента

    /*window.addEventListener("load", function(){*/

    hideLoadIcon(loadIcon);

    //инициализируем слайдер
    images.init();

    leftArrow.addEventListener("click", function () {
        images.setNextLeftImage();
    });
    rightArrow.addEventListener("click", function () {
        images.setNextRightImage();
    });
   
// slider 5

 document.body.onclick = function(event){
        event = event || window.event;
        if(event.target. classList.contains('goods-min')){
            var allDivs = document.querySelectorAll(".goods-img-min div");
            for(var i = 0; i < allDivs.length; i++){
                allDivs[i].classList.remove('active');
                
            }
            document.getElementById("goods-max").src=event.target.src;
            event.target.parentElement.classList.add("active");
            
        }
    }
    
    /*---------------*/
    
    let line = document.querySelector(".goods-img-min");
    let blocks = document.querySelectorAll(".small-img");
   let sliderWidth = document.querySelector(".slider5").offsetWidth;
    let widthArray = [0];
    let lineWidth = 0;
    let offset = 0;
    let step = 1;
    let ostatok = 0;
    
    for (let i = 0; i < blocks.length; i++){
        widthArray.push(blocks[i].offsetWidth);
        lineWidth += blocks[i].offsetWidth;
    }
    
    line.style.width = lineWidth + 'px';
   /* console.log(widthArray);*/
    
    line.onclick = function(){
    
    ostatok = lineWidth - sliderWidth - (offset + widthArray[step] - 80);
    
    if(ostatok >= 0){
        offset = offset + widthArray[step];
        line.style.left = -offset + 'px';
        
        
    }else{
        line.style.left = -(lineWidth - sliderWidth) + 'px';
        offset = 0;
        step = -1;
        
    }
    if (step + 1 == blocks.length){
        step = 0;
        offset= 0;
        
        
    }else{
        step++;
        
    }
    
    
    }
    
    /*-------slider 6--------*/
    let line6 = document.querySelector(".line");
    let blocks6 = document.querySelectorAll(".block");
    let sliderWidth6 = document.querySelector(".slider6").offsetWidth;
    let widthArray6 = [0];
    let lineWidth6 = 0;
    let offset6 = 0;
    let step6 = 1;
    let ostatok6 = 0;

    for (let i = 0; i < blocks6.length; i++) {
      widthArray6.push(blocks6[i].offsetWidth);
      lineWidth6 += blocks6[i].offsetWidth;
    }

    line6.style.width = lineWidth6 + "px";
    // console.log(widthArray6);

function addSlide() {
         ostatok6 = lineWidth6 - sliderWidth6 - (offset6 + widthArray6[step6]);

         if (ostatok6 >= 0) {
           offset6 = offset6 + widthArray6[step6];
           line6.style.left = -offset6 + "px";
         } else {
           line6.style.left = -(lineWidth6 - sliderWidth6) + "px";
           offset6 = 0;
           step6 = -1;
         }
         if (step6 + 1 == blocks6.length) {
           step6 = 0;
           offset6 = 0;
         } else {
           step6++;
         }
    }
    document.onclick = function () {
     addSlide();
      
};
setInterval(addSlide, 2000);
   
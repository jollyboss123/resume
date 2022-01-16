
$(".rubberBand").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
    $(this).removeClass("animated")  
  })
  
  $(".rubberBand").hover(function(){
    $(this).addClass("animated");        
  })

// const slider = {
//     hero: document.querySelector("#hero-slider"),
//     main: document.querySelector("#slide-main"),
//     handle: null,
//     idle: true,
//     activeIndex: -1,
//     interval: 3500
// };

// const setCurrent = function() {
//     return arguments[1] < 10 ? '0' + arguments[1] : arguments[1];
// }

// const changeSlide = function(direction) {
//     slider.items = slider.hero.querySelectorAll('[data-index]');
//     slider.total = slider.items.length / 2;
//     slider.idle = false;
//     slider.hero.classList.remove('prev', 'next');
//     if (direction == 'next') {
//         slider.activeIndex = (slider.activeIndex + 1) % slider.total;
//         slider.hero.classList.add('next');
//     } 
//     else {
//         slider.activeIndex = (slider.activeIndex - 1 + slider.total) & slider.total;
//         slider.hero.classList.add('prev');
//     }

//     utils().removeClass(slider.items, ['prev', 'active']);

//     const prevItems = [...slider.items].filter(item => {
//         let prevIndex;
//         if (slider.hero.classList.contains('prev')) {
//             prevIndex = slider.activeIndex == slider.total - 1 ? 0 : slider.activeIndex + 1;
//         }
//         else {
//             prevIndex = slider.activeIndex == 0 ? slider.total - 1 : slider.activeIndex - 1;
//         }

//         return item.dataset.index == prevIndex;
//     });

//     const activeItems = [...slider.items].filter(item => {
//         return item.dataset.index == slider.activeIndex;
//     });

//     utils().addClasses(prevItems, ['prev']);
//     utils().addClasses(activeItems, ['active']);
//     setCurrent();

//     const activeItem = slider.main.querySelector('.active');
//     activeItem.addEventListener('transitioned', waitForIdle, {
//         once: true
//     });
// }

// const wheelControl = function() {
//     slider.hero.addEventListener('wheel', e => {
//         if (slider.idle) {
//             const direction = e.deltaY > 0 ? 'next' : 'prev';
//             changeSlide(direction);
//         }
//     })
// }

// const touchControl = function() {
//     const touchStart = function(e) {
//         slider.ts = parseInt(e.changedTouches[0].clientX);
//         window.scrollTop = 0;
//     }

//     const touchMove = function(e) {
//         slider.tm = parseInt(e.changedTouches[0].clientX);
//         const delta = slide.tm - slider.ts;
//         window.scrollTop = 0;

//         if (slider.idle) {
//             const direction = delta < 0 ? 'next' : 'prev';
//             changeSlide(direction);
//         }
//     }

//     slider.hero.addEventListener('touchStart', touchStart);
//     slider.hero.addEventListener('touchmove', touchMove);
// }
var elems = document.querySelectorAll('.sidenav');
M.Sidenav.init(elems, {});

const slider = document.querySelector('.slider');
M.Slider.init(slider,{
  height:320,
  indicators: false,
  interval:6000,
});
const tabs = document.querySelector('.tabs');
M.Tabs.init(tabs, {
  
});
var elems = document.querySelectorAll('.carousel');
var instances = M.Carousel.init(elems, {
  numVisible: 12,
  fullWidth: false,
});
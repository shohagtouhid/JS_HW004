$(document).ready(function(){

// Counter up
$('.count').counterUp({
    delay: 10,
    time: 1000
});


});


wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();


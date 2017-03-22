	  
   function iconMenu() {
  	var x = document.getElementById("cimsor");
	x.classList.toggle("open");
   }
	  
  initSmoothScrolling();

  function initSmoothScrolling() {
     document.querySelectorAll('a')
     .forEach(function(a) {
        a.addEventListener('click', onClick, false);
     });
     function onClick(e) {
      	  e.stopPropagation();
      	  e.preventDefault();
      	  jump(e.target.hash, {
        	duration: 500,
      	  });
      }
  }

  function jump(target, options) {
    var
    start = window.pageYOffset,
    opt = {
      duration: options.duration,
      offset: options.offset || 0,
      callback: options.callback,
      easing: options.easing || easeInOutQuad
    },
    distance = typeof target === 'string' ?
    opt.offset + document.querySelector(target).getBoundingClientRect().top :
    target,
    duration = typeof opt.duration === 'function' ?
    opt.duration(distance) :
    opt.duration,
    timeStart, timeElapsed;

    requestAnimationFrame(function(time) {
      timeStart = time;
      loop(time);
    });
 
    function loop(time) {
      timeElapsed = time - timeStart;
      window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));
      if (timeElapsed < duration)
        requestAnimationFrame(loop)
      else
        end();
    }

    function end() {
      window.scrollTo(0, start + distance);
      if (typeof opt.callback === 'function')
        opt.callback();
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2
      if (t < 1) return c / 2 * t * t + b
        t--
       return -c / 2 * (t * (t - 2) - 1) + b
    }
  }	  
	  
	  
  (function() {
    'use strict';
   	 var section = document.querySelectorAll(".chapter");
   	 var sections = {};
   	 var i = 0;
   	 window.onscroll = function() {
   	   Array.prototype.forEach.call(section, function(e) {
   	     sections[e.id] = e.offsetTop-250;
   	   });
	   var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
     	   for (i in sections) {
       		if (sections[i] <= scrollPosition) {
         	  document.querySelector('.active').classList.remove('active');
         	  document.querySelector('a[href*=' + i + ']').className += ' active';
	      	}
    	   }
   	};
   })();  
	  

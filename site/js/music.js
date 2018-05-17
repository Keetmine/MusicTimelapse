
	var player = new Tone.Player({
			"url" : "./audio/1988.mp3",
			"loop" : true
	}).toMaster()

	var back = new Tone.Player({
			"url" : "./audio/back.mp3",
			"loop" : true,
			"volume" : -22,
	}).toMaster()

function startBack() {
		back.start();
}

function stopBack() {
		back.stop();
}

document.addEventListener("keydown", function(event) {
	if (event.keyCode == 32) {start1988()}
});

document.addEventListener("keyup", function(event) {
	if (event.keyCode == 32) {stop1988()}
});

function start1988() {
	player.start();
	back.mute = true;
	var container = document.getElementById("stars");
	container.setAttribute("style", "display: block;");

	particlesJS("stars", {
	  "particles": {
	    "number": {
	      "value": 400,
	      "density": {
	        "enable": true,
	        "value_area": 789.1476416322727
	      }
	    },
	    "color": {
	      "value": "#ffffff"
	    },
	    "shape": {
	      "type": "circle",
	      "stroke": {
	        "width": 0,
	        "color": "#000000"
	      },
	      "polygon": {
	        "nb_sides": 5
	      },
	      "image": {
	        "src": "img/github.svg",
	        "width": 100,
	        "height": 100
	      }
	    },
	    "opacity": {
	      "value": 0.7,
	      "random": true,
	      "anim": {
	        "enable": true,
	        "speed": 0.2,
	        "opacity_min": 0,
	        "sync": false
	      }
	    },
	    "size": {
	      "value": 2,
	      "random": true,
	      "anim": {
	        "enable": true,
	        "speed": 8,
	        "size_min": 0,
	        "sync": false
	      }
	    },
	    "line_linked": {
	      "enable": false,
	      "distance": 150,
	      "color": "#ffffff",
	      "opacity": 0.4,
	      "width": 1
	    },
	    "move": {
	      "enable": true,
	      "speed": 0.2,
	      "direction": "none",
	      "random": true,
	      "straight": false,
	      "out_mode": "out",
	      "bounce": false,
	      "attract": {
	        "enable": false,
	        "rotateX": 600,
	        "rotateY": 1200
	      }
	    }
	  },
	  "interactivity": {
	    "detect_on": "canvas",
	    "events": {
	      "onhover": {
	        "enable": true,
	        "mode": "bubble"
	      },
	      "onclick": {
	        "enable": true,
	        "mode": "push"
	      },
	      "resize": true
	    },
	    "modes": {
	      "grab": {
	        "distance": 400,
	        "line_linked": {
	          "opacity": 1
	        }
	      },
	      "bubble": {
	        "distance": 83.91608391608392,
	        "size": 3,
	        "duration": 5	,
	        "opacity": 1,
	        "speed": 3
	      },
	      "repulse": {
	        "distance": 200,
	        "duration": 0.4
	      },
	      "push": {
	        "particles_nb": 4
	      },
	      "remove": {
	        "particles_nb": 2
	      }
	    }
	  },
	  "retina_detect": true
	});
};

function stop1988() {
	player.stop();
	back.mute = false;
	var container = document.getElementById("stars");
	container.setAttribute("style", "display: none;");
};

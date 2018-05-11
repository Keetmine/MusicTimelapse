function navigation(page) {

	var elmnt = document.getElementById("page")

	if (page) {
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
				if (this.status == 200) {
					elmnt.innerHTML = this.responseText;
					list()
					// var url = 'index.html'
	        // if (url.indexOf('#') >= 0) {
					// 		console.log(url)
	        //     url = url.slice(0, window.location.href.indexOf('#'))
	        // }
	        // if (page) {
					// 		if (page != '/home.html') {
					// 				url = url + '#' + page
					// 		}
	        // }
	        // window.history.pushState(null, document.title, url);
				}
				if (this.status == 404) {elmnt.innerHTML = "Page not found."}
			}
		}
		xhttp.open("GET", page, true)
		xhttp.send()

		return;
	}
};


// $(document).ready(function(){
// window.addEventListener("hashchange", function(e) {
// 	console.log(e)
// 	var parts = e.newURL.split('/');
// 	var lastSegment = parts.pop() || parts.pop();
// 	if (lastSegment == 'index.html') {
// 		navigation("/home.html");
// 	} else {
// 		navigation(lastSegment);
// 	}
// }, false);
// });


function list() {
  var z, i, elmnt, year, xhttp;

  z = document.getElementsByTagName("a");
	var bodys = document.getElementsByTagName("body");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i]
		var body = bodys[0]
    year = elmnt.getAttribute("year")
    if (year) {
			elmnt.innerHTML = "<span>" + year + "</span>";
			elmnt.onmouseover = function() {
				this.setAttribute("style", "background-size: cover; background-image: url(/img/"+ this.getAttribute("year") + ".jpg");
				body.setAttribute("style", "background-image: url(/img/"+ this.getAttribute("year") + ".jpg");
			};
			elmnt.onmouseout = function() {
				this.setAttribute("style", "background-image: null");
				body.setAttribute("style", " background-image: null");
			};
			elmnt.onclick = function(){
				navigation('/' + this.getAttribute("year") + '.html')
			};
    }
  }
};

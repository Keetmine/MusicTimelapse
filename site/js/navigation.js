function navigation(page) {

	var elmnt = document.getElementById("page")

	if (page) {
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
				if (this.status == 200) {elmnt.innerHTML = this.responseText; list()}
				if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
			}
		}
		xhttp.open("GET", page, true)
		xhttp.send()

		return;
	}

};

function list() {
  var z, i, elmnt, year, xhttp;

  z = document.getElementsByTagName("a");
	var bodys = document.getElementsByTagName("body");
	console.log(body)
  for (i = 0; i < z.length; i++) {
    elmnt = z[i]
		var body = bodys[0]
    year = elmnt.getAttribute("year")
    if (year) {
			elmnt.innerHTML = "<span>" + year + "</span>";
			elmnt.onmouseover = function() {
				this.setAttribute("style", "background-size: cover; background-image: url(/img/"+ this.getAttribute("year") + ".jpg");
				body.setAttribute("style", "background-size: cover; background-image: url(/img/"+ this.getAttribute("year") + ".jpg");
			};
			elmnt.onmouseout = function() {
				this.setAttribute("style", "background-image: null");
				body.setAttribute("style", " background-image: null");
			};
			elmnt.onclick = function(){
				navigation('./' + this.getAttribute("year") + '.html')
			};
    }
  }
};

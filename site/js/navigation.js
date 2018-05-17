function navigation(page) {

	var elmnt = document.getElementById("page")

	if (page) {
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
				if (this.status == 200) {
					elmnt.innerHTML = this.responseText
					list()
					startBack()
					includeHTML()
					if (page == '/home.html') {
						stopBack()
					}
				}
				if (this.status == 404) {
					navigation('/404.html')
				}
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
				var year = parseInt(this.getAttribute("year"))
				navigation('/' + year + '.html')
				console.log(years)
				console.log(year)

				years.splice(years.indexOf(year), 1)
				console.log(years)
			};
    }
  }
};
var years = [1988, 1991, 1995, 1997, 2001, 2003, 2004, 2006, 2007, 2009, 2012]

function nextLvl() {
	var rundomnumber = Math.floor(Math.random() * years.length);
	if (years.length == 0) {
		navigation('/finish.html')
		years = [1988, 1991, 1995, 1997, 2001, 2003, 2004, 2006, 2007, 2009, 2012]

	} else {
		navigation('/' + years[rundomnumber] + '.html')
		years.splice(rundomnumber, 1);
	}
}

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

// $(document).ready(function(){
function list() {
  var z, i, elmnt, year, xhttp;

  z = document.getElementsByTagName("a");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i]
    year = elmnt.getAttribute("year")
    if (year) {
			var text = document.createTextNode(year);
			elmnt.appendChild(text);
			elmnt.onclick = function(){
				navigation('./' + this.getAttribute("year") + '.html')
			};
    }
  }
};
// list()
// });

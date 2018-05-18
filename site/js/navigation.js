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
				years.splice(years.indexOf(year), 1)
			};
    }
  }
};

var years = [1988, 1991, 1995, 1997, 2003, 2006, 2007, 2009, 2012]

function nextLvl() {
	var rundomnumber = Math.floor(Math.random() * years.length);
	if (years.length == 0) {
		navigation('/finish.html')
		years = [1988, 1991, 1995, 1997, 2003, 2006, 2007, 2009, 2012]
	} else {
		navigation('/' + years[rundomnumber] + '.html')
		years.splice(rundomnumber, 1);
	}
}

function addInfo() {
	var songNameContainer = document.getElementById("song-name"),
	albumImageContainer = document.getElementById("album-image"),
	all = document.getElementsByTagName("div"),
	container, i, songName, albumImage;

  for (i = 0; i < all.length; i++) {
    container = all[i]
    songName = container.getAttribute("song-name")
		albumImage = container.getAttribute("album-image")

    if (songName) songNameContainer.innerHTML = songName;
		if (albumImage) albumImageContainer.src = albumImage;
  }
}

function showInfo() {
		var infoContainer = document.getElementById("information-container"),
		mainContainer = document.getElementById("my_container"),
		groupContainer = document.getElementById("group"),
		yearContainer = document.getElementById("year"),
		songContainer = document.getElementById("song"),
		imageContainer = document.getElementById("song"),
		descriptionContainer = document.getElementById("description"),
		linkContainer = document.getElementById("link"),
		header = document.getElementById("header"),
		allElem = document.getElementsByTagName("div"),
		con, i, group, song, description, link, year;

		infoContainer.setAttribute("style", "opacity: 1; z-index: 2;")
		mainContainer.setAttribute("style", "z-index: 1;")
		header.setAttribute("style", "z-index: 1;")
		for (i = 0; i < allElem.length; i++) {
			con = allElem[i]
			group = con.getAttribute("group")
			year = con.getAttribute("year")
			song = con.getAttribute("song")
			description = con.getAttribute("description")
			link = con.getAttribute("link")

			if (year) yearContainer.innerHTML = year;
			if (group) groupContainer.innerHTML = group;
			if (song) songContainer.innerHTML = song;
			if (description) descriptionContainer.innerHTML = description;
			if (link) linkContainer.href = link;
			if (image) imageContainer.src = "/img/" + year + "-album.jpg";

		}

}

function hideInfo() {
		var infoContainer = document.getElementById("information-container")
		var mainContainer = document.getElementById("my_container")
		infoContainer.setAttribute("style", "opacity: 0; z-index: 1;")
		mainContainer.setAttribute("style", "z-index: 2;")
		header.setAttribute("style", "z-index: 3;")
}

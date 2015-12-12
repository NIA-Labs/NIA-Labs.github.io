function refresh() {
	document.body.style.backgroundImage = "url('http://www.reactiongifs.com/wp-content/uploads/2013/08/lol-duck.gif')";

	var desc = "<b>Nice try. It isn't thaaat easy. :-)</b>";
	document.getElementById("desc").innerHTML = desc;

	var lol = "&copy; <a href='/assets/tada.txt'>No Internet Access</a>"
	elem = document.getElementById("footer");
	elem.innerHTML = lol;
}
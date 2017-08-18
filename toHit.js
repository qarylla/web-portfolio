function hideResult(){
	var divobj = document.getElementById('result');
	divobj.style.display='none';
}

function percentageHit() {
	var aForm = document.forms["toHit"];
	var mod = parseInt(toHit.elements["mod"].value);
	var target = parseInt(toHit.elements["target"].value);
	if (target != "" || target != 0) {
		var perHit = (100 - (target - mod)/ 20 * 100).toFixed(2);
		var res = document.getElementById('result');
		res.innerHTML = "Percentage Hit: " + perHit + "%";
		res.style.display='block';
	}
}
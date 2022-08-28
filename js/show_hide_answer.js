var showQuestions = function(totalNumber, name) {
	var prefix = name + String(i) + "_";
	for (var i = 1; i < totalNumber+1; i++) {
		var prefix = name + String(i) + "_";
		var targetId = prefix + "q";
		document.getElementById(targetId).classList.remove('closed');
		document.getElementById(targetId).classList.add('open');
		targetId = prefix + "a";
		document.getElementById(targetId).classList.remove('open');
		document.getElementById(targetId).classList.add('closed');
		targetId = prefix + "d";
		if (document.getElementById(targetId).classList.contains("closed")) {
            document.getElementById(targetId).classList.remove('closed');
            document.getElementById(targetId).classList.add('open');
        }
		targetId = prefix + "u";
		document.getElementById(targetId).classList.remove('open');
		document.getElementById(targetId).classList.add('closed');
		targetId = prefix + "block";
		document.getElementById(targetId).classList.remove('closed');
		document.getElementById(targetId).classList.add('show');
	}
	console.log(name)
	if(name=='attack_'){
		document.getElementById("exercise_video").className = "video_player closed";
		document.getElementById("diet_video").className = "video_player closed";
		document.getElementById("smoking_video").className = "video_player closed";
		document.getElementById("exercise").pause();
		document.getElementById("diet").pause();
		document.getElementById("smoking").pause();
		var icons = ["exercise_icon","diet_icon","smoking_icon"]
		var selected_icons = ["exercise_selected_icon","diet_selected_icon","smoking_selected_icon"]
		for (var i=0;i<icons.length; i++){
			var id = icons[i];
			var sel = selected_icons[i];
			document.getElementById(id).style = "display:inline-block;"
			document.getElementById(sel).style = "display:none;"
		}
	}
	if(name=='severe_'){
		document.getElementById("aspirin_video").className = "video_player closed";
		document.getElementById("statin_video").className = "video_player closed";
		document.getElementById("aspirin").pause();
		document.getElementById("statin").pause();
		var severe_icons = ["aspirin_icon","statin_icon"]
		var severe_selected_icons = ["aspirin_selected_icon","statin_selected_icon"]
		for (var i=0;i<severe_icons.length; i++){
			var id = severe_icons[i];
			var sel = severe_selected_icons[i];
			document.getElementById(id).style = "display:inline-block;"
			document.getElementById(sel).style = "display:none;"
		}
	}
}


var showAnswer = function(currentIndex, totalNumber, name) {
	for (var i = 1; i < totalNumber+1; i++) {
		var prefix = name + String(i) + "_";
		// var targetId = prefix + "q";
		// console.log(targetId)
		// document.getElementById(targetId).classList.remove('open');
		// document.getElementById(targetId).classList.add('closed');
		targetId = prefix + "a";
		document.getElementById(targetId).classList.remove('open');
		document.getElementById(targetId).classList.add('closed');
		targetId = prefix + "d";
		if (document.getElementById(targetId).classList.contains("closed")) {
            document.getElementById(targetId).classList.remove('closed');
            document.getElementById(targetId).classList.add('open');
        }
//		document.getElementById(targetId).classList.remove('open');
//		document.getElementById(targetId).classList.add('closed');
		targetId = prefix + "u";
		document.getElementById(targetId).classList.remove('open');
		document.getElementById(targetId).classList.add('closed');
		// targetId = prefix + "block";
		// console.log(targetId)
		// document.getElementById(targetId).classList.remove('open');
		// document.getElementById(targetId).classList.add('closed');
	}
	var prefix = name + String(currentIndex) + "_";
	var targetId = prefix + "q";
	document.getElementById(targetId).classList.remove('closed');
	document.getElementById(targetId).classList.add('open');
	targetId = prefix + "d";
	document.getElementById(targetId).classList.remove('open');
	document.getElementById(targetId).classList.add('closed');
	targetId = prefix + "a";
	document.getElementById(targetId).classList.remove('closed');
	document.getElementById(targetId).classList.add('open');
	targetId = prefix + "u";
	document.getElementById(targetId).classList.remove('closed');
	document.getElementById(targetId).classList.add('open');
	targetId = prefix + "block";
	document.getElementById(targetId).classList.remove('closed');
	document.getElementById(targetId).classList.add('open');
}

var showNormalQuestions = function(totalNumber) {
	var name = "normal_";
	showQuestions(totalNumber, name);
}

var showNormalAnswer = function(currentIndex, totalNumber) {
	var name = "normal_";
	showAnswer(currentIndex, totalNumber, name);
}

var showElectricityQuestions = function(totalNumber) {
	var name = "electricity_";
	showQuestions(totalNumber, name);
}

var showElectricityAnswer = function(currentIndex, totalNumber) {
	var name = "electricity_";
	showAnswer(currentIndex, totalNumber, name);
}

var showArrhythmiaQuestions = function(totalNumber) {
	var name = "arrhythmia_";
	showQuestions(totalNumber, name);
}

var showArrhythmiaAnswer = function(currentIndex, totalNumber) {
	var name = "arrhythmia_";
	showAnswer(currentIndex, totalNumber, name);
}

var showAttackQuestions = function(totalNumber) {
	var name = "attack_";
	showQuestions(totalNumber, name);
}

var showAttackAnswer = function(currentIndex, totalNumber) {
	var name = "attack_";
	showAnswer(currentIndex, totalNumber, name);
}

var showModerateQuestions = function(totalNumber) {
	var name = "moderate_";
	showQuestions(totalNumber, name);
}

var showModerateAnswer = function(currentIndex, totalNumber) {
	var name = "moderate_";
	showAnswer(currentIndex, totalNumber, name);
}

var showSevereQuestions = function(totalNumber) {
	var name = "severe_";
	showQuestions(totalNumber, name);
}

var showSevereAnswer = function(currentIndex, totalNumber) {
	var name = "severe_";
	showAnswer(currentIndex, totalNumber, name);
}

var showFailureQuestions = function(totalNumber) {
	var name = "failure_";
	showQuestions(totalNumber, name);
}

var showFailureAnswer = function(currentIndex, totalNumber) {
	var name = "failure_";
	showAnswer(currentIndex, totalNumber, name);
}

var showCompensatedQuestions = function(totalNumber) {
	var name = "compensated_";
	showQuestions(totalNumber, name);
}

var showCompensatedAnswer = function(currentIndex, totalNumber) {
	var name = "compensated_";
	showAnswer(currentIndex, totalNumber, name);
}

var showDecompensatedQuestions = function(totalNumber) {
	var name = "decompensated_";
	showQuestions(totalNumber, name);
}

var showDecompensatedAnswer = function(currentIndex, totalNumber) {
	var name = "decompensated_";
	showAnswer(currentIndex, totalNumber, name);
}

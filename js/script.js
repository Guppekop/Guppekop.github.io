var nose = document.getElementById('noseHonk');
var doorButtonLeft = document.getElementById('doorButtonLeft');
var doorButtonRight = document.getElementById('doorButtonRight');
var lightButtonLeft = document.getElementById('lightButtonLeft');
var lightButtonRight = document.getElementById('lightButtonRight');
var main = document.getElementById('main');
var leftDoor = document.getElementById("leftDoor");
var rightDoor = document.getElementById("rightDoor");
var buttonLeft = document.getElementById("buttonLeft");
var buttonRight = document.getElementById("buttonRight");
var leftDoorClosed = false;
var leftLightOn = false;
var rightDoorClosed = false;
var rightLightOn = false;

var allDoorImages = [88,89,91,92,93,94,95,96,97,98,99,100,101,102];


function doNoseHonk(){
	var audio = new Audio('./audio/nose_honk.mp3');
	audio.play();
}

nose.addEventListener("click", doNoseHonk);
doorButtonLeft.addEventListener("click", function(){interactWithLeftDoor(allDoorImages)});
doorButtonRight.addEventListener("click", function(){interactWithRightDoor(allDoorImages)});
lightButtonLeft.addEventListener("click", interactWithLeftLight);
lightButtonRight.addEventListener("click", interactWithRightLight);


function interactWithLeftDoor(doorImages){
	var doorImages = [...doorImages];
	if(leftDoorClosed){
		doorImages.reverse();
	}

	leftDoorClosed = !leftDoorClosed;

	doorImages.forEach((doorImage, index) => {
		setTimeout(() => {
	        leftDoor.style.backgroundImage = `url('images/fnaf/${doorImage}.png')`;
	    }, index * 50);
	})
	var audio = new Audio('./audio/door_sound.mp3');
	audio.play();
	changeLeftButtonInterface();
}

function interactWithLeftLight(){
	if(!rightLightOn){
		leftLightOn = !leftLightOn;
	}
	changeLeftButtonInterface();
	changeBackgroundLight()
}

function interactWithRightLight(){
	if(!leftLightOn){
		rightLightOn = !rightLightOn;
	}
	changeRightButtonInterface();
	changeBackgroundLight();
}

function interactWithRightDoor(doorImages){
	var doorImages = [...doorImages];
	if(rightDoorClosed){
		doorImages.reverse();
	}

	rightDoorClosed = !rightDoorClosed;

	doorImages.forEach((doorImage, index) => {
		setTimeout(() => {
	        rightDoor.style.backgroundImage = `url('images/fnaf/${doorImage}.png')`;
	    }, index * 50);
	})
	var audio = new Audio('./audio/door_sound.mp3');
	audio.play();
	changeRightButtonInterface();
}

function changeLeftButtonInterface(){
	if(leftDoorClosed && !leftLightOn){
		buttonLeft.style.backgroundImage = `url('images/fnaf/124.png')`;
	}
	else if(!leftDoorClosed && leftLightOn){
		buttonLeft.style.backgroundImage = `url('images/fnaf/125.png')`;
	}
	else if(leftDoorClosed && leftLightOn){
		buttonLeft.style.backgroundImage = `url('images/fnaf/130.png')`;
	}
	else{
		buttonLeft.style.backgroundImage = `url('images/fnaf/122.png')`;
	}
}

function changeRightButtonInterface(){
	if(rightDoorClosed && !rightLightOn){
		buttonRight.style.backgroundImage = `url('images/fnaf/135.png')`;
	}
	else if(!rightDoorClosed && rightLightOn){
		buttonRight.style.backgroundImage = `url('images/fnaf/131.png')`;
	}
	else if(rightDoorClosed && rightLightOn){
		buttonRight.style.backgroundImage = `url('images/fnaf/47.png')`;
	}
	else{
		buttonRight.style.backgroundImage = `url('images/fnaf/134.png')`;
	}
}

function changeBackgroundLight(){
	if(!leftLightOn && rightLightOn){
		main.style.backgroundImage = `url('images/fnaf/127.png')`;
	}
	else if(leftLightOn && !rightLightOn){
		main.style.backgroundImage = `url('images/fnaf/58.png')`;
	}
	else{
		main.style.backgroundImage = `url('images/fnaf/126.png')`;
	}

}
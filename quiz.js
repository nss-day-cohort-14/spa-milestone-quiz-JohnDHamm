var textInputEl = document.getElementById("editInput");
var submitBtn = document.getElementById("submitBtn");



function populatePage (inventory) {
	// console.log("inventory", inventory);
  // Loop over the inventory and populate the page
  // Loop over your array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of container.
  // Make sure you display all properties of the car in the DOM. Basic styling is up to you.
  var carRow = document.getElementById("carRow");
  var outputEl = document.getElementById("carContainer");
  var carTotal = inventory.length;

  columnCounter = 1; //counter for liniting 3 columns per row

  // for (i = 0; i < carTotal; i++){
	  // if (columnCounter < 4) {
	  	inventory.forEach(function (car, indexNum){
	  		var carYear = car.year;
	  		var carMake = car.make;
	  		var carModel = car.model;
	  		var carColor = car.color;
	  		var carPrice = car.price;
	  		var carDescript = car.description;

	  		// create a div with an ID
	  		var newCarCard = document.createElement("div");
	  		var newCarCardID = document.createAttribute("id");
	  		newCarCardID.value = `vehicle--${indexNum}`;
	  		newCarCard.setAttributeNode(newCarCardID);
	  		newCarCard.classList.add("carCard");
	  		newCarCard.style.border = `3px solid ${carColor}`;

	  		//add div with year, make model for top of card
	  		var newCarTitleDiv = document.createElement("div");
	  		newCarTitleDiv.innerHTML = `<span>${carYear}</span><span>${carMake}</span><span>${carModel}</span>`;
	  		newCarTitleDiv.classList.add("carCardTitle");

	  		newCarCard.appendChild(newCarTitleDiv);

	  		//add color, price and description as separate p's
	  		var newCarColorEl = document.createElement("p");
	  		newCarColorEl.innerHTML = carColor;
	  		newCarColorEl.classList.add("carColor");
	  		newCarCard.appendChild(newCarColorEl);
	  		var newCarPriceEl = document.createElement("p");
	  		newCarPriceEl.innerHTML = `$${carPrice}`;
	  		newCarPriceEl.classList.add("carPrice");
	  		newCarCard.appendChild(newCarPriceEl);

	  		var newCarDescriptEl = document.createElement("p");
	  		newCarDescriptEl.innerHTML = carDescript;
	  		newCarDescriptEl.classList.add("carDescript");
	  		var descriptionID = document.createAttribute("id");
	  		descriptionID.value = `description--${indexNum}`;
	  		newCarDescriptEl.setAttributeNode(descriptionID);
	  		newCarCard.appendChild(newCarDescriptEl);

	  		newCarCard.classList.add("col-sm-4");
	  		newCarCard.classList.add("col-xs-12");

	  		carRow.appendChild(newCarCard);

	  		// columnCounter += 1;
	  	});

	  // } else {

	  	// create new row div
	  	// counter = 1; //reset counter for next row
	  // };


  	
  // }




  // Now that the DOM is loaded, establish all the event listeners needed

  CarLot.activateEvents();
}




function editCard (event) {
	var selectedEl = event.currentTarget;
	selectedEl.classList.toggle("selectedBorder");
	var cardSelectedNum = event.currentTarget.id.split("--")[1];
	console.log("you clicked on card #", cardSelectedNum);

	CarLot.getSelectedCarColor(cardSelectedNum);

	textInputEl.focus();
	textInputEl.value = "";

	liveUpdate(cardSelectedNum);
}



// function changeDescription () (carIDnum) {

// }



function liveUpdate(cardnum) {
	var selectedDescription = document.getElementById(`description--${cardnum}`);
	console.log("selectedDescription", selectedDescription);

	textInputEl.addEventListener('keyup', function(){
			selectedDescription.innerHTML = textInputEl.value;
	});

	// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
	// textInputEl.addEventListener('keypress', function (e) {
 //    var key = e.keyCode;
 //    if (key === 13) { // 13 is enter
 //    		selectedDescription.classList.toggle("selectedBorder");
 //    		selectedDescription = null;
 //    		textInput.value = "";
 //    };
	// });
}





CarLot.loadInventory(populatePage);  //Load the inventory and send a callback function to beinvoked after the process is complete
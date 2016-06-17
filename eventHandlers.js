// The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application. Name the function activateEvents.

var CarLot = (function (carlot) {

  carlot.activateEvents = function(){
  	var cars = CarLot.getInventory();

  	for (i = 0; i < cars.length; i++){
	  	var carCard = document.getElementById(`vehicle--${i}`);
	  	console.log("carCard", carCard);
	  	carCard.addEventListener("click", editCard);
  	};

  	submitBtn.addEventListener("click", submitChange);

  	textInputEl.addEventListener('keyup', liveUpdate);

    // if enter key, treat same as submit button
    textInputEl.addEventListener('keypress', function (e) {
      var key = e.keyCode;
      if (key === 13) { // 13 is enter
        submitChange();
      };
    });    
  };

  return carlot;

})(CarLot || {});
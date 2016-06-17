// The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
// A car DOM element that was clicked on.
// A color name.

var CarLot = (function (carlot) {

  //reset all cards borders and backgrounds
  carlot.resetCardStyle = function(carNum){
    var cars = CarLot.getInventory();
  	for (i = 0; i < cars.length; i++){
  		var carCard = document.getElementById(`vehicle--${i}`);
  		carCard.style.border = `3px solid ${cars[i].color}`;
			carCard.style.background = "white";
  	};
  };

  // change border and background of selected element
  carlot.changeSelectedCarStyle = function (carCard, color) {
  	CarLot.resetCardStyle(); //to keep from selecting more than one card at a time
		carCard.style.border = `6px solid ${color}`;
		carCard.style.background = "wheat";
  };

  return carlot;

})(CarLot || {});

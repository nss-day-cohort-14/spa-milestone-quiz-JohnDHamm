// The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
// A car DOM element that was clicked on.
// A color name.


var CarLot = (function (carlot) {

  carlot.resetCardStyle = function(carNum){
  	var cars = CarLot.getInventory();

  	for (i = 0; i < cars.length; i++){
  		var carCard = document.getElementById(`vehicle--${i}`);
  		carCard[i].style.border = `3px solid ${car[i].carColor}`;
			carCard[i].style.background = "white";
  	};
  };

  carlot.changeSelectCarStyle = function (carCard, color) {
		carCard.style.border = `6px solid ${color}`;
		carCard.style.background = "wheat";
  };

  return carlot;

})(CarLot || {});

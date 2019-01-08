window.onload = function() {
	start();
}

var ticketsBooked = 0;
var activeSlot = 1;
var priceTotal = 0;

function start(){
	geolocationFind();
	var basketButton = document.getElementById('basketView');
	basketButton.addEventListener("click", displayBasket);
	var closeBasketButton = document.getElementById('basketClose');
	closeBasketButton.addEventListener("click", closeBasket);
	
	var londonBookButton = document.getElementById('londonBook');
	var manchesterBookButton = document.getElementById('manchesterBook');
	var newyorkBookButton = document.getElementById('newyorkBook');
	var washingtonBookButton = document.getElementById('washingtonBook');
	var chicagoBookButton = document.getElementById('chicagoBook');
	
	londonBookButton.addEventListener("click", londonBooked);
	manchesterBookButton.addEventListener("click", manchesterBooked);
	newyorkBookButton.addEventListener("click", newyorkBooked);
	washingtonBookButton.addEventListener("click", washingtonBooked);
	chicagoBookButton.addEventListener("click", chicagoBooked);
	
	var basketSlotTwo = document.getElementById('basketSlotTwo');
	var basketSlotThree = document.getElementById('basketSlotThree');
	var basketSlotFour = document.getElementById('basketSlotFour');
	var basketSlotFive = document.getElementById('basketSlotFive');
	
	var totalBox = document.getElementById('totalBox');
	
	var clearBasket = document.getElementById('clearBasket');
	clearBasket.addEventListener("click", emptyBasket);
	
	
	
	var purchaseTicketsButton = document.getElementById('purchaseTickets');
	purchaseTicketsButton.addEventListener("click", purchaseTickets);
	
	function updateBasket(){
		console.log('basket updated');
		totalBox.innerHTML = ("Basket Total: £") + priceTotal;
		var basketSlotOne = document.getElementById('basketSlotOne');
		var warningBox = document.getElementById('warningBox');
		if(ticketsBooked > 4)
		{
			warningBox.innerHTML = "You cannot book more than 5 tickets"
			ticketsBooked--;
		}
	}

	function increaseTicketsBooked(){
		ticketsBooked++;
		console.log(ticketsBooked);
	}

	function displayBasket(){
		var basket = document.getElementById('basket');
		basket.style.display = "inline";
		console.log('displaying the basket');
	}
	
	function closeBasket(){
		var basket = document.getElementById('basket');
		basket.style.display = "none";
		console.log('closing the basket');
	}
	function londonBooked(){
		updateBasket();
		increaseTicketsBooked();
		console.log('london ticket added to basket');
		if(activeSlot == 1)
		{
			basketSlotOne.innerHTML = "<br>London: £80";
			activeSlot++;
			priceTotal = priceTotal + 80;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 2)
		{
			basketSlotTwo.innerHTML = "<br>London: £80";
			activeSlot++;
			priceTotal = priceTotal + 80;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 3)
		{
			basketSlotThree.innerHTML="<br>London: £80";
			activeSlot++;
			priceTotal = priceTotal + 80;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 4)
		{
			basketSlotFour.innerHTML="<br>London: £80";
			activeSlot++;
			priceTotal = priceTotal + 80;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 5)
		{
			basketSlotFive.innerHTML="<br>London: £80";
			activeSlot++;
			priceTotal = priceTotal + 80;
			console.log(priceTotal);
			updateBasket();
		}
		else
		{
			console.log('slot out of range');
		}
	}
	function manchesterBooked(){
		updateBasket();
		increaseTicketsBooked();
		console.log('manchester ticket added to basket');
		if(activeSlot == 1)
		{
			basketSlotOne.innerHTML = "<br>Manchester: £70";
			activeSlot++;
			priceTotal = priceTotal + 70;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 2)
		{
			basketSlotTwo.innerHTML = "<br>Manchester: £70";
			activeSlot++;
			priceTotal = priceTotal + 70;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 3)
		{
			basketSlotThree.innerHTML="<br>Manchester: £70";
			activeSlot++;
			priceTotal = priceTotal + 70;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 4)
		{
			basketSlotFour.innerHTML="<br>Manchester: £70";
			activeSlot++;
			priceTotal = priceTotal + 70;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 5)
		{
			basketSlotFive.innerHTML="<br>Manchester: £70";
			activeSlot++;
			priceTotal = priceTotal + 70;
			console.log(priceTotal);
			updateBasket();
		}
		else
		{
			console.log('slot out of range');
		}
	}
	function newyorkBooked(){
		updateBasket();
		increaseTicketsBooked();
		console.log('new-york ticket added to basket');
		if(activeSlot == 1)
		{
			basketSlotOne.innerHTML = "<br>New-York: £90";
			activeSlot++;
			priceTotal = priceTotal + 90;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 2)
		{
			basketSlotTwo.innerHTML = "<br>New-York: £90";
			activeSlot++;
			priceTotal = priceTotal + 90;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 3)
		{
			basketSlotThree.innerHTML="<br>New-York: £90";
			activeSlot++;
			priceTotal = priceTotal + 90;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 4)
		{
			basketSlotFour.innerHTML="<br>New-York: £90";
			activeSlot++;
			priceTotal = priceTotal + 90;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 5)
		{
			basketSlotFive.innerHTML="<br>New-York: £90";
			activeSlot++;
			priceTotal = priceTotal + 90;
			console.log(priceTotal);
			updateBasket();
		}
		else
		{
			console.log('slot out of range');
		}
	}
	function washingtonBooked(){
		updateBasket();
		increaseTicketsBooked();
		console.log('washington ticket added to basket');
		if(activeSlot == 1)
		{
			basketSlotOne.innerHTML = "<br>Washington: £70";
			activeSlot++;
			priceTotal = priceTotal + 70;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 2)
		{
			basketSlotTwo.innerHTML = "<br>Washington: £70";
			activeSlot++;
			priceTotal = priceTotal + 70;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 3)
		{
			basketSlotThree.innerHTML="<br>Washington: £70";
			activeSlot++;
			priceTotal = priceTotal + 70;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 4)
		{
			basketSlotFour.innerHTML="<br>Washington: £70";
			activeSlot++;
			priceTotal = priceTotal + 70;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 5)
		{
			basketSlotFive.innerHTML="<br>Washington: £70";
			activeSlot++;
			priceTotal = priceTotal + 70;
			console.log(priceTotal);
			updateBasket();
		}
		else
		{
			console.log('slot out of range');
		}
	}
	function chicagoBooked(){
		updateBasket();
		increaseTicketsBooked();
		console.log('chicago ticket added to basket');
		if(activeSlot == 1)
		{
			basketSlotOne.innerHTML = "<br>Chicago: £60";
			activeSlot++;
			priceTotal = priceTotal + 60;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 2)
		{
			basketSlotTwo.innerHTML = "<br>Chicago: £60";
			activeSlot++;
			priceTotal = priceTotal + 60;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 3)
		{
			basketSlotThree.innerHTML="<br>Chicago: £60";
			activeSlot++;
			priceTotal = priceTotal + 60;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 4)
		{
			basketSlotFour.innerHTML="<br>Chicago: £60";
			activeSlot++;
			priceTotal = priceTotal + 60;
			console.log(priceTotal);
			updateBasket();
		}
		else if(activeSlot == 5)
		{
			basketSlotFive.innerHTML="<br>Chicago: £60";
			activeSlot++;
			priceTotal = priceTotal + 60;
			console.log(priceTotal);
			updateBasket();
		}
		else
		{
			console.log('slot out of range');
		}
	}
	
	function clearBasket(){
		
		
	}
	
	function emptyBasket(){
		console.log('emptying basket');
		basketSlotOne.innerHTML = "";
		basketSlotTwo.innerHTML = "";
		basketSlotThree.innerHTML = "";
		basketSlotFour.innerHTML = "";
		basketSlotFive.innerHTML = "";
		priceTotal = 0;
		updateBasket();
		warningBox.innerHTML = "";
		activeSlot = 1;
		ticketsBooked = 0;
	}
	
	function purchaseTickets(){
		if(priceTotal == 0)
		{
			alert("Your basket is empty");
		}
		else{
			alert("Tickets purchased. Total cost: £" + priceTotal);
		}
		
	}
	
	function geolocationFind(){
		navigator.geolocation.getCurrentPosition(findClosestVenue);
	}
	
	function findClosestVenue(position){
		var userLat = (position.coords.latitude);
		var userLon = (position.coords.longitude);
		var londonLat = 51.507;
		var londonLon = 0.1278;
		
		var manchesterLat = 53.480;
		var manchesterLon = 2.2426;
		
		var newyorkLat = 40.712;
		var newyorkLon = 74.006;
		
		var washingtonLat = 47.751;
		var washingtonLon = 120.74;
		
		var chicagoLat = 41.878;
		var chicagoLon = 87.629;
	

		var userDistanceToLondon = Math.sqrt(Math.pow((userLat - londonLat),2)+(Math.pow(userLon-londonLon),2));
		var userDistanceToManchester = Math.sqrt(Math.pow((userLat - manchesterLat),2)+(Math.pow(userLon-manchesterLon),2));
		var userDistanceToNewyork = Math.sqrt(Math.pow((userLat - newyorkLat),2)+(Math.pow(userLon-newyorkLon),2));
		var userDistanceToWashington = Math.sqrt(Math.pow((userLat - washingtonLat),2)+(Math.pow(userLon-washingtonLon),2));
		var userDistanceToChicago = Math.sqrt(Math.pow((userLat - chicagoLat),2)+(Math.pow(userLon-chicagoLon),2));
		
		console.log("Distance to London: " + userDistanceToLondon);
		console.log("Distance to Manchester: " + userDistanceToManchester);
		console.log("Distance to New-York: " + userDistanceToNewyork);
		console.log("Distance to Washington: " + userDistanceToWashington);
		console.log("Distance to Chicago: " + userDistanceToChicago);
		
		var closestVenue = Math.min(userDistanceToLondon, userDistanceToManchester, userDistanceToNewyork, userDistanceToWashington, userDistanceToChicago);
		var closestVenueName = "";
		
		if(userDistanceToLondon == closestVenue)
		{
			closestVenueName = "London";
		}
		else if(userDistanceToManchester == closestVenue)
		{
			closestVenueName = "Manchester";
		}
		else if(userDistanceToNewyork == closestVenue)
		{
			closestVenueName = "New-York";
		}
		else if(userDistanceToWashington == closestVenue)
		{
			closestVenueName = "Washington";
		}
		else if(userDistanceToChicago == closestVenue)
		{
			closestVenueName = "Chicago";
		}
		else
		{
			closestVenueName = "Please enable location services";
		}
		console.log(closestVenueName);
		document.getElementById('nearestVenue').innerHTML = "Based on your current location, your nearest venue is in " + closestVenueName;
	}
}







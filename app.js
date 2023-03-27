// Get UI
var getcurmonth = document.getElementById('curmonth');
var getcuryear = document.getElementById('curyear');
var getcaldays = document.getElementById('caldays');
var getuimonth = document.getElementById('months');
var getuiyears = document.getElementById('years');

var getyearbtn = document.querySelector('.year-btn');


var months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];
var startyear = 2020;
var endyear = 2030;

var month,year;

window.addEventListener('load',function(){
	// console.log('hay i am working');

	var getday = new Date();
	month = getday.getMonth();
	year = getday.getFullYear();

	// console.log(month);
	// console.log(year);

	getcurmonth.textContent = months[month];
	getcuryear.innerText = year;

	initmonths();
	inityears();
	initdays();

});

function initmonths(){
	// console.log('hay i am month');

	getuimonth.innerHTML = "";

	for(var x = 0 ; x < months.length ; x++){
		// console.log(x);

		// <div class="dropdown-item">Jan</div>

		var newdiv = document.createElement('div');
		newdiv.textContent = months[x];
		newdiv.classList.add('dropdown-item');

		// console.log(newdiv);

		// newdiv.addEventListener('click',function(){
			// console.log(this);
			// console.log(this.textContent);
			// getcurmonth.textContent = this.textContent;
			// initdays(); // it's not oki

			// console.log(x);
		// });

		newdiv.onclick = allindex(x);

		getuimonth.appendChild(newdiv);
	}
}

function allindex(idx){
	// console.log(idx);

	var selectmonth = idx;
	// console.log(selectmonth); // 0 to 11

	return function(){
		month = selectmonth;
		// console.log(month);
		getcurmonth.textContent = months[month];
		initdays();
	}
}








function inityears(){

	getuiyears.innerHTML = '';

	for(var x = startyear; x <= endyear ; x++){
		// console.log(x);

		// <div class="dropdown-item">2000</div>

		var newdiv = document.createElement('div');
		newdiv.innerText = x;
		newdiv.className = 'dropdown-item';

		// console.log(newdiv);

		newdiv.onclick = (function(){
			// console.log(x);
			var selectyear = x; // 2020 to 2030

			return function(){
				year = selectyear;
				// console.log(year);
				getcuryear.innerText = year;
				initdays();
			}

		})();

		getuiyears.appendChild(newdiv);

	}

}

function initdays(){


	getcaldays.innerHTML = '';

	var tmpdays = new Date(year,month,0);
	// console.log(tmpdays); //Tue Jan 31 2023 00:00:00 GMT+0630 (Myanmar Time)
	var getalldays = alldays(year,month);

	var getendday = tmpdays.getDay(); //2
	// console.log(getendday);

	for(var y = 0; y <= getendday; y++){
		// console.log(y);

		var newdiv = document.createElement('div');
		newdiv.className = "day blank";
		// console.log(newdiv);

		getcaldays.appendChild(newdiv);
	}




	for(var x = 0; x < getalldays ; x++){

		var addday = x+1;

		// <div id="" class="day">1</div>

		var newdiv = document.createElement('div');
		newdiv.textContent = addday;
		newdiv.classList.add('day');
		// console.log(newdiv);

		getcaldays.appendChild(newdiv);

	}	

}

function alldays(year,month){
	// console.log(year,month);

	var curalldays = new Date(year,month+1,0);  
	// console.log(curalldays);//Tue Jan 31 2023 00:00:00 GMT+0630 (Myanmar Time)
	curalldays = curalldays.getDate();
	// console.log(curalldays); //31

	return curalldays;
}

getyearbtn.addEventListener('click',function(){

	if(this.lastElementChild.classList.contains('show')){
		this.lastElementChild.classList.remove('show');
	}else{
		this.lastElementChild.classList.add('show');
	}

});


				// year month day
// console.log(new Date(2023,1,10)); //Fri Feb 10 2023 00:00:00 GMT+0630 (Myanmar Time)
// console.log(new Date(2023,1,0)); //Tue Jan 31 2023 00:00:00 GMT+0630 (Myanmar Time)
// console.log(new Date(2023,0,0)); //Sat Dec 31 2022 00:00:00 GMT+0630 (Myanmar Time)
// console.log(new Date(2023,5,0)); //Wed May 31 2023 00:00:00 GMT+0630 (Myanmar Time)
// console.log(new Date(2023,1,30)); // Thu Mar 02 2023 00:00:00 GMT+0630 (Myanmar Time)


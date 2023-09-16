
let bookinDetails="";

bookinDetails+=`<p class="BOOKING-DETAILS">BOOKING-DETAILS</p>
  <div class="elem-group-2">

    <p  class="details-1"></p>
    <p id="mail"> </label>
    <p id="phoneNumber"></p>
    <p id="js-adults"></p>
    <p id="js-children"><p>
    <p id="js-checkIn"></p>
    <p id="js-checkout"></p>
    <p id="js-roomType"></p>
    <p id="js-anything"></p>

  </div>`;
document.querySelector(".container-3").innerHTML=bookinDetails;

function nameValue(){
let Name= document.getElementById('name').value;
document.querySelector(".details-1").innerHTML=`NAME &#58 ${Name}`;
console.log( Name);

eMailCheck();


function eMailCheck(){
 let e_mail= document.getElementById('email').value;
 document.getElementById("mail").innerHTML=`E-MAIL &#58 ${e_mail}`;
 console.log(e_mail);

 
}
phoneNumber();

function phoneNumber(){
  let phoneNumber= document.getElementById('phone').value;
  document.getElementById("phoneNumber").innerHTML= `PHONE-NUMBER : ${phoneNumber}`;
  console.log( phoneNumber);
  howManyAdults();
}


 function howManyAdults(){
  let adultsNos= document.getElementById('adult').value;
  document.getElementById("js-adults").innerHTML=  `NO-OF-ADULTS:${adultsNos}`;
 console.log(adultsNos);

 }
 
 howManyChildren();
function howManyChildren(){
 let children= document.getElementById('child').value;
document.getElementById("js-children").innerHTML=  `NO-OF-CHILDRENS: ${children}`;
console.log(children);

}
checkInDate1();

function  checkInDate1() {
 let checkedInDate= document.getElementById("checkindate").value;
 let value2=document.getElementById("js-checkIn")
 value2.innerHTML= `CHECK-IN DATE : ${checkedInDate}`;
 console.log(checkedInDate);
 
}
checkOutDate1();

function checkOutDate1(){

let checkoutDate= document.getElementById('checkout-date').value;
document.getElementById("js-checkout").innerHTML=`CHECK-OUT DATE :${checkoutDate}`;
console.log(checkoutDate);
}


roomPer();
function roomPer(){
  let chooseRoom = document.getElementById('room-selection').value;
 document.getElementById('js-roomType').innerHTML = `ROOM-TYPE :${chooseRoom}`;
  console.log(chooseRoom);
} 
anyThing();

function anyThing(){

  let anythingElse= document.getElementById('message').value;
document.getElementById("js-anything").innerHTML=`ANYTHING ELSE &#58 ${anythingElse}`;
console.log(anythingElse);

};



}

















var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() );




var tomorrowDate= date + "-" + month + "-" + year;

var checkoutElem = document.querySelector("#checkout-date");
var checkinElem = document.querySelector("#checkin-date");

checkinElem.setAttribute("min",tomorrowDate);


checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}


let btn = document.querySelectorAll("#myBtn");

btn.forEach(setupClick);

function setupClick(btn){
    btn.addEventListener('click', btnClicked);
}

function btnClicked(e){
    console.log(e.target.nextSibling)
    let modal = e.target.nextSibling;
    modal.style.display = "block"
}

let closeBtns = document.querySelectorAll(".close");
closeBtns.forEach(setupClickClose);

function setupClickClose(btn){
    btn.addEventListener("click", closeModal);
}

function closeModal(e){
    e.target.parentElement.parentElement.style.display = "none";
}

//let span = document.getElementsByClassName('close')[0];
//let modal = document.getElementById('myModal');
//let btn = document.getElementById('myBtn');
//
//btn.onclick = function(){
//    modal.style.display = "block";
//}
//span.onclick = function(){
//    modal.style.display = "none";
//}
//window.onclick = function(event){
//    if(event.target == modal)
//        {
//            modal.style.display = "none";
//        }
//}
//
//// 1
//let modal1 = document.getElementById('myModal1');
//let btn1 = document.getElementById('myBtn1');
//let span1 = document.getElementsByClassName('close1')[0];
//
//btn1.onclick = function(){
//    modal1.style.display = "block";
//}
//span1.onclick = function(){
//    modal1.style.display = "none";
//}
//window.onclick = function(event){
//    if(event.target == modal1)
//        {
//            modal1.style.display = "none";
//        }
//}
//
//// 2
//let modal2 = document.getElementById('myModal2');
//let btn2 = document.getElementById('myBtn2');
//let span2 = document.getElementsByClassName('close2')[0];
//
//
//btn2.onclick = function(){
//    modal2.style.display = "block";
//}
//span2.onclick = function(){
//    modal2.style.display = "none";
//}
//window.onclick = function(event){
//    if(event.target == modal2)
//        {
//            modal2.style.display = "none";
//        }
//}
//
//// 3
//let modal3 = document.getElementById('myModal3');
//let btn3 = document.getElementById('myBtn3');
//let span3 = document.getElementsByClassName('close3')[0];
//
//btn3.onclick = function(){
//    modal3.style.display = "block";
//}
//span3.onclick = function(){
//    modal3.style.display = "none";
//}
//window.onclick = function(event){
//    if(event.target == modal3)
//        {
//            modal3.style.display = "none";
//        }
//}
//
//// 4
//let modal4 = document.getElementById('myModal4');
//let btn4 = document.getElementById('myBtn4');
//let span4 = document.getElementsByClassName('close4')[0];
//
//btn4.onclick = function(){
//    modal4.style.display = "block";
//}
//span4.onclick = function(){
//    modal4.style.display = "none";
//}
//window.onclick = function(event){
//    if(event.target == modal4)
//        {
//            modal4.style.display = "none";
//        }
//}
//
//// 5
//let modal5 = document.getElementById('myModal5');
//let btn5 = document.getElementById('myBtn5');
//let span5 = document.getElementsByClassName('close5')[0];
//
//btn5.onclick = function(){
//    modal5.style.display = "block";
//}
//span5.onclick = function(){
//    modal5.style.display = "none";
//}
//window.onclick = function(event){
//    if(event.target == modal5)
//        {
//            modal5.style.display = "none";
//        }
//}
//
//// 6
//let modal6 = document.getElementById('myModal6');
//let btn6 = document.getElementById('myBtn6');
//let span6 = document.getElementsByClassName('close6')[0];
//
//btn6.onclick = function(){
//    modal6.style.display = "block";
//}
//span6.onclick = function(){
//    modal6.style.display = "none";
//}
//window.onclick = function(event){
//    if(event.target == modal6)
//        {
//            modal6.style.display = "none";
//        }
//}
//
//// 8
//let modal8 = document.getElementById('myModal8');
//let btn8 = document.getElementById('myBtn8');
//let span8 = document.getElementsByClassName('close8')[0];
//
//btn8.onclick = function(){
//    modal2.style.display = "block";
//}
//span8.onclick = function(){
//    modal8.style.display = "none";
//}
//window.onclick = function(event){
//    if(event.target == modal8)
//        {
//            modal8.style.display = "none";
//        }
//}
//
//// 9
//let modal9 = document.getElementById('myModal9');
//let btn9 = document.getElementById('myBtn9');
//let span9 = document.getElementsByClassName('close9')[0];
//
//btn9.onclick = function(){
//    modal9.style.display = "block";
//}
//span9.onclick = function(){
//    modal9.style.display = "none";
//}
//window.onclick = function(event){
//    if(event.target == modal9)
//        {
//            modal9.style.display = "none";
//        }
//}
//
//// 10
//let modal10 = document.getElementById('myModal10');
//let btn10 = document.getElementById('myBtn10');
//let span10 = document.getElementsByClassName('close10')[0];
//
//btn10.onclick = function(){
//    modal10.style.display = "block";
//}
//span10.onclick = function(){
//    modal10.style.display = "none";
//}
//window.onclick = function(event){
//    if(event.target == modal10)
//        {
//            modal10.style.display = "none";
//        }
//}
//
//// 11
//let modal11 = document.getElementById('myModal11');
//let btn11 = document.getElementById('myBtn11');
//let span11 = document.getElementsByClassName('close11')[0];
//
//btn11.onclick = function(){
//    modal11.style.display = "block";
//}
//span11.onclick = function(){
//    modal11.style.display = "none";
//}
//window.onclick = function(event){
//    if(event.target == modal11)
//        {
//            modal11.style.display = "none";
//        }
//}
//
//// 12
//let modal12 = document.getElementById('myModal12');
//let btn12 = document.getElementById('myBtn12');
//let span12 = document.getElementsByClassName('close12')[0];
//
//btn12.onclick = function(){
//    modal12.style.display = "block";
//}
//span12.onclick = function(){
//    modal12.style.display = "none";
//}
//window.onclick = function(event){
//    if(event.target == modal12)
//        {
//            modal12.style.display = "none";
//        }
//}
//
//// 13
//let modal13 = document.getElementById('myModal13');
//let btn13 = document.getElementById('myBtn13');
//let span13 = document.getElementsByClassName('close13')[0];
//
//btn13.onclick = function(){
//    modal13.style.display = "block";
//}
//span13.onclick = function(){
//    modal13.style.display = "none";
//}
//window.onclick = function(event){
//    if(event.target == modal13)
//        {
//            modal13.style.display = "none";
//        }
//}
//
//// 14
//let modal14 = document.getElementById('myModal14');
//let btn14 = document.getElementById('myBtn14');
//let span14 = document.getElementsByClassName('close14')[0];
//
//btn14.onclick = function(){
//    modal14.style.display = "block";
//}
//span14.onclick = function(){
//    modal14.style.display = "none";
//}
//window.onclick = function(event){
//    if(event.target == modal14)
//        {
//            modal14.style.display = "none";
//        }
//}
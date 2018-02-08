/////////////////////////dynamic////////////////////////////////////////////////

let mealsContainer = document.querySelector('#meals');
const template = document.querySelector('#mealTemplate').content;
const nav = document.querySelector('nav ul');
const modal = document.querySelector('#modal');

const catLink = "http://kea-alt-del.dk/t5/api/categories"
const pListLink = "http://kea-alt-del.dk/t5/api/productlist";
const pLink = "http://kea-alt-del.dk/t5/api/product?id=";
const imglink = "http://kea-alt-del.dk/t5/site/imgs/";

fetch(catLink).then(result => result.json()).then(cats => createCategoryContainer(cats));

function createCategoryContainer(cats) {
    cats.unshift('menu');
    cats.forEach(cat => {
        // add category filter
        const a = document.createElement('a');
        a.textContent = cat;
        a.href = "#";
        a.addEventListener('click', () => filter(cat)) // name: filter - for filtring not only for categories
        // ()=> this is the same like : 
        //  function(){ filter(cat) }
        const li = document.createElement('li');
        li.appendChild(a);
        nav.appendChild(li);

        const section = document.createElement('section');
        const h2 = document.createElement('h2');
        section.id = cat;
        h2.textContent = cat;
        section.classList.add('hide');

        function filter(myFilter) {
            //console.log(myFilter); // == category
            document.querySelectorAll('main section').forEach(section => {
                if (section.id && myFilter === 'menu') {
                    section.classList.remove('hide');
                } else if (section.id == myFilter) {
                    section.classList.remove('hide');
                } else {
                    section.classList.add('hide');
                }
            })
        }

        section.appendChild(h2);
        mealsContainer.appendChild(section);

    });
    fetch(pListLink).then(result => result.json()).then(data => showProduct(data));

}

function showProduct(data) {
    data.forEach(elem => {
        //console.log(elem);  // every element has an id
        const section = document.querySelector('#' + elem.category);
        //console.log(elem.name);
        //console.log(elem.category);
        const clone = template.cloneNode(true);
        // add vegetarian filter
        //        aVege = document.createElement('a');
        //        aVege.href= "#";
        //        aVege.textContent = 'vegetarian';
        //        aVege.addEventListener('click', ()=> showVege(elem.vegetarian));
        //        clone.querySelector('.meal').classList.add('hide');
        //        
        //        function showVege(myFilter){
        //            if(myFilter){
        //                clone.querySelector('.meal').classList.remove('hide')
        //            }else{
        //                clone.querySelector('.meal').classList.add('hide');
        //            }
        //            
        //        }
        //         aVege.appendChild(nav);

        if (elem.soldout === true) {
            const newImage = document.createElement('img');
            newImage.setAttribute('src', 'imgs/sold-2.png');
            clone.querySelector('.meal').appendChild(newImage);
        } else {
            clone.querySelector('.meal').style.opacity = "1";
        }
        clone.querySelector('img').src = imglink + "small/" + elem.image + "-sm.jpg";
        //console.log(elem.discount);
        if (elem.discount === 0) {
            clone.querySelector('.discount').style.visibility = "hidden";
        } else {
            clone.querySelector('.discount').textContent = elem.discount + "% off";
        }
        clone.querySelector('.name').textContent = elem.name;
        if (elem.vegetarian === true) {
            clone.querySelector('.name').innerHTML += '<a class="vege">&#9679;</a>'
        } else {
            clone.querySelector('.name').innerHTML += " ";
        }
        if (elem.alcohol) // elem.alcohol > 0
        {
            clone.querySelector('.alco').textContent = "with alcohol";
        } else {
            clone.querySelector('.alco').style.display = "none";
        }
        clone.querySelector('.price span').textContent = elem.price;
        if (elem.discount) {
            //console.log(elem.name + " has a discount");
            const newPrice = Math.ceil(elem.price - elem.price * elem.discount / 100);
            clone.querySelector('h3').classList.add('old-price'); // only this class will go to the first h3
            clone.querySelector('h3').classList.remove('price');
            clone.querySelector(".discount-price.hide").classList.remove('hide');
            clone.querySelector(".discount-price span").textContent = newPrice;
        }
        clone.querySelector('.short-description').textContent = elem.shortdescription;
        clone.querySelector('button').addEventListener('click', () => {
            fetch(pLink + elem.id).then(result => result.json()).then(product => showMore(product));
        });
        section.appendChild(clone);
    })
}

modal.addEventListener('click', () => modal.classList.add('hide'));

function showMore(product) {
    console.log(product);
    //modal content
    modal.classList.remove('hide');
    modal.querySelector('.image-desc').src = imglink + "medium/" + product.image + "-md.jpg";
    modal.querySelector('.name-description').textContent = product.name;
    if (product.vegetarian === true ) {
        modal.querySelector('.name-description').innerHTML += '<a class="vege">&#9679;</a>';
    } else {
        modal.querySelector('.name-description').innerHTML += " ";
    }
    if (product.alcohol) // elem.alcohol > 0
        {
            modal.querySelector('.alco').textContent = "with alcohol";
        } else {
            modal.querySelector('.alco').style.display = "none";
        }
    modal.querySelector('.long-description').textContent = product.longdescription;
}



//////////////////////end of dynamic////////////////////////////////////////////

//let btn = document.querySelectorAll("#myBtn");
//
//btn.forEach(setupClick);
//
//function setupClick(btn){
//    btn.addEventListener('click', btnClicked);
//}
//
//function btnClicked(e){
//    console.log(e.target.nextSibling)
//    let modal = e.target.nextSibling;
//    modal.style.display = "block"
//}
//
//let closeBtns = document.querySelectorAll(".close");
//closeBtns.forEach(setupClickClose);
//
//function setupClickClose(btn){
//    btn.addEventListener("click", closeModal);
//}
//
//function closeModal(e){
//    e.target.parentElement.parentElement.style.display = "none";
//}



////////////////////////////////////////////////////////////////////////////

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

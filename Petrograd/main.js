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
    //modal.querySelector('.price').textContent = "discount";
    //modal.querySelector('.price').style.color = "#8b101a"
        if (product.discount) {
            modal.querySelector('.price').textContent = "discount";
            modal.querySelector('.price').style.color = "#8b101a";
            modal.querySelector('.price').style.visibility = 'visible';
            //console.log(elem.name + " has a discount");
            const newPrice = Math.ceil(product.price - product.price * product.discount / 100);
            modal.querySelector(".discount-price").classList.remove('hide');
            modal.querySelector(".discount-price span").textContent = newPrice;
        } else{
            const newPrice = product.price;
            modal.querySelector('.price').style.visibility = 'hidden';
            modal.querySelector(".discount-price").classList.remove('hide');
            modal.querySelector(".discount-price span").textContent = newPrice;
        }
    modal.querySelector('.image-modal-sold').src = 'imgs/sold-2.png';
    if(product.soldout) {
       modal.querySelector('.image-modal-sold').classList.remove('hide');
    }else{
        modal.querySelector('.image-modal-sold').classList.add('hide');
    }

}

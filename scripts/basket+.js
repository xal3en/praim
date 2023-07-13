let adder_li = document.createElement("li");
adder_li.classList.add("product__item");
let creature_title = document.createElement("h2");
let text_title = document.createTextNode("Прайм")
creature_title.appendChild(text_title)
let spawn = document.querySelector(".product__list");
let creature_img = document.createElement("img")
creature_img.src = "img/1.jpg"
creature_img.style.width = "100px"
creature_title.style.color = "red"
let basket_none = document.querySelectorAll(".product__item")[0]
let none = document.createElement("button")
let btn_text = document.createTextNode("-")
none.appendChild(btn_text)
none.setAttribute("onclick", "Delete()")


function update(){
spawn.appendChild(adder_li);
adder_li.appendChild(creature_title)
adder_li.appendChild(creature_img)
basket_none.classList.add("upt")
adder_li.appendChild(none)
}
function Delete(){
none.parentNode.remove()
}
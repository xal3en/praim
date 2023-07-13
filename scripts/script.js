var buyf = false;
let allprice = 0
let oneprice = document.getElementById("button").innerHTML
const basket = document.getElementById('button')
const price_basket = document.querySelector(".price")
oneprice = parseInt(oneprice)
console.log(oneprice)
function buy(){
	if(!buyf)
	{
	basket.style.background = 'lime';
	basket.innerHTML="В корзине";
	buyf = true;
	allprice = allprice + oneprice
}
else{
		basket.style.background = 'silver';
	basket.innerHTML="Купить";
		buyf = false;
		allprice = allprice - allprice

}
console.log(allprice)
price_basket.innerHTML = allprice
}

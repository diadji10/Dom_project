var likeButton = document.querySelectorAll(".like"); //var du bouton like
var addButton = document.querySelectorAll(".add"); //var du bouton add
var panier = document.querySelector("ul");
var result = document.querySelector(".result");




//NB: Ces variables récupèrent les données dès le chargement de la page


//Paramétrage du bouton like
likeButton.forEach(function (like) {
  like.addEventListener("click", function () {
    if (like.classList.contains("like")) {
      like.classList.remove("like");
      like.classList.add("like1");
    } else {
      like.classList.remove("like1");
      like.classList.add("like");
    }
  });
});
//Paramétrage du bouton add pour les clims
addButton.forEach((button, index) => {
  button.addEventListener("click", function () {
    const card = document.querySelectorAll(".card")[index];
    const title = card.querySelector(".titre").textContent;
    const price = card.querySelector(".price").textContent;
    var listitem = document.createElement("li");
    console.log(price);
    listitem.innerHTML = `${title}: <strong>Montant = <span class="price-li">${price}</span></strong>FCFA <button class="moins"><i class="fa-solid fa-minus"></i></button>`;
    panier.appendChild(listitem);
    var button_moins = listitem.querySelector('.moins');
    button_moins.addEventListener('click', function(){
        listitem.remove();
        Total();
    })
    Total();

  });
});
function Total() {
  var liItem = document.querySelectorAll("ul li");
  var total = 0;
  liItem.forEach((item) => {
    const price = parseFloat(item.querySelector(".price-li").innerHTML);
    total += price;
  });
  result.textContent = `${total} FCFA`;
}
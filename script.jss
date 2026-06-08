// =====================
// PRISM SHOP SYSTEM
// =====================

let points = 0;
let membership = "None";
let cart = [];
let total = 0;

// =====================
// MEMBERSHIPS
// =====================

function selectMembership(type){

  membership = type;

  switch(type){

    case "basic":
      points = 200;
      membership = "🌸 Basic";
      break;

    case "silver":
      points = 400;
      membership = "🥈 Silver";
      break;

    case "gold":
      points = 675;
      membership = "🥇 Gold";
      break;

    case "platinum":
      points = 1000;
      membership = "💎 Platinum";
      break;
  }

  updateDashboard();

  alert(
    "Welcome to PRISM!\n\n" +
    membership +
    " membership activated!"
  );
}

// =====================
// DASHBOARD
// =====================

function updateDashboard(){

  document.getElementById("membershipName").textContent =
    membership;

  document.getElementById("points").textContent =
    points;

  document.getElementById("cartCount").textContent =
    cart.length;

  document.getElementById("cartTotal").textContent =
    total;
}

// =====================
// DAILY REWARD
// =====================

let rewardClaimed = false;

function claimReward(){

  if(rewardClaimed){

    alert("🎁 You already claimed today's reward!");
    return;
  }

  let reward =
    Math.floor(Math.random() * 100) + 50;

  points += reward;

  rewardClaimed = true;

  updateDashboard();

  alert(
    "✨ Daily Reward Claimed!\n\n+" +
    reward +
    " Points"
  );
}

// =====================
// CART
// =====================

function addToCart(name, price){

  cart.push({
    name:name,
    price:price
  });

  total += price;

  renderCart();

  updateDashboard();

  alert(
    "🛍️ Added to cart:\n" +
    name
  );
}

// =====================
// CART DISPLAY
// =====================

function renderCart(){

  const cartList =
    document.getElementById("cartItems");

  cartList.innerHTML = "";

  cart.forEach((item,index)=>{

    let li =
      document.createElement("li");

    li.innerHTML = `
      ${item.name}
      - ${item.price} Points
      <button
      onclick="removeItem(${index})">
      ❌
      </button>
    `;

    cartList.appendChild(li);
  });
}

// =====================
// REMOVE ITEM
// =====================

function removeItem(index){

  total -= cart[index].price;

  cart.splice(index,1);

  renderCart();

  updateDashboard();
}

// =====================
// CHECKOUT
// =====================

function checkout(){

  if(cart.length === 0){

    alert(
      "🛒 Your cart is empty!"
    );

    return;
  }

  if(points < total){

    alert(
      "❌ Not enough points!\n\n" +
      "You need " +
      (total - points) +
      " more points."
    );

    return;
  }

  points -= total;

  alert(
    "🎉 PURCHASE SUCCESSFUL 🎉\n\n" +
    "Thank you for supporting PRISM!"
  );

  cart = [];
  total = 0;

  renderCart();
  updateDashboard();
}

// =====================
// WEEKLY BONUS BUTTON
// =====================

function weeklyBonus(){

  let bonus = 0;

  if(membership.includes("Basic")){
    bonus = 200;
  }

  if(membership.includes("Silver")){
    bonus = 400;
  }

  if(membership.includes("Gold")){
    bonus = 675;
  }

  if(membership.includes("Platinum")){
    bonus = 1000;
  }

  points += bonus;

  updateDashboard();

  alert(
    "⭐ Weekly Points Added!\n\n+" +
    bonus +
    " Points"
  );
}

// =====================
// SECRET QR REWARD
// =====================

function secretReward(){

  let reward =
    Math.floor(Math.random()*500)+100;

  points += reward;

  updateDashboard();

  alert(
    "💎 SECRET PRISM REWARD!\n\n+" +
    reward +
    " Points"
  );
}

// =====================
// WELCOME MESSAGE
// =====================

window.onload = function(){

  alert(
    "💎 Welcome to the PRISM Official Shop!\n\n" +
    "Choose a membership to begin."
  );

  updateDashboard();
};

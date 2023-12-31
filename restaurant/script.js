
let order = [];

// Fn to add a selected item to the order.
function addToOrder(itemName, itemPrice) {
  order.push({ name: itemName, price: itemPrice });
}

// Fn to display  order 
function displayOrder() {
  const selectedItems = [];
  let total = 0;
  let orderMessage = "Thank you for Ordering with us !!! Happy food !!Happy Life!!\n\nYour order includes:\n";

  // Iterate(loop) over all menu items with checkboxes
  const menuItems = document.querySelectorAll(".menu-item-checkbox");
  menuItems.forEach((checkbox) => {
    const itemName = checkbox.parentElement.textContent.trim();
    const itemPrice = parseInt(checkbox.parentElement.nextElementSibling.textContent.replace("₹", ""), 10);

    if (checkbox.checked) {
      addToOrder(itemName, itemPrice);
      selectedItems.push(itemName);
    }
  });

  if (selectedItems.length === 0) { //===
    alert("Please select menu items before ordering.");
    return;
  }

  for (let i = 0; i < order.length; i++) {
    orderMessage += `${order[i].name} - ₹${order[i].price}\n`;
    total += order[i].price;
  }

  orderMessage += `\nTotal: ₹${total}`;

  alert(orderMessage);

  // Clear the order after displaying the message.
  order = [];
}

// Event listeners to the order buttons.
document.addEventListener("DOMContentLoaded", function () {
  const orderButtons = document.querySelectorAll(".order-button");

  orderButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const itemName = button.parentElement.querySelector("td:nth-child(1)").textContent;
      const itemPrice = parseInt(button.parentElement.querySelector("td:nth-child(2)").textContent.replace("₹", ""), 10);
      addToOrder(itemName, itemPrice);
    });
  });

  // Add an event listener to the "Order Online" button.
  const orderOnlineButton = document.querySelector(".maintext button");
  orderOnlineButton.addEventListener("click", displayOrder);

  // Add event listeners to the navigation links.
  const menuLink = document.querySelector('a[href="#menuheading"]');
  const locationLink = document.querySelector('a[href="#locheading"]');

  menuLink.addEventListener("click", function () {
    // Scroll to the menu section when the "Menu" link is clicked.
    document.querySelector("#menuheading").scrollIntoView({ behavior: "smooth" });
  });

  locationLink.addEventListener("click", function () {
    // Scroll to the locations section when the "Locations" link is clicked.
    document.querySelector("#locheading").scrollIntoView({ behavior: "smooth" });
  });
});

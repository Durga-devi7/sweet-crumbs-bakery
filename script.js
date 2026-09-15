// Mobile Menu

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});


// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.querySelector(
        'input[placeholder="Your Name"]'
    );

    const emailInput = document.querySelector(
        'input[placeholder="Your Email"]'
    );

    const phoneInput = document.getElementById("phone");

    const messageInput = document.querySelector(
        'textarea[placeholder="Your Message"]'
    );

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    }

    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    alert(
        "Message sent successfully! Thank you for contacting Sweet Crumbs Bakery."
    );

    contactForm.reset();
});


// Product Selection and Discount

const productSelect = document.getElementById("productSelect");
const selectedProduct = document.getElementById("selectedProduct");
const selectedPrice = document.getElementById("selectedPrice");
const discountedPrice = document.getElementById("discountedPrice");
const quantityInput = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");

function updateTotal() {
    const selectedOption =
        productSelect.options[productSelect.selectedIndex];

    const productName = selectedOption.value;
    const originalPrice = Number(selectedOption.dataset.price);
    const hasDiscount = selectedOption.dataset.discount === "true";
    const quantity = Number(quantityInput.value);

    let finalPrice = originalPrice;

    if (hasDiscount) {
        const discount = originalPrice * 0.20;
        finalPrice = originalPrice - discount;
    }

    const total = finalPrice * quantity;

    selectedProduct.textContent = productName;
    selectedPrice.textContent = originalPrice;
    discountedPrice.textContent = finalPrice;
    totalPrice.textContent = "₹" + total;
}

productSelect.addEventListener("change", updateTotal);
quantityInput.addEventListener("input", updateTotal);


// Place Order

const customerName = document.getElementById("customerName");
const placeOrderButton = document.getElementById("placeOrderButton");

placeOrderButton.addEventListener("click", function () {
    if (customerName.value.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    const productName = selectedProduct.textContent;
    const quantity = Number(quantityInput.value);
    const total = totalPrice.textContent;

    alert(
        "Order placed successfully!\n\n" +
        "Customer: " + customerName.value + "\n" +
        "Product: " + productName + "\n" +
        "Quantity: " + quantity + "\n" +
        "Total: " + total + "\n\n" +
        "Thank you for your order!"
    );
});
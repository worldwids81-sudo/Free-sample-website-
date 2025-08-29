// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Modal Logic
const modal = document.getElementById("bookingModal");
const openBtns = [document.getElementById("openModalBtn"), document.getElementById("openModalBtnMobile"), document.getElementById("openModalBtn2")];
const closeBtn = document.getElementById("closeModalBtn");

openBtns.forEach(btn => {
  if (btn) {
    btn.addEventListener("click", () => modal.classList.remove("hidden"));
  }
});

closeBtn.addEventListener("click", () => modal.classList.add("hidden"));

// Show Custom Service Field if "Other" Selected
const serviceDropdown = document.getElementById("service");
const customService = document.getElementById("customService");

serviceDropdown.addEventListener("change", () => {
  if (serviceDropdown.value === "Other") {
    customService.classList.remove("hidden");
    customService.required = true;
  } else {
    customService.classList.add("hidden");
    customService.required = false;
  }
});

// WhatsApp Integration
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = serviceDropdown.value === "Other" ? customService.value : serviceDropdown.value;
  const address = document.getElementById("address").value;

  const businessName = "Radhe Enterprises"; // Replace with your business name
  const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with your WhatsApp number (with country code, e.g., 919527228897)

  // Pre-filled WhatsApp message
  const message = `🔧 *New Service Request - ${businessName}*%0A%0A👤 *Name:* ${name}%0A📱 *Phone:* ${phone}%0A️ *Service Required:* ${service}%0A📍 *Address:* ${address}%0A%0AHello, I want to book a service. Please confirm availability.`;

  const url = `https://wa.me/${whatsappNumber}?text=${message}`;
  window.open(url, "_blank");

  modal.classList.add("hidden");
  this.reset();
});

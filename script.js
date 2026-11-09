
// ==========================================
// PYREX DIGITAL SOLUTIONS 
// Main JavaScript File
// ==========================================

// 1. MOBILE NAVIGATION MENU

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("show");

    const isOpen = nav.classList.contains("show");
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
  });

  // Close menu after selecting a navigation link
  document.querySelectorAll("#nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("show");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    });
  });
}

// 2. WHATSAPP CONTACT DETAILS


const whatsappNumber = "254182000479";

const whatsappMessage =
  "Hello PYREX DIGITAL SOLUTIONS . I would like to enquire about your digital services.";

const encodedMessage = encodeURIComponent(whatsappMessage);

const whatsappLink =
  "https://wa.me/" + whatsappNumber + "?text=" + encodedMessage;

// Connect WhatsApp button
const whatsappButton = document.getElementById("whatsappLink");

if (whatsappButton) {
  whatsappButton.href = whatsappLink;
  whatsappButton.target = "_blank";
  whatsappButton.rel = "noopener noreferrer";
}

// 3. AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 4. SMOOTH NAVIGATION

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetId = link.getAttribute("href");

    if (targetId && targetId.length > 1) {
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
});

// 5. WEBSITE READY MESSAGE

console.log(
  " PYREX DIGITAL SOLUTIONS  website loaded successfully."
);

/* ==================================
   PYREX DIGITAL SOLUTIONS  QUOTE REQUEST SYSTEM
   ================================== */

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

  quoteForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("clientName").value.trim();

    const service = document.getElementById("clientService").value;

    const budget = document.getElementById("clientBudget").value;

    const details = document.getElementById("projectDetails").value.trim();

    if (!name || !service || !budget || !details) {
      alert("Please complete all the fields.");
      return;
    }

    // Read the existing business WhatsApp link
    const whatsappButton = document.getElementById("whatsappLink");

    const existingLink = whatsappButton
      ? whatsappButton.href
      : "";

    const phoneMatch = existingLink.match(
      /(?:wa\.me\/|phone=)(\d+)/i
    );

    if (!phoneMatch) {
      alert(
        "WhatsApp number could not be detected. Please check your existing WhatsApp button setup in script.js."
      );
      return;
    }

    const phoneNumber = phoneMatch[1];

    const message =
`NEW PROJECT ENQUIRY
PYREX DIGITAL SOLUTIONS 

Client Name: ${name}

Service Required: ${service}

Estimated Budget: ${budget}

Project Description:
${details}

Please review my request and provide a quotation.

Thank you.`;

    const whatsappURL =
      "https://wa.me/" +
      phoneNumber +
      "?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

  });

}

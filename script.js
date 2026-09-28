// Event registration and WhatsApp community links.
const REGISTRATION_URL = "https://app.studenttribe.in/events/build-in-cafe";
const WHATSAPP_URL = "https://chat.whatsapp.com/Cl0xsrVdJLf45jKba1WuUA?s=cl&p=i&mlu=0&ilr=4";

document.querySelectorAll("[data-registration]").forEach((link) => {
  link.href = REGISTRATION_URL;
});
document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = WHATSAPP_URL;
});

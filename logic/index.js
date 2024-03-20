const carLinks = document.querySelectorAll(".a_automoviles");

carLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    esconderTabContents();
    const contentId = event.target.id;
    const tabContent = document.getElementById(`${contentId}_content`);
    tabContent.style.display = "block";
  });
});

function esconderTabContents() {
  const tabContents = document.querySelectorAll(".tabs-content");
  tabContents.forEach((tabContent) => {
    tabContent.style.display = "none";
  });
}

carLinks[0].click();

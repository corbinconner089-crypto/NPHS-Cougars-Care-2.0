const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".site-header nav");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    const open = nav.style.display === "flex";
    nav.style.display = open ? "" : "flex";
    nav.style.position = "absolute";
    nav.style.top = "76px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "20px";
    nav.style.background = "#fff";
    nav.style.flexDirection = "column";
    nav.style.alignItems = "flex-start";
    nav.style.borderBottom = "1px solid #e5ebe7";
  });
}
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 850) nav.style.display = "";
  });
});

let iTab = document.querySelector("#iSkip");
let asideNavbar = document.querySelector(".dismiss-aside-nav");
asideNavbar.style.display = "none";

function skip() {
    if (asideNavbar.style.display == "none") {
        asideNavbar.style.display = "block";

        // console.log("click");
    } else {
        asideNavbar.style.display = "none";

        // console.log("else click");
    }
}
iTab.addEventListener("click", skip);
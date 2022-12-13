let tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    //to select active tab
    tabs.forEach((tab) => {
      tab.classList.remove("tab-is-active");
      this.classList.add("tab-is-active");
    });
  });
});

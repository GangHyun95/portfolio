window.onload = function () {
  // navbar 클릭 시 스크롤 이동
  const navbar = document.querySelectorAll(".gnb > li");
  navbar.forEach((navbarItem) => {
    navbarItem.addEventListener("click", (e) => {
      const link = e.currentTarget.dataset.link;
      scrollIntoView(link);
      selectNavItem(e.currentTarget);
    });
  });

  // 활성화 navbar active 클래스 추가
  const sectionIds = ["#home", "#profile", "#skills", "#portfolio", "#contact"];
  const navItems = sectionIds.map((id) =>
    document.querySelector(`[data-link="${id}"]`)
  );
  let selectedNavItem = navItems[0];

  // Portfolio section
  const btnContainer = document.querySelectorAll(".category__btn");
  const projects = document.querySelectorAll(".portfolio__card");

  btnContainer.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      //   selected 클래스 이전 거 삭제 ,추가
      const active = document.querySelector(".category__btn.selected");
      active.classList.remove("selected");
      e.currentTarget.classList.add("selected");

      const filter = e.currentTarget.dataset.filter;
      projects.forEach((project) => {
        console.log(project.dataset.type);
        if (filter === "all" || filter === project.dataset.type) {
          project.classList.remove("invisible");
        } else {
          project.classList.add("invisible");
        }
      });
    })
  );

  function selectNavItem(selected) {
    selectedNavItem.classList.remove("active");
    selectedNavItem = selected;
    selectedNavItem.classList.add("active");
  }

  function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
  }
};

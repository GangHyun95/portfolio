window.onload = function () {
  // 스크롤 시 navbar 색깔 생김()
  const nav = document.querySelector(".navbar");
  const navHeight = nav.getBoundingClientRect().height;
  document.addEventListener("scroll", () => {
    if (window.scrollY > navHeight) {
      nav.classList.add("navbar--dark");
    } else {
      nav.classList.remove("navbar--dark");
    }
  });
  // navbar 클릭 시 스크롤 이동
  const navbarMenu = document.querySelector(".gnb");
  const navbar = document.querySelectorAll(".gnb > li");

  console.log(nav);
  navbar.forEach((navbarItem) => {
    navbarItem.addEventListener("click", (e) => {
      const link = e.currentTarget.dataset.link;
      scrollIntoView(link);
      selectNavItem(e.currentTarget);
      navbarMenu.classList.remove("open");
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
  const projectContainer = document.querySelector(".portfolio__container");
  const projects = document.querySelectorAll(".portfolio__card");

  btnContainer.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      //   selected 클래스 이전 거 삭제 ,추가
      const active = document.querySelector(".category__btn.selected");
      active.classList.remove("selected");
      e.currentTarget.classList.add("selected");

      const filter = e.currentTarget.dataset.filter;

      projectContainer.classList.add("anim-out");
      setTimeout(() => {
        projects.forEach((project) => {
          if (filter === "all" || filter === project.dataset.type) {
            project.classList.remove("invisible");
          } else {
            project.classList.add("invisible");
          }
        });
        projectContainer.classList.remove("anim-out");
      }, 300);
    })
  );

  const titleEntries = document.querySelectorAll(".fade");

  console.log(titleEntries);
  fadeUp(titleEntries, 0.8);
  // 버튼 색깔
  function selectNavItem(selected) {
    selectedNavItem.classList.remove("active");
    selectedNavItem = selected;
    selectedNavItem.classList.add("active");
  }
  // 스크롤 이동
  function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // 스크롤 opacity 0 -> opacity 1
  function fadeUp(arr, threshold) {
    const options = {
      threshold: threshold,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        let yCoordinate =
          window.scrollY + entry.target.getBoundingClientRect().top;
        if (!entry.isIntersecting && window.scrollY < yCoordinate) {
          entry.target.classList.remove("show");
        } else {
          entry.target.classList.add("show");
        }
      });
    }, options);
    arr.forEach((item) => {
      observer.observe(item);
    });
  }

  // 스크롤 애니메이션
  const saUpList = document.querySelectorAll(".anim-up");
  const saDownList = document.querySelectorAll(".anim-down");
  window.addEventListener("scroll", () => {
    saUp(saUpList);
    saDown(saDownList);
  });

  saUp(saUpList);
  saDown(saDownList);
  // 스크롤 위로 올라오고 아래로 사라지는 애니메이션
  function saUp(ele) {
    ele.forEach((el) => {
      if (!el.classList.contains("up")) {
        if (window.innerHeight > el.getBoundingClientRect().top) {
          el.classList.add("up");
        }
      } else {
        if (window.innerHeight < el.getBoundingClientRect().top + 100) {
          el.classList.remove("up");
        }
      }
    });
  }
  // 스크롤 아래에서 내려옴
  function saDown(ele) {
    ele.forEach((el) => {
      if (!el.classList.contains("down")) {
        if (window.innerHeight > el.getBoundingClientRect().top) {
          el.classList.add("down");
        }
      } else {
        if (
          window.innerHeight <
          el.getBoundingClientRect().top + el.getBoundingClientRect().height / 5
        ) {
          el.classList.remove("down");
        }
      }
    });
  }
};

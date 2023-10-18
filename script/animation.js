let skills = [
  "React Native Developer",
  "Nodejs Developer",
  "Frontend Developer",
];

const pushText = (text, skillIndex_) => {
  let i = 0;
  let skillIndex = skillIndex_;

  const id = setInterval(() => {
    const txtSkill = document.querySelector(".txtSkills");

    if (text[i]) txtSkill.innerHTML += text[i];

    i++;

    if (i > text.length) {
    //adding delay of 3 secs so the user can read complete text before it resets
      setTimeout(() => {
        txtSkill.innerHTML = "";
        skillIndex++;
        if (skillIndex < skills.length) {
          pushText(skills[skillIndex], skillIndex);
        } else {
          skillIndex = 0;
          pushText(skills[skillIndex], skillIndex);
        }
      }, 3000);

      clearInterval(id);
    }
  }, 200);
};

pushText(skills[0], 0);


document.getElementById("btnMenu").addEventListener("click", () => {
  document.querySelector(".navBar").style.display = "flex";
  // document.querySelector('.navBar').style.right = '100%';
});

document.getElementById("btnClose").addEventListener("click", () => {
  document.querySelector(".navBar").style.display = "none";
  // document.querySelector('.navBar').style.right = '-100%';
});

const changePercentage = (el, max) => {
  let percentage = 0;

  const id = setInterval(() => {
    percentage++;
    el.innerHTML = `${percentage}%`;

    if (percentage === max) clearInterval(id);
  }, 20);
};

const animatePercentage = () => {
  let options = {
    root: null, // view port  ///document.querySelector('#scrollArea'),
    rootMargin: "0px",
    threshold: 0.3,
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      console.log(entry.target);

      // document.querySelector(".navBar").style.backgroundColor = "red";
      const skillTextEl = entry.target.firstElementChild.lastElementChild;

      const id = entry.target.getAttribute("id");

      switch (id) {
        case "c1":
          changePercentage(skillTextEl, 70);
          document.querySelector(".c1").style.strokeDashoffset =
            376.99 - (376.99 / 100) * 70;
          break;
        case "c2":
          changePercentage(skillTextEl, 75);
          document.querySelector(".c2").style.strokeDashoffset =
            376.99 - (376.99 / 100) * 75;
          break;
        case "c3":
          changePercentage(skillTextEl, 60);
          document.querySelector(".c3").style.strokeDashoffset =
            376.99 - (376.99 / 100) * 60;
          break;
        case "c4":
          changePercentage(skillTextEl, 65);
          document.querySelector(".c4").style.strokeDashoffset =
            376.99 - (376.99 / 100) * 65;
          break;
        case "c5":
          changePercentage(skillTextEl, 85);
          document.querySelector(".c5").style.strokeDashoffset =
            376.99 - (376.99 / 100) * 85;
          break;
        case "c6":
          changePercentage(skillTextEl, 80);
          document.querySelector(".c6").style.strokeDashoffset =
            376.99 - (376.99 / 100) * 80;
          break;
      }

      observer.unobserve(entry.target);
    });
  }, options);

  let singleSkillDiv = document.querySelectorAll(".singleSkillDiv");

  singleSkillDiv.forEach((item) => {
    observer.observe(item);
  });
};

animatePercentage();

const animateNav = () => {
  let options = {
    root: null, // view port  ///document.querySelector('#scrollArea'),
    rootMargin: "-100px",
    threshold: 0.4,
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      console.log(entry.target);

      document.querySelector(".navBar").classList.toggle("changeNavColor");

      // observer.unobserve(entry.target);
    });
  }, options);

  let SkillDiv = document.querySelector(".skillsDiv");

  observer.observe(SkillDiv);
};

// animateNav();

const animateWork = () => {
  const workItems = document.querySelectorAll(".whatIDoItem");

  let options = {
    root: null, // view port  ///document.querySelector('#scrollArea'),
    rootMargin: "-50px",
    threshold: 0.3,
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // console.log(entry.target);

      workItems.forEach((item) => {
        item.classList.toggle("workAnim");
      });

      observer.unobserve(entry.target);
    });
  }, options);

  workItems.forEach((item) => {
    observer.observe(item);
  });
};

animateWork();

const animateProgressBar = () => {
  const aboutMeContent = document.querySelector(".aboutMeContent");
  const progressBar = document.querySelectorAll(".progressBarFront");

  let options = {
    root: null, // view port  ///document.querySelector('#scrollArea'),
    rootMargin: "-50px",
    threshold: 0.3,
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // console.log(entry.target);

      progressBar.forEach((bar) => {
        const id = bar.getAttribute("id");

        if (id == "english") {
          bar.style.width = "75%";
        }

        if (id == "urdu") {
          bar.style.width = "100%";
        }
      });

      observer.unobserve(entry.target);
    });
  }, options);

  observer.observe(aboutMeContent);
};

animateProgressBar();

const animateABoutBack = () => {
  const aboutMeDiv = document.querySelector(".aboutMeDiv");
  const aboutMeBackDiv = document.querySelector(".aboutBackStyleDiv");

  let options = {
    root: null, // view port  ///document.querySelector('#scrollArea'),
    rootMargin: "-50px",
    threshold: 0.1,
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      aboutMeBackDiv.style.transform = "rotate(35deg)";
      // aboutMeBackDiv.style.transform = "scale(1)";

      observer.unobserve(entry.target);
    });
  }, options);

  observer.observe(aboutMeDiv);
};

animateABoutBack();

const animateSkillBack = () => {
  const skillDiv = document.querySelector(".skillsDiv");
  const skillBackDiv = document.querySelector(".skillBackDiv");

  let options = {
    root: null, // view port  ///document.querySelector('#scrollArea'),
    rootMargin: "-50px",
    threshold: 0.1,
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      skillBackDiv.style.transform = "rotate(35deg) scale(2)";
      // aboutMeBackDiv.style.transform = "scale(1)";

      observer.unobserve(entry.target);
    });
  }, options);

  observer.observe(skillDiv);
};

animateSkillBack();

const icons = [
  "fa-brands fa-node-js",
  "fa-brands fa-react",
  "fa-solid fa-database",
  "fa-brands fa-js",
  "fa-solid fa-code",
];
const AnimateHeader = () => {
  const icon = document.createElement("i");

  icon.style.left = `${Math.floor(Math.random() * 100)}%`;
  icon.style.top = `${Math.floor(Math.random() * 100)}%`;

  const index = Math.floor(Math.random() * 100) % icons.length;
  icon.className = `${icons[index]} headerAnimatedIcon`;

  const header = document.getElementById("headerSection").appendChild(icon);

  setTimeout(() => {
    icon.classList.toggle("animateIcon");
  }, 100);

  setTimeout(() => {
    header.remove(icon);
  }, 2000);
};

setInterval(AnimateHeader, 1000);
setInterval(AnimateHeader, 2000);

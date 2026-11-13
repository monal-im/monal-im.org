if (localStorage.getItem("pref-theme") === "dark") {
  document.body.classList.add("dark");
} else if (localStorage.getItem("pref-theme") === "light") {
  document.body.classList.remove("dark");
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark");
}

let menu = document.getElementById("menu");
if (menu) {
  // Set the scroll position
  const scrollPosition = localStorage.getItem("menu-scroll-position");
  if (scrollPosition) {
    menu.scrollLeft = parseInt(scrollPosition, 10);
  }

  let menuScrollTimeout;
  menu.addEventListener(
    "scroll",
    function () {
      clearTimeout(menuScrollTimeout);
      menuScrollTimeout = setTimeout(function () {
        localStorage.setItem("menu-scroll-position", menu.scrollLeft);
      }, 150);
    },
    { passive: true },
  );
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var id = this.getAttribute("href").substr(1);
    const target = document.querySelector(`[id='${decodeURIComponent(id)}']`);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      target.scrollIntoView();
    }
    // Move keyboard focus to the target like native anchor navigation,
    // so the next Tab continues from there instead of from this link
    if (target.tabIndex < 0 && !target.hasAttribute("tabindex")) {
      target.setAttribute("tabindex", "-1");
    }
    target.focus({ preventScroll: true });
    if (id === "top") {
      history.replaceState(null, null, " ");
    } else {
      history.pushState(null, null, `#${id}`);
    }
  });
});

var toplink = document.getElementById("top-link");
var scrollTicking = false;
// At most one check per frame
window.addEventListener(
  "scroll",
  function () {
    if (scrollTicking) {
      return;
    } else {
      toplink.classList.add("hidden");
    }
    scrollTicking = true;
    requestAnimationFrame(function () {
      const scrollThreshold = window.innerHeight;
      const shown =
        document.body.scrollTop > scrollThreshold ||
        document.documentElement.scrollTop > scrollThreshold;
      toplink.classList.toggle("hidden", !shown);
      scrollTicking = false;
    });
  },
  { passive: true },
);

document.getElementById("theme-toggle").addEventListener("click", () => {
  const html = document.querySelector("html");
  if (html.dataset.theme === "dark") {
    html.dataset.theme = "light";
    localStorage.setItem("pref-theme", "light");
  } else {
    html.dataset.theme = "dark";
    localStorage.setItem("pref-theme", "dark");
  }
});

document.querySelectorAll("pre > code").forEach((codeblock) => {
  const container = codeblock.parentNode.parentNode;

  const copybutton = document.createElement("button");
  copybutton.classList.add("copy-code");
  copybutton.innerHTML = '{{- i18n "code_copy" | default "copy" }}';

  function copyingDone() {
    copybutton.innerHTML = '{{- i18n "code_copied" | default "copied!" }}';
    setTimeout(() => {
      copybutton.innerHTML = '{{- i18n "code_copy" | default "copy" }}';
    }, 2000);
  }

  copybutton.addEventListener("click", (cb) => {
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(codeblock.textContent);
      copyingDone();
      return;
    }

    const range = document.createRange();
    range.selectNodeContents(codeblock);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    try {
      document.execCommand("copy");
      copyingDone();
    } catch (e) {}
    selection.removeRange(range);
  });

  if (container.classList.contains("highlight")) {
    container.appendChild(copybutton);
  } else if (container.parentNode.firstChild == container) {
    // td containing LineNos
  } else if (
    codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName ==
    "TABLE"
  ) {
    // table containing LineNos and code
    codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(
      copybutton,
    );
  } else {
    // code blocks not having highlight as parent class
    codeblock.parentNode.appendChild(copybutton);
  }
});

// from head.html

if (localStorage.getItem("pref-theme") === "dark") {
  document.querySelector("html").dataset.theme = "dark";
}

if (localStorage.getItem("pref-theme") === "light") {
  document.querySelector("html").dataset.theme = "light";
}

if (localStorage.getItem("pref-theme") === "dark") {
  document.querySelector("html").dataset.theme = "dark";
} else if (localStorage.getItem("pref-theme") === "light") {
  document.querySelector("html").dataset.theme = "light";
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.querySelector("html").dataset.theme = "dark";
} else {
  document.querySelector("html").dataset.theme = "light";
}

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.querySelector("html").dataset.theme = "dark";
} else {
  document.querySelector("html").dataset.theme = "light";
}
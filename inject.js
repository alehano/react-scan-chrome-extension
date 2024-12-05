const script = document.createElement("script");
script.src = "https://unpkg.com/react-scan/dist/auto.global.js";
script.id = "react-scanner-script";
document.documentElement.insertBefore(
  script,
  document.documentElement.firstChild
);

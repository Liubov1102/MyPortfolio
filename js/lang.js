const AllLng = ["en", "uk", "ru"];

const langStart = localStorage.getItem("lang") || "";

if (langStart !== "") {
  refs.langSelector.value = langStart;
  location.href = window.location.pathname + "#" + langStart;
}

changeLang();

refs.langSelector.addEventListener("change", changeUrlLng);

function changeUrlLng() {
  let lang = refs.langSelector.value;
  location.href = window.location.pathname + "#" + lang;
  changeLang();
}

function changeLang() {
  let hash = window.location.hash;
  hash = hash.slice(1);
  if (!AllLng.includes(hash)) {
    location.href = window.location.pathname + "#en";
    localStorage.setItem("lang", "en");
    refs.html.setAttribute("lang", "en");
  }
  refs.html.setAttribute("lang", hash);
  localStorage.setItem("lang", hash);
  refs.langSelector.value = hash;
  for (let key in langArr) {
    let elem = document.querySelector(`[data-lang="${key}"]`);
    if (elem && key) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

refs.langSelector.addEventListener("change", (e) => window.location.reload());

//export { changeLang };

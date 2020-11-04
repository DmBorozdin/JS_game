let selectedLi;
let ul = document.querySelector('.level');
ul.onclick = function(event) {
  let target = event.target;
  hightLight(target);
}

function hightLight(element) {
  if (selectedLi) selectedLi.classList.remove('level__elemet_active');
  selectedLi = element;
  selectedLi.classList.add('level__elemet_active');
}

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',showbox);





function showbox(){
  const triggerBottom = window.innerHeight;

  //console.log(triggerBottom);
  boxes.forEach(box => {
    const boxtop = box.getBoundingClientRect().top;
    console.log(boxtop);
    if (boxtop < triggerBottom){
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }

  });
}

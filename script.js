
  const ratio = document.querySelector('.ratio');
  const content = document.querySelector('.content');
  const firstStar = document.querySelector('.firststar');
  const numbers = document.querySelectorAll('.num');
  const text = document.querySelector('.selectText');
  const thankState = document.querySelector('.thanks');
  let num;
  let clicked = false;
  const btn = document.querySelector('.submitButton');
  for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', activeNumber);
  }
  function activeNumber(e){
    num = this.id;
    if(!clicked){
      clicked = true;
      this.classList.add('active_number');
      ratio.style.setProperty('pointer-events', 'none');
      
    }
  }    
  function thanksState() {
    firstStar.style.setProperty('display', 'none');
    content.style.setProperty('display', 'none');
    thankState.style.setProperty('display', 'flex');
    text.innerHTML = `You selected ${num} out of 5`;
  } 
  btn.addEventListener('click', thanksState);
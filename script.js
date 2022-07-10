
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
    if(this.classList.contains('active_number')) return
     for(let j = 0; j < numbers.length; j++) {
        numbers[j].classList.remove('active_number');
     }
      this.classList.add('active_number');
  }    
  function thanksState() {
    firstStar.style.setProperty('display', 'none');
    content.style.setProperty('display', 'none');
    thankState.style.setProperty('display', 'flex');
    text.innerHTML = `You selected ${num} out of 5`;
  } 
  btn.addEventListener('click', thanksState);
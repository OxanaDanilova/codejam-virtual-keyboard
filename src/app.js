import './scss/style.scss';
console.log('Hello, SASS');
let color = 'orange';

const keydown = (event)=> {
  let sign = event.key;
  document.getElementsByTagName('textarea')[0].value+=sign;
  for (let i=0; i<=document.getElementsByClassName('button').length; i++) {
    let element = document.getElementsByClassName('button')[i];
    if (element.textContent === event.key) {
      let ev = new Event("mousedown");
      element.dispatchEvent(ev);
    }
  }
}

  const keyup = (event)=> {
     for (let i=0; i<=document.getElementsByClassName('button').length; i++) {
      let element = document.getElementsByClassName('button')[i];
      if (element.textContent === event.key) {
        let ev = new Event("mouseup");
        element.dispatchEvent(ev);
      }
    }
 }

document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);

const clickBtn = (event) => {
  const clickedBtn = event.target.closest('.button');
  //const row = clickBtn.parentElement;
  let sign = clickedBtn.textContent;
  document.getElementsByTagName('textarea')[0].value+=sign;
  }

const mouseDown = (event)=> {
  const clickedBtn = event.target.closest('.button');
  color = window.getComputedStyle(clickedBtn).getPropertyValue("background-color");
  clickedBtn.style.backgroundColor= '#ff6500';
  }

const mouseUp = (event)=> {
  const clickedBtn = event.target.closest('.button');
  clickedBtn.style.backgroundColor= color;
 }

const drawfirstr = () => {
const firstarrbut = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace' ];
const firstrow = document.getElementsByClassName('first row')[0];
for (let i=0; i<firstarrbut.length; i++) {
  const btn = document.createElement('button');
  if (i===firstarrbut.length-1){ btn.className='button func';} else {
    btn.className = 'button';
  }
  btn.textContent = firstarrbut[i];
  btn.addEventListener('mousedown', mouseDown);
  btn.addEventListener('mouseup', mouseUp);
  btn.addEventListener('click', clickBtn);
   firstrow.appendChild(btn);
}
}

const drawsecondr = () => {
  const secondarrbut = ['Tab','Q','W','E', 'R','T','Y','U','I','O','P','{','}','|','Del'];
  const secondrow = document.getElementsByClassName('second row')[0];
  for (let i=0; i<secondarrbut.length; i++) {
    const btn = document.createElement('button');
    if (i===0 || i===secondarrbut.length-1) {btn.className = 'button func';} else {
      btn.className = 'button';
    }
    btn.textContent = secondarrbut[i];
    btn.addEventListener('mousedown', mouseDown);
    btn.addEventListener('mouseup', mouseUp);
    btn.addEventListener('click', clickBtn);
    secondrow.appendChild(btn);
  }
}

const drawthirdr = () => {
  const thirdarrbut = ['CapsLock','A','S','D','F','G','H','J','K','L',':','"','Enter'];
    const thirdrow = document.getElementsByClassName('third row')[0];
    for (let i=0; i<thirdarrbut.length; i++) {
      const btn = document.createElement('button');
       if (i===0 || i===thirdarrbut.length-1) {btn.className = 'button func';} else {
        btn.className = 'button';
      }
      btn.textContent = thirdarrbut[i];
      btn.addEventListener('mousedown', mouseDown);
      btn.addEventListener('mouseup', mouseUp);
      btn.addEventListener('click', clickBtn);
      thirdrow.appendChild(btn);
    }

}

const drawforthr = () => {
  const fortharrbut = ['Shift','Z','X','C','V','B','N','M','<','>','?','Shift'];
  const forthrow = document.getElementsByClassName('forth row')[0];
  for (let i=0; i<fortharrbut.length; i++) {
    const btn = document.createElement('button');
     if (i===0 || i===fortharrbut.length-1) {btn.className = 'button func';} else {
      btn.className = 'button';
    }
    btn.textContent = fortharrbut[i];
    btn.addEventListener('mousedown', mouseDown);
    btn.addEventListener('mouseup', mouseUp);
    btn.addEventListener('click', clickBtn);
    forthrow.appendChild(btn);
  }

}

const drawfifthr = () => {
  const fiftharrbut = ['Ctrl','Win','Alt','','Alt','Ctrl'];
  const fifthrow = document.getElementsByClassName('fifth row')[0];
  for (let i=0; i<fiftharrbut.length; i++) {
    const btn = document.createElement('button');
    if (i===3) {btn.className = 'button space';} else {
      btn.className = 'button func';
    }
    btn.textContent = fiftharrbut[i];
    btn.addEventListener('mousedown', mouseDown);
    btn.addEventListener('mouseup', mouseUp);
    btn.addEventListener('click', clickBtn);
    fifthrow.appendChild(btn);
  }

}

function startDraw() {
  const textpanel = document.createElement('section');
  textpanel.className = 'text-panel';
  document.body.appendChild(textpanel);

  const textarea = document.createElement('textarea');
  textarea.setAttribute('name', 'text');
  textarea.setAttribute('cols', '110');
  textarea.setAttribute('rows', '15');
  textpanel.appendChild(textarea);


  const keyboard = document.createElement('section');
  keyboard.className = 'keyboard';
  document.body.appendChild(keyboard);
  /* search.addEventListener('change', startRequest); */

  //////////////////draw rows/////////////
  const firstrowarr = ['first', 'second', 'third', 'forth', 'fifth'];
  for (let i=1; i<=5; i++) {
    const row = document.createElement('div');
    row.classList = 'row '+firstrowarr[i-1];
    keyboard.appendChild(row);
  }
  drawfirstr();
  drawsecondr();
  drawthirdr();
  drawforthr();
  drawfifthr();
}

startDraw();

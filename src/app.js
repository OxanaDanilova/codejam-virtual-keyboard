import './scss/style.scss';
console.log('Hello, SASS');
let color = 'orange';
let mode = 'eng';

const changeKeyboard = (arr)=> {
   //const arr = ['`',1,2,3,4,5,6,7,8,9,0,'-','=','Backspace', 'Tab','q','w','e','r','t','y','u','i','o','p','[',']','slash','Del','CapsLock','a','s','d','f','g','h','j','k','l',';','cav','Enter','Shift','z','x','c','v','b','n','m','.',',','/','Shift','Ctrl','Win','Alt','Space','Alt','Ctrl'];
   for (let i=0; i<document.getElementsByClassName('button').length; i++) {
    let element = document.getElementsByClassName('button')[i];
    element.textContent = arr[i];
    }
}

const changeCapsLock = ()=> {
  const eng = ['`',1,2,3,4,5,6,7,8,9,0,'-','=','Backspace', 'Tab','q','w','e','r','t','y','u','i','o','p','[',']','slash','Del','CapsLock','a','s','d','f','g','h','j','k','l',';','cav','Enter','Shift','z','x','c','v','b','n','m','.',',','/','Shift','Ctrl','Win','Alt','Space','Alt','Ctrl'];
  const engCaps = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace','Tab','Q','W','E', 'R','T','Y','U','I','O','P','{','}','|','Del','CapsLock','A','S','D','F','G','H','J','K','L',':','"','Enter','Shift','Z','X','C','V','B','N','M','<','>','?','Shift', 'Ctrl','Win','Alt','','Alt','Ctrl'];
  const ru = ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','Tab', 'й','ц','у','к','е','н','г','ш','щ','з','х','ъ','backslash','Del','CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter','Shift', 'я','ч','с','м','и','т','ь','б','ю', '.', 'Shift','Ctrl','Win','Alt','Space','Alt','Ctrl'];
  const ruCaps = ['Ё','!','"','№',';','%',':','?','*','(',')','_','+','Backspace','Tab', 'Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','backslash','Del','CapsLock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter','Shift', 'Я','Ч','С','М','И','Т','Ь','Б','Ю', ',', 'Shift','Ctrl','Win','Alt','Space','Alt','Ctrl']
  switch (mode) {
     case 'eng':
      mode='engCaps';
      changeKeyboard(engCaps);
      break;
     case 'engCaps':
      mode='eng';
     changeKeyboard(eng);
      break;
    case 'ruCaps':
      mode='ru';
      changeKeyboard(ru);
      break;
    case 'ru':
      mode='ruCaps';
      changeKeyboard(ruCaps);
      break;
  }
}

const changeLang = ()=> {
  const eng = ['`',1,2,3,4,5,6,7,8,9,0,'-','=','Backspace', 'Tab','q','w','e','r','t','y','u','i','o','p','[',']','slash','Del','CapsLock','a','s','d','f','g','h','j','k','l',';','cav','Enter','Shift','z','x','c','v','b','n','m','.',',','/','Shift','Ctrl','Win','Alt','Space','Alt','Ctrl'];
  const engCaps = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace','Tab','Q','W','E', 'R','T','Y','U','I','O','P','{','}','|','Del','CapsLock','A','S','D','F','G','H','J','K','L',':','"','Enter','Shift','Z','X','C','V','B','N','M','<','>','?','Shift', 'Ctrl','Win','Alt','','Alt','Ctrl'];
  const ru = ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','Tab', 'й','ц','у','к','е','н','г','ш','щ','з','х','ъ','backslash','Del','CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter','Shift', 'я','ч','с','м','и','т','ь','б','ю', '.', 'Shift','Ctrl','Win','Alt','Space','Alt','Ctrl'];
  const ruCaps = ['Ё','!','"','№',';','%',':','?','*','(',')','_','+','Backspace','Tab', 'Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','backslash','Del','CapsLock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter','Shift', 'Я','Ч','С','М','И','Т','Ь','Б','Ю', ',', 'Shift','Ctrl','Win','Alt','Space','Alt','Ctrl']
  switch (mode) {
     case 'eng':
      mode='ru';
      changeKeyboard(ru);
      break;
     case 'engCaps':
      mode='ruCaps';
     changeKeyboard(ruCaps);
      break;
    case 'ruCaps':
      mode='engCaps';
      changeKeyboard(engCaps);
      break;
    case 'ru':
      mode='eng';
      changeKeyboard(eng);
      break;
  }
}

const keydown = (event)=> {
  let sign = event.key;
  if (event.shiftKey && event.altKey) {changeLang();}
  if (sign === 'CapsLock') {
    const clickedBtn = document.getElementsByClassName('button')[29];
    clickedBtn.classList.toggle('clicked');
    changeCapsLock();
  } else {
  document.getElementsByTagName('textarea')[0].value+=sign;
  for (let i=0; i<document.getElementsByClassName('button').length; i++) {
    let element = document.getElementsByClassName('button')[i];
    if (element.textContent === event.key) {
      let ev = new Event("mousedown");
      element.dispatchEvent(ev);
    }
    }
  }
}

  const keyup = (event)=> {
     for (let i=0; i<document.getElementsByClassName('button').length; i++) {
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
  let sign = clickedBtn.textContent;
  if (sign === 'CapsLock') {
    clickedBtn.classList.toggle("clicked");
 /*    document.addEventListener("mouseup", function(event){
      event.preventDefault()
    }); */
    changeCapsLock();
  } else {
  document.getElementsByTagName('textarea')[0].value+=sign;
  }
}

const mouseDown = (event)=> {
  const clickedBtn = event.target.closest('.button');
  color = window.getComputedStyle(clickedBtn).getPropertyValue("background-color");
  if (clickedBtn.textContent === 'CapsLock') {
    return; } else {
  clickedBtn.style.backgroundColor= '#ff6500';
    }
  }

const mouseUp = (event)=> {
  const clickedBtn = event.target.closest('.button');
  if (clickedBtn.textContent === 'CapsLock') {
    return; } else {
      clickedBtn.style.backgroundColor= color;
    }

 }

const drawfirstr = () => {
const firstarrbut = ['`',1,2,3,4,5,6,7,8,9,0,'-','=','Backspace'];
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
  const secondarrbut = ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','slash','Del'];
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
  const thirdarrbut = ['CapsLock','a','s','d','f','g','h','j','k','l',';','cav','Enter'];
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
  const fortharrbut = ['Shift','z','x','c','v','b','n','m','.',',','/','Shift'];
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
  const fiftharrbut = ['Ctrl','Win','Alt','Space','Alt','Ctrl'];
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

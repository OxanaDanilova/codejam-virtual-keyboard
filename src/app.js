import './scss/style.scss';
let color = 'orange';
let mode /* = 'eng' */;
if (localStorage.getItem('mode')){
  mode = localStorage.getItem('mode');
} else {
  mode = 'eng';
}
let evCodeArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus','Equal','Backspace','Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash','Delete','CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter','ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ShiftRight','ControlLeft','MetaLeft','AltLeft','Space','AltRight','ControlRight'];

const changeKeyboard = (arr)=> {
    for (let i=0; i<document.getElementsByClassName('button').length; i++) {
    let element = document.getElementsByClassName('button')[i];
    element.textContent = arr[i];
    }
}

const changeCapsLock = ()=> {
  const eng = ['`',1,2,3,4,5,6,7,8,9,0,'-','=','Backspace', 'Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del','CapsLock','a','s','d','f','g','h','j','k','l',';','\'','Enter','Shift','z','x','c','v','b','n','m','.',',','/','Shift','Ctrl','Win','Alt',' ','Alt','Ctrl'];
  const engCaps = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace','Tab','Q','W','E', 'R','T','Y','U','I','O','P','{','}','|','Del','CapsLock','A','S','D','F','G','H','J','K','L',':','"','Enter','Shift','Z','X','C','V','B','N','M','<','>','?','Shift', 'Ctrl','Win','Alt','','Alt','Ctrl'];
  const ru = ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','Tab', 'й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','Del','CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter','Shift', 'я','ч','с','м','и','т','ь','б','ю', '.', 'Shift','Ctrl','Win','Alt',' ','Alt','Ctrl'];
  const ruCaps = ['Ё','!','"','№',';','%',':','?','*','(',')','_','+','Backspace','Tab', 'Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','\\','Del','CapsLock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter','Shift', 'Я','Ч','С','М','И','Т','Ь','Б','Ю', ',', 'Shift','Ctrl','Win','Alt',' ','Alt','Ctrl']
  switch (mode) {
     case 'eng':
      mode='engCaps';
      localStorage.setItem('mode', 'engCaps');
      changeKeyboard(engCaps);
      break;
     case 'engCaps':
      mode='eng';
      localStorage.setItem('mode', 'eng');
     changeKeyboard(eng);
      break;
    case 'ruCaps':
      mode='ru';
      localStorage.setItem('mode', 'ru');
      changeKeyboard(ru);
      break;
    case 'ru':
      mode='ruCaps';
      localStorage.setItem('mode', 'ruCaps');
      changeKeyboard(ruCaps);
      break;
  }
}

const changeLang = ()=> {
  const eng = ['`',1,2,3,4,5,6,7,8,9,0,'-','=','Backspace', 'Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del','CapsLock','a','s','d','f','g','h','j','k','l',';','\'','Enter','Shift','z','x','c','v','b','n','m','.',',','/','Shift','Ctrl','Win','Alt',' ','Alt','Ctrl'];
  const engCaps = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace','Tab','Q','W','E', 'R','T','Y','U','I','O','P','{','}','|','Del','CapsLock','A','S','D','F','G','H','J','K','L',':','"','Enter','Shift','Z','X','C','V','B','N','M','<','>','?','Shift', 'Ctrl','Win','Alt','','Alt','Ctrl'];
  const ru = ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','Tab', 'й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','Del','CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter','Shift', 'я','ч','с','м','и','т','ь','б','ю', '.', 'Shift','Ctrl','Win','Alt',' ','Alt','Ctrl'];
  const ruCaps = ['Ё','!','"','№',';','%',':','?','*','(',')','_','+','Backspace','Tab', 'Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','\\','Del','CapsLock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter','Shift', 'Я','Ч','С','М','И','Т','Ь','Б','Ю', ',', 'Shift','Ctrl','Win','Alt',' ','Alt','Ctrl']
  switch (mode) {
     case 'eng':
      mode='ru';
      localStorage.setItem('mode', 'ru');
      changeKeyboard(ru);
      break;
     case 'engCaps':
      mode='ruCaps';
      localStorage.setItem('mode', 'ruCaps');
     changeKeyboard(ruCaps);
      break;
    case 'ruCaps':
      mode='engCaps';
      localStorage.setItem('mode', 'engCaps');
      changeKeyboard(engCaps);
      break;
    case 'ru':
      mode='eng';
      localStorage.setItem('mode', 'eng');
      changeKeyboard(eng);
      break;
  }
}

const handleFuncButton = (code)=> {
  console.log(code);
  let textarea = document.getElementsByTagName('textarea')[0];
  switch (code) {
    case 'Backspace':
      textarea.value = textarea.value.slice(0, textarea.value.length-1);
     break;
     case 'CapsLock':
        document.getElementsByClassName('button')[29].classList.toggle('clicked');
        changeCapsLock();
        break;
    case 'Tab':
      textarea.value+='\t';
        break;
   case 'Delete':
      textarea.value = textarea.value.slice(0,textarea.selectionStart).concat(textarea.value.slice(textarea.selectionEnd, textarea.value.length));

     break;
     case 'Del':
      textarea.value = textarea.value.slice(0,textarea.selectionStart).concat(textarea.value.slice(textarea.selectionEnd, textarea.value.length));
      break;
     case 'Enter':
      textarea.value+='\n';
        break;
   case 'ShiftLeft'||'ShiftRight'||'ControlLeft'||'MetaLeft'||'AltLeft'||'AltRight'||'ControlRight':
        break;
  }

}

const newEvent = (element)=> {
  let ev = new Event("mousedown");
  element.dispatchEvent(ev);
  ev.stopPropagation();


}

const keydown = (event)=> {
  let index = evCodeArr.indexOf(event.code);
  //let sign = event.key;
  if (event.shiftKey && event.altKey) {
    changeLang();
  } else {
       if (event.code === 'CapsLock' || event.code === 'Backspace' || event.code ==='Tab' || event.code ==='Delete'|| event.code ==='Enter'|| event.code ==='ShiftLeft'|| event.code ==='ShiftRight'|| event.code ==='ControlLeft'|| event.code ==='MetaLeft'|| event.code ==='AltLeft'|| event.code ==='AltRight'|| event.code ==='ControlRight') {
        let element = document.getElementsByClassName('button')[index];
        newEvent(element);
        handleFuncButton(event.code);
      } else {
        if (index) {
          let element = document.getElementsByClassName('button')[index];
          document.getElementsByTagName('textarea')[0].value+=element.textContent;
          newEvent(element);

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

const clickBtn = (event ) => {
  const clickedBtn = event.target.closest('.button');
  let sign = clickedBtn.textContent;
  if (sign === 'CapsLock' || sign === 'Backspace' || sign ==='Tab' || sign ==='Del'|| sign ==='Enter'|| sign ==='Shift'|| sign ==='Ctrl'|| sign ==='Win'|| sign ==='Alt') {
    console.log('attention');
    handleFuncButton(sign);
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
    const secondarrbut = ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del'];
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
    const thirdarrbut = ['CapsLock','a','s','d','f','g','h','j','k','l',';','\'','Enter'];
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
    const fiftharrbut = ['Ctrl','Win','Alt',' ','Alt','Ctrl'];
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



  ///////
  const setKeyboard = ()=> {
      const eng = ['`',1,2,3,4,5,6,7,8,9,0,'-','=','Backspace', 'Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del','CapsLock','a','s','d','f','g','h','j','k','l',';','\'','Enter','Shift','z','x','c','v','b','n','m','.',',','/','Shift','Ctrl','Win','Alt',' ','Alt','Ctrl'];
      const engCaps = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace','Tab','Q','W','E', 'R','T','Y','U','I','O','P','{','}','|','Del','CapsLock','A','S','D','F','G','H','J','K','L',':','"','Enter','Shift','Z','X','C','V','B','N','M','<','>','?','Shift', 'Ctrl','Win','Alt','','Alt','Ctrl'];
      const ru = ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','Tab', 'й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','Del','CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter','Shift', 'я','ч','с','м','и','т','ь','б','ю', '.', 'Shift','Ctrl','Win','Alt',' ','Alt','Ctrl'];
      const ruCaps = ['Ё','!','"','№',';','%',':','?','*','(',')','_','+','Backspace','Tab', 'Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','\\','Del','CapsLock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter','Shift', 'Я','Ч','С','М','И','Т','Ь','Б','Ю', ',', 'Shift','Ctrl','Win','Alt',' ','Alt','Ctrl']
      switch (mode) {
         case 'eng':
         changeKeyboard(eng);
          break;
         case 'engCaps':
          changeKeyboard(engCaps);
          break;
        case 'ruCaps':
          changeKeyboard(ruCaps);
          break;
        case 'ru':
          changeKeyboard(ru);
          break;
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
  textarea.setAttribute('readonly', '');
  textpanel.appendChild(textarea);


  const keyboard = document.createElement('section');
  keyboard.className = 'keyboard';
  document.body.appendChild(keyboard);

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
  setKeyboard();
}

startDraw();

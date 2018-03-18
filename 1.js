// const lang = "qwerty";
const string = "qryte";
const charsArr = string.split("").reverse();
const timerOutput = document.querySelector(".timer");
let userLetters = document.querySelector('.userLetters');

document.querySelector('.btn').onclick =()=> {
  let interval = setInterval(()=>{
  timerOutput.innerHTML++;
  },1000);

  document.querySelector('.templateLetters').innerHTML = `Введите следующие символы: ${charsArr}`;

  let count=0;
  const onKeydown = (event)=> {

    for(var i=0; i<charsArr.length; i++){
      if(event.key === charsArr[i]){
        charsArr.splice(i, 1);
        count++;  
      }  

      if (charsArr.length==0) {
        // console.log('zero');
        userLetters.innerHTML =`Количество верных клавиш в секунду равна ${count/timerOutput.innerHTML}`;
        clearInterval(interval);

        if(localStorage.getItem('theBestAttempt')===null || localStorage.getItem('theBestAttempt')< (count/timerOutput.innerHTML)) {
          localStorage.removeItem('theBestAttempt');
          localStorage.setItem('theBestAttempt', (count/timerOutput.innerHTML));
        }
      }
    }
  }

  window.addEventListener("keydown", onKeydown);
}

if(localStorage.getItem('theBestAttempt')!==null) {
document.querySelector('.bestAttempt').innerHTML = `Рекорд - ${localStorage.getItem('theBestAttempt')} верных клавиш в секунду`;
}














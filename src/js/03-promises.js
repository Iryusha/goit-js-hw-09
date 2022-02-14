import Notiflix from "notiflix";


const formItem = document.querySelector('.form');

formItem.addEventListener('submit', startPromise);


function createPromise(position, newDelay) {
  const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
     
        if (shouldResolve) {
          return resolve({ position, newDelay });
        } else {
          return reject({ position, newDelay });
        }
  })
};

function startPromise(e) {
  e.preventDefault()
  const inputForm = e.currentTarget;

  let delayItem = +inputForm['delay'].value;
  const stepItem = +inputForm['step'].value;
  const amountItem = +inputForm['amount'].value;

  let position = 0;
  
    for (let i = 1; i <= amountItem; i += 1) {
      position = i;
      
      const firstDelay = delayItem;
      let newDelay = delayItem += stepItem;

      createPromise(position, firstDelay, newDelay)
            
        .then(({ position, newDelay }) => {
            
          setTimeout(() => {
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${newDelay}ms`);
          }, newDelay);
        })
    
        .catch(({ position, newDelay }) => {
            
          setTimeout(() => {
            Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${newDelay}ms`);
          }, newDelay);
        })
    }
};

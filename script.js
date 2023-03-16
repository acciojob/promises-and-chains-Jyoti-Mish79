//your JS code here. If required.
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#name').value;
  const age = document.querySelector('#age').value;
  
  if (!name || !age) {
    alert('Please fill out all fields!');
    return;
  }
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve({ name, age });
      } else {
        reject({ name, age });
      }
    }, 4000);
  });
  
  promise.then((obj) => {
      const { name, age } = obj;
      alert(`Welcome, ${name}. You can vote.`);
      return age;
    })
    .then((age) => {
      const newObj = { age };
      alert(`New object with age property: ${JSON.stringify(newObj)}`);
    })
    .catch((obj) => {
      const { name } = obj;
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});

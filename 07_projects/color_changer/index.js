const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    const value = e.target.id;
    switch(value){
      case 'grey':
        body.style.backgroundColor = value;
        break;
      
      case 'white':
        body.style.backgroundColor = value;
        break;

      case 'blue':
        body.style.backgroundColor = value;
        break;

      case 'yellow':
        body.style.backgroundColor = value;
        break;

      default:
        body.style.backgroundColor = 'black';
    }
  });
});
function toggleText() {
  let toggleButton = document.querySelector('.toggle-text-button');
  let textElement = document.getElementById('text');

  toggleButton.addEventListener('click', () => {
    let isTextElementHidden = textElement.hidden;
    textElement.hidden = !isTextElementHidden;
  });
<<<<<<< HEAD
}
=======
}
>>>>>>> 3c399cdf3abb081306b99f9eaf94cf7ecf89dc67



function ReplaceForm() {
  // Three places to customize:

  // Specify the id of the form.
  var IDofForm = "form3";

  // Specify the id of the div containing the form.
  var IDofDivWithForm = "example3";

  // Specify the id of the div with the content to replace the form with.
  var IDforReplacement = "for_replacement_grid";

  // End of customizations.

  // This line submits the form. (If Ajax processed, call Ajax function, instead.)
  document.getElementById(IDofForm).submit();

  // This replaces the form with the replacement content.
  document.getElementById(IDofDivWithForm).innerHTML = document.getElementById(IDforReplacement).innerHTML;
}



document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const playerDisplay = document.querySelector('#player')

  let currentPlayer = 'playerX'

  squares.forEach(square => {
    square.addEventListener('click', clickOutcome)
  })

  function clickOutcome(e) {
    const squareArray = Array.from(squares)
    const index = squareArray.indexOf(e.target)
    playerDisplay.innerHTML = currentPlayer

    if (currentPlayer === 'playerX') {
      squares[index].classList.add('playerX')
      currentPlayer = 'playerO'
    } else {
      squares[index].classList.add('playerO')
      currentPlayer = 'playerX'
    }
  }

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(users => {
      console.log(users)
    })

})





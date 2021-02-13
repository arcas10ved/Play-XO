const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let player = 'X';
let ticktacktoe = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
];

const defaultPlayer = () => {
    rl.question("Default player is X, Do you want to change it, y or n ", function (defaultOrChoose) {
        let choice = defaultOrChoose.toLowerCase();
        if (choice == 'y') {
            setPlayer();
        } else if (choice === 'n') {
            console.log(`Starting player is X`);
            printBoard();
            playTickTacToe();

        } else {
            defaultPlayer();
        }


    });

}

const setPlayer = () => {

    rl.question("Default player is X, Do you want to change it, enter O? ", function (whichPlayer) {

        changePlayer(whichPlayer);
    });

}

const changePlayer = (playerChange) => {

    let mov = playerChange.toUpperCase();

    if (mov === 'O' || mov === 'X') {
        console.log(`Starting player is ${mov}`)
        player = mov;
        printBoard();
        playTickTacToe();
    } else {
        setPlayer();
    }

}

const playTickTacToe = () => {
    let continePlay = false;
    for (i = 0; i < ticktacktoe.length; i++) {
        if (ticktacktoe[i] === ' ') {
            continePlay = true;
        }
    }

    if (continePlay === true) {
        rl.question("Play Game ? ", function (movve) {
            gameplayer(movve)
        });

    }
};

const gameplayer = (move) => {

    let moveToCheck = parseInt(move) - 1;
    let i;
    for (i = 0; i < ticktacktoe.length; i++) {

        if (moveToCheck == i && ticktacktoe[i] === ' ') {

            ticktacktoe[i] = player;
            if (player === 'X') {
                player = 'O';
            } else if (player === 'O') {
                player = 'X'
            }


        } else {
            playTickTacToe();
        }
    }

    console.log('\n');
    printBoard();
    const winner = calculateWinner();
    if (winner != ' ') {
        console.log(`Winner is ${winner}`)
        process.exit(0);
    }
    playTickTacToe();

}

const calculateWinner = () => {

    if (ticktacktoe[0] == ticktacktoe[1] && ticktacktoe[0] == ticktacktoe[2]) {
        return ticktacktoe[0];

    } else if (ticktacktoe[3] == ticktacktoe[4] && ticktacktoe[3] == ticktacktoe[5]) {
        return ticktacktoe[3];

    } else if (ticktacktoe[6] == ticktacktoe[7] && ticktacktoe[6] == ticktacktoe[8]) {
        return ticktacktoe[6];

    } else if (ticktacktoe[0] == ticktacktoe[3] && ticktacktoe[0] == ticktacktoe[6]) {
        return ticktacktoe[0];

    } else if (ticktacktoe[1] == ticktacktoe[4] && ticktacktoe[1] == ticktacktoe[7]) {
        return ticktacktoe[1];

    } else if (ticktacktoe[2] == ticktacktoe[5] && ticktacktoe[2] == ticktacktoe[8]) {
        return winner = ticktacktoe[2];

    } else if (ticktacktoe[0] == ticktacktoe[4] && ticktacktoe[0] == ticktacktoe[8]) {
        return ticktacktoe[0];
    } else if (ticktacktoe[2] == ticktacktoe[4] && ticktacktoe[2] == ticktacktoe[6]) {
        return ticktacktoe[2];
    }

    return ' ';
}


const printBoard = () => {

    let line = "";
    for (let i = 1; i < 10; i++) {
        line += ticktacktoe[i - 1] + ' | ';

        if (i % 3 === 0) {
            console.log(line);
            console.log('____________')
            line = "";
        }

    }
}

printBoard();
defaultPlayer();
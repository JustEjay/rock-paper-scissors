function computerPlay() {
    num =  Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return 'rock';
            break;
        case 1: 
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return 'invalid selection';
    }
}
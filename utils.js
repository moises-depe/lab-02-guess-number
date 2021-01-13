export function calculateNumber(guess, correctNumber){
    if (guess > correctNumber) return 1;
    if (guess < correctNumber) return -1;
    if (guess === correctNumber) return 0;
}


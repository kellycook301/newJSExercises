function randomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
}

var counter = 0;

while ( counter < 10 ) {
    // generates a random number from 1-6
    var randNum = randomNumber(6);
    // writing to the dom and adds a space afterwards
    document.write(randNum + ' ');
    // adds 1 to the counter variable
    counter += 1;
    // checks the while condition and checks to see if the number is less than 10
    // the program will end once the counter is greater than 10
}
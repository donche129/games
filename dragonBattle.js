/*
A game of chance where you must slay a dragon with 4 health
missing at all means you lose
variables:
slaying will determine if the game is over or not
youHit will randomly chose 1 or 0 to see it you hit
damageThisRound determines damage done from 1 to 5
totalDamage will store all the damage dealt during the game
*/
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

/*
game will continue until slaying is false
if the player hits, calculate damage dealt, if not, the player loses
if the player has dealt 4 damage or greater in totalDamage, the game ends
if less than 4, add damage done to totalDamage and calculate youHit again
*/
while (slaying) {
    if (youHit) {
        console.log("You hit the dragon for " + damageThisRound + " damage!");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            slaying = false;
            console.log("You slew the dragon!")
        }
        else {
            console.log("The dragon has " + (4 - totalDamage) + " health left!");
            console.log("You strike again!");
            youHit = Math.floor(Math.random() * 2);
        }
    }
    else {
        console.log("You missed the dragon!");
        slaying = false;
        console.log("The dragon has defeated you!");
    }
}
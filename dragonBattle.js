var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while (slaying) {
    if (youHit) {
        console.log("You hit the dragon for " + damageThisRound + " damage!");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            slaying = false;
            console.log("You slew the dragon!")
        }
        else {
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
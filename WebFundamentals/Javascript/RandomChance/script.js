var quarters = 100;

function randomChance(quarters) {
    var win = 50;
    while (quarters > 0) {

        var chance = Math.floor(Math.random() * 100) + 1;
        var coins = Math.floor(Math.random() * 101) + 50;

        if (win == chance) {
            quarters += coins - 1;
            return quarters;
        } else {
            quarters -= 1;
            if (quarters == 0) {
              return quarters;
            }
        }
    }
}

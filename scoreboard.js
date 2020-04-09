class Scoreboard {
    constructor() {
        // empty array with all distances
        this.arrDistance = [];
        
        console.log(this.arrDistance);
        // sum of Distance
        //this.totalSumDistance =;
        // divide sum with length of array
        //this.avgDistance =;
    }
    addNewEnemy () {
        if(game.enemy.length > 0) {
            game.enemy.forEach(enemy => {
                if(enemy.distance.length >= 8 ) {
                    this.arrDistance.push(enemy.distance/enemy.distance.length)
                }
                //console.log("Hello");
                //console.log();
            })
            //console.log("arrDistance", this.arrDistance)
        }

        let avgDistanceTotal = 0;

        this.arrDistance.forEach(element => {
            //console.log(element)
        })
        for (let i=0; i<this.arrDistance.length; i++) {
            avgDistanceTotal = avgDistanceTotal + this.arrDistance[i];
        }
        //console.log(avgDistanceTotal);

        // let avgDistanceTotal = this.arrDistance.reduce(function(a, b) {
        //     return (a + b)/this.arrDistance.length-1;
        // }, 0);
        // console.log (avgDistanceTotal);
    }
}
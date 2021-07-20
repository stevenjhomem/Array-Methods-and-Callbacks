const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
// const worldCup2014TeamInfo=fifaData.filter(function(item){
//     return item.Year === 2014;
// })


// //(a) Home Team name for 2014 world cup final

// const worldCup2014FinalTeamsInfo = worldCup2014TeamInfo.filter(function(item){
//     return item.Stage==="Final";
// });

// console.log(worldCup2014FinalTeamsInfo);

// console.log("-----------------------------------------------------");

// const worldCup2014FinalHomeTeam = worldCup2014FinalTeamsInfo.map(function(item){
//     return {"Home Team Name": item["Home Team Name"]};
// });

// console.log(worldCup2014FinalHomeTeam);
// // (b) Away Team name for 2014 world cup final

// const worldCup2014FinalAwayTeam = worldCup2014FinalTeamsInfo.map(function(item){
//     return {"Away Team Name": item["Away Team Name"]};
// });

// console.log(worldCup2014FinalAwayTeam);


// //(c) Home Team goals for 2014 world cup final

// const worldCup2014FinalHomeTeamGoals = worldCup2014FinalTeamsInfo.map(function(item){
//     return {"Home Team Goals": item["Home Team Goals"]};
// });

// console.log(worldCup2014FinalHomeTeamGoals);

// //(d) Away Team goals for 2014 world cup final

// const worldCup2014FinalAwayTeamGoals = worldCup2014FinalTeamsInfo.map(function(item){
//     return {"Away Team Goals": item["Away Team Goals"]};
// });

// console.log(worldCup2014FinalAwayTeamGoals);

// //(e) Winner of 2014 world cup final */

// const worldCup2014FinalWinner = worldCup2014FinalTeamsInfo.map(function(item){
//     return {"Match Result": item["Win conditions"]};
// });

// console.log(worldCup2014FinalWinner);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {

    const finalStageFilter = data.filter(function(item){
        return item.Stage==="Final";
    });
    return finalStageFilter;
};

console.log(getFinals(fifaData));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array) {

    const years = getFinals(array).map(function(item){
        return item["Year"];
    });

    return years;
}

console.log(getYears(fifaData,getYears));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners() {
    

}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(/* code here */) {
    /* code here */
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(/* code here */) {
   /* code here */
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}

// Rover Object Goes Here
let rover = {
    x:0,
    y:0,
    direction: "N",
    travelLog: []
  };
  
  let grid = [
    ["e", "e", "e", "o", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e", "o", "e"],
    ["o", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "o", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "o", "e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "o", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e", "o", "e"]
  ]
  
  if((grid[0][3]) ||
  (grid[2][8]) ||
  (grid[3][0]) ||
  (grid[4][5]) ||
  (grid[7][1]) ||
  (grid[8][6]) ||
  (grid[9][8])
  ){ grid === false;
  }
  
  // commands for the rover to turn left
  
  function turnLeft(rover, command){
    if(rover.direction === "N"){
      rover.direction = "W";
      console.log("turnLeft was called!");
      console.log(`The direction is: ${rover.direction}`);
    } else if(rover.direction === "W"){
      rover.direction = "S";
      console.log("turnLeft was called!");
      console.log(`The direction is: ${rover.direction}`);
    } else if(rover.direction === "S"){
      rover.direction = "E";
      console.log("turnLeft was called!");
      console.log(`The direction is: ${rover.direction}`);
    } else if(rover.direction === "E"){
      rover.direction = "N";
      console.log("turnLeft was called!");
      console.log(`The direction is: ${rover.direction}`);
    } else{
      console.log("You can't go on with the rover.");
    } 
    console.log(`The rover has positions: x=${rover.x}, y=${rover.y}`); 
  }
  
  // commands for the rover to turn right
  
  function turnRight(rover, command){
    if(rover.direction === "N"){  
      rover.direction = "E"; 
      console.log("turnRight was called!");
      console.log(`The direction is: ${rover.direction}`);
    }else if(rover.direction === "E"){
      rover.direction = "S";
      console.log("turnRight was called!");
      console.log(`The direction is: ${rover.direction}`);
    } else if(rover.direction === "S"){
      rover.direction = "W";
      console.log("turnRight was called!");
      console.log(`The direction is: ${rover.direction}`);
    } else if(rover.direction === "W"){
      rover.direction = "N";
      console.log("turnRight was called!");
      console.log(`The direction is: ${rover.direction}`);
    } else{
      console.log("You can't go on with the rover.");
    }
    console.log(`The rover has positions: x=${rover.x}, y=${rover.y}`);
  }
  
  // commands for the rover to continue forward  
  
function moveForward(rover){
    if (rover.y > 0 && rover.direction === "N") {
      if (grid[rover.y - 1][rover.x] !== "o") {
            rover.y --;
            rover.travelLog.push([rover.x, rover.y]);
            console.log("moveForward was called!");
            console.log(`The direction is: ${rover.direction}`);  
      } else console.log("You can't go on with the rover, because it's going to hit an obstacle!")
    } else if (rover.y < 10 && rover.direction === "S") {
        if (grid[rover.y + 1][rover.x] !== "o") {
            rover.y ++;
            rover.travelLog.push([rover.x, rover.y]);
            console.log("moveForward was called!");
            console.log(`The direction is: ${rover.direction}`);
        } else console.log("You can't go on with the rover, because it's going to hit an obstacle!")
    } else if (rover.x > 0 && rover.direction === "W") {
        if(grid[rover.y][rover.x - 1] !== "o") {
            rover.x --;
            rover.travelLog.push([rover.x, rover.y]);
            console.log("moveForward was called!");
            console.log(`The direction is: ${rover.direction}`);
        } else console.log("You can't go on with the rover, because it's going to hit an obstacle!")
    } else if (rover.x < 10 && rover.direction === "E") {
         if (grid[rover.y][rover.x + 1] !== "o") {
            rover.x ++;
            rover.travelLog.push([rover.x, rover.y]);
            console.log("moveForward was called!");
            console.log(`The direction is: ${rover.direction}`);
        } else console.log("You can't go on with the rover, because it's going to hit an obstacle!")
    } else {
        console.log("entrou no else final")
        if (rover.x === 0 || rover.y === 0 || rover.x === 9 || rover.y === 9) {
           console.log("You can't go on with the rover, because it's going out of the grid!");
        }
     } console.log(`The rover has positions: x=${rover.x}, y=${rover.y}`);
}

  
  // function for the rover to come back
  
  function moveBackward(rover){
    if(rover.y >= 0 && rover.y < 10 && rover.direction === "N"){
      if(grid[rover.y +1][rover.x] !== "o"){
        rover.y ++;
        rover.travelLog.push([rover.x, rover.y]);
        console.log("moveBackward was called!");
        console.log(`The direction is: ${rover.direction}`);
      } else console.log("You can't go on with the rover, because it's going to hit an obstacle!")
    } else if(rover.y >= 0 && rover.y < 10 && rover.direction === "S"){
      if(grid[rover.y -1][rover.x] !== "o"){
        rover.y --;
        rover.travelLog.push([rover.x, rover.y]);
        console.log("moveBackward was called!");
        console.log(`The direction is: ${rover.direction}`);
      } else console.log("You can't go on with the rover, because it's going to hit an obstacle!")
    } else if(rover.x >= 0 && rover.x < 10 && rover.direction === "W"){
      if(grid[rover.y][rover.x +1] !== "o"){
        rover.x ++;
        rover.travelLog.push([rover.x, rover.y]);
        console.log("moveBackward was called!");
        console.log(`The direction is: ${rover.direction}`);
      } else console.log("You can't go on with the rover, because it's going to hit an obstacle!")
    } else if(rover.x >= 0 && rover.x < 10 && rover.direction === "E"){
      if(grid[rover.y][rover.x -1] !== "o"){
        rover.x --;
        rover.travelLog.push([rover.x, rover.y]);
        console.log("moveBackward was called!");
        console.log(`The direction is: ${rover.direction}`);
      } else console.log("You can't go on with the rover, because it's going to hit an obstacle!")
    } else {
      if(rover.x < 0 && rover.y > 10) {
        console.log("You can't go on with the rover, because it's going out of the grid!");
      } 
    }
    console.log(`The rover has positions: x=${rover.x}, y=${rover.y}`);
}
  
  // function for the comands f r l 
  
  function command(command){
    for(let i = 0; i < command.length; i++){
      switch(command[i]){
        case "f": // forward
          moveForward(rover);
          break;
        case "r": // right
          turnRight(rover);
          break;
        case "l": // left
          turnLeft(rover);
          break;
        case "b": // backward
          moveBackward(rover);
          break;
      } 
    }
    console.log(rover.travelLog);
  } 
  
  command(" "); // put commands "r", "l", "f", "b"
  console.log(`The final direction is: ${rover.direction}`);
  
  
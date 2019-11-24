var position = [0,0];
var snake1 = 15;
var falltoposition1 = 5;
var snake2 = 23;
var falltoposition2 = 16;
var ladder1 = 8;
var jumptoposition1 = 15;
var ladder2 = 19;
var jumptoposition2 = 24;

function Rolldie(player){
outputs = document.getElementById("output");
var rolldie = parseInt( 1 + (Math.random() * 6));
position[player-1] += rolldie;
var tripOver = "";
if(position[player-1]< 25)
{
    if(position[player-1]=== snake1)
      {
        position[player-1] = falltoposition1;
        tripOver = ", You trip over on a snake, go back to position ";
      }
      else if (position[player-1]=== snake2)
        {
          position[player-1] = falltoposition2;
          tripOver = ", You trip over on a snake, go back to position ";
        }
      else if (position[player-1]=== ladder1)
          {
          position[player-1] = jumptoposition1;
          tripOver = ", You trip over a ladder, move forward to position ";
          }
      else if (position[player-1]=== ladder2)
              {
              position[player-1] = jumptoposition2;
              tripOver = ", You trip over a ladder, move forward to position ";
              }
      else
      tripOver = ", move to position ";

}

if(position[player-1] >= 25){
outputs.innerHTML += "Player "+ player + " rolls a die: " + rolldie + " \n Player "+ player +" WON!!!\n CONGRATSSS PLAYER "+player+" !!!!" +"\n ...~~~~Game Over~~~~...";
inputs = document.getElementById("button1");
inputs.setAttribute("disabled");
inputs = document.getElementById("button2");
inputs.setAttribute("disabled");

}
else
outputs.innerHTML += "Player "+ player + " rolls a die: " +
rolldie + tripOver + position[player-1] + "\n";
}

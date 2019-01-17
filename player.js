//generic stats object

let p1Name = "Gnar";

let p1Stats = {
  hp:50,
  mp:150,
  atk:60,
  def:20,
  sp:40

}

let p2Name = "Sion";

let p2Stats = {
  hp:150,
  mp:50,
  atk:20,
  def:60,
  sp:40

}

let battle = {

  attack: function(){},
  defend: function(){}

}



















let p1Pack = [2,2,1,0,1,1,0,0];


//Assembling your player.

let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1Moves,
  use: function(){
    //fill in with a ton of if and else ifs
  },
  pack: myPack,
  battle: {
    attack: function(mv){
      //fill in logic
    },
    defend: function(atkmv){
      //fill in logic
    }
  }
}

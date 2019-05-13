//insert "diceGenerator.js" here !

//common rpg dices:

class _1d4 extends Dice {
  constructor() {
    let numbers   = [ 1, 2, 3, 4 ];
    let frequency = [ 1, 1, 1, 1 ];
    super(numbers, frequency);
    
    this.nickname = "1d10";
  }
}
class _1d6 extends Dice {
  constructor() {
    let numbers   = [ 1, 2, 3, 4, 5, 6 ];
    let frequency = [ 1, 1, 1, 1, 1, 1 ];
    super(numbers, frequency);
    
    this.nickname = "1d10";
  }
}
class _1d8 extends Dice {
  constructor() {
    let numbers   = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
    let frequency = [ 1, 1, 1, 1, 1, 1, 1, 1 ];
    super(numbers, frequency);
    
    this.nickname = "1d10";
  }
}
class _1d10 extends Dice {
  constructor() {
    let numbers   = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    let frequency = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
    super(numbers, frequency);
    
    this.nickname = "1d10";
  }
}
class _1d12 extends Dice {
  constructor() {
    let numbers   = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
    let frequency = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  1,  1  ];
    super(numbers, frequency);
    
    this.nickname = "1d10";
  }
}
class _1d20 extends Dice {
  constructor() {
    let numbers   = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
    let frequency = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1  ];
    super(numbers, frequency);
    
    this.nickname = "1d20";
  }
}
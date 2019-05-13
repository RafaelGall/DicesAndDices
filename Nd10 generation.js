//insert "diceGenerator.js" here !

class _1d10 extends Dice {
  constructor() {
    let numbers   = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    let frequency = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
    super(numbers, frequency);
    
    this.nickname = "1d10";
  }
}

let dice_1d10 = new _1d10();
let dice_2d10 = combine_dice(dice_1d10, dice_1d10);
let dice_3d10 = combine_dice(dice_2d10, dice_1d10);
let dice_4d10 = combine_dice(dice_3d10, dice_1d10);
let dice_5d10 = combine_dice(dice_4d10, dice_1d10);
let dice_6d10 = combine_dice(dice_5d10, dice_1d10);

/*
This series of dice trowing inspire to do the codes in the first place.

I wanted to draw a graph of 6d10 dice trowing but do not have the numbers,
first I would write all cases manualy, but when you get 6d10 there is 1000000 possible results,
so i decided to automate via coding.

I pick up javascript and there it is this repository.

*/

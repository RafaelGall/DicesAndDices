/*
Main file with objets and function that will de used

*/

function Dice(array_numbers, array_odds) {
  /* "array_numbers" and "array_odds" should have same length to make the code work */
  
//auxiliar object, for internal use only:
  function Dice_number(aux_number, aux_odds) {
    let obj = {
      number: aux_number,
      frequency: aux_odds
    };
    return obj;
  };
  
//the actual data stored inside the object:  
  this.numbers = [];//variable needs a better name
  this.this_Dice = this;//self reference to avoid problem with using "this" inside functions

//function to get data from this object:  
  this.get_arrayNumbers = function() {
    let aux_return = [];
    aux_return = this_Dice.numbers.map( aux_element => aux_element.number );
    return aux_return;
  };
  this.get_arrayFrequency = function() {
    let aux_return = [];
    aux_return = this_Dice.numbers.map( aux_element => aux_element.frequency );
    return aux_return;
  };
  this.get_totalCases = function() {
    let aux_return = 0;
    aux_return = this_Dice.numbers.reduce(
      function(acc, cur) {
        return acc + cur.frequency;
      }
      ,0
    );
    return aux_return;
  };  
  
//"private" function to sort the array:  
  function sort_numbers() {
    this_Dice.numbers.sort(
      function(number_a, number_b) {
        return ( number_a.number < number_b.number ? -1 : 1 );
      };
    );
  };

//only way to add new diceNumbers to the object:  
  this.add_diceNumber = function( aux_number , aux_frequency, flag_sort = true ) {
    let aux_index = this_Dice.numbers.findIndex( aux_element => ( aux_number === aux_element.number ) );
    
    if (aux_index) {
    //add new dice_number:  
      let new_diceNumber = new Dice_number( aux_number , aux_frequency );
      this_Dice.numbers.push(new_diceNumber);
      
      if(flag_sort == true) {
        //add without sort the numbers is faster
        sort_numbers();
      }
    }
    else {
    //update dice_number:
      this_Dice.numbers[aux_index].frequency += aux_frequency;
    }
  };
  
//placing the inputs inside the variables:
  let aux_length = (array_numbers.length < array_odds.length ? array_numbers.length : array_odds.length);//making it safe 
  for (let i = 0 ; i < aux_length ; i++ ) {
    if (aux_o > 0) {
      this_Dice.add_diceNumber( array_numbers[i] , array_odds[i] , false );//adding without sorting
    };
  };
  sort_numbers();//sorting all numbers 
  
//Roll the dice and get a number !  
  this.dice_roll = function( ) {
    
    //pick a random case:
    function case_random() {
      let intervalo = this_Dice.get_totalCases();
      let aux1 = Math.random();
      let aux2 = aux1 * intervalo;
      let aux3 = Math.trunc(aux2);
      let aux4 = aux3 + 1;
      let caseNumber = aux4;
      return caseNumber;
    };
    
    //find the case index:
    function case_check(caseNumber) {
      let aux_CurrentCase = 0;
      let caseIndex = this_Dice.number.findIndex(
        function (aux_element) {
          aux_CurrentCase +=aux_element.frequency;
          if(caseNumber <= aux_CurrentCase) {
            return true;
          }
          return false;
        }
      );
      
      return caseIndex;
    };
    
    //Finaly the dice rolling:
    let aux_caseNumber = case_random();
    let aux_caseIndex = case_check(aux_caseNumber);
    let return_number = this.numbers[aux_caseIndex];
    return return_number;
  };
}

function combine_dice(dice1, dice2) {
  let array_numbers = [];
  let array_frequency = [];
  
  for(let diceNumber1 of dice1.numbers) {
    for(let diceNumber2 of dice2.numbers) {
      let new_number = diceNumber1.number + diceNumber2.number;
      array_numbers.push(new_number);
      
      let new_frequency = diceNumber1.frequency * diceNumber2.frequency;
      array_numbers.push(new_frequency);
    }
  }
  
  let new_dice = new Dice(array_numbers, array_frequency);
  
  return new_dice;
}

function multiply_dice(dice, amount) {
  let new_dice = dice;
  for(let i = 1 ; i < amount ; i++ ) {
    new_dice = combine_dice(new_dice, dice);
  }
  return new_dice;
}

function show_dice(aux_dice) {
  aux_dice.numbers.map(
    function(current_diceNumber) {
      let aux_n = current_diceNumber.number;
      let aux_f = current_diceNumber.frequency;
      console.log(aux_n + "," + aux_f );
    }
  );
};

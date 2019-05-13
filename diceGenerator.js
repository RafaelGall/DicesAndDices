/*
Main file with objets and function that will de used

*/

class Dice {
  constructor(array_numbers , array_frequency) {
    //array_numbers ans array_frequency must have equal index numbers.
    
    //create a new array "aux_sort" to help sort data later.
    let aux_sort;
    aux_sort = array_numbers.map( 
      function(number, index){ return index; } 
    );
    aux_sort = aux_sort.sort(
      function(aux_a , aux_b){
        let number_a = array_numbers[aux_a];
        let number_b = array_numbers[aux_b];
        
        if(number_a < number_b){ return -1; } 
        else { return  1; }
      }
    );
    
    this.numbers = aux_sort.map( 
      function(aux_index){ return array_numbers[aux_index]; } 
    );
    
    this.frequency = aux_sort.map( 
      function(aux_index){ return array_frequency[aux_index]; } 
    )
    
    this.totalCases = array_frequency.reduce(
      function(acc, cur) { return acc += cur; }
      ,0
    );
  }
}

function dice_roll( aux_dice ) {
  //pick a random case:
  function case_random() {
    let intervalo = aux_dice.totalCases;
    let aux1 = Math.random();
    let aux2 = aux1 * intervalo;
    let aux3 = Math.trunc(aux2);
    let aux4 = aux3 + 1;
    console.log(aux4);
    let caseNumber = aux4;
    return caseNumber;
  }
  
  //find the case index
  function case_check(caseNumber) {
    let caseIndex = -1;
    let aux_parcial = aux_dice.frequency.reduce(
      function(acc, cur, idx) {
        if(caseIndex == -1) {
          let new_acc = acc + cur;
          if(new_acc >= caseNumber) { caseIndex = idx; }
          return new_acc;
        }
        else {
          return acc;
        }
      }
      ,0
    );
    return caseIndex;
  }
  
  let aux_caseNumber = case_random();
  let aux_caseIndex = case_check(aux_caseNumber);
  return aux_dice.numbers[aux_caseIndex];
}

function combine_dice(dice1, dice2) {
  let numbers = [];
  let frequency = [];
  function add_case(array_numbers, array_frequency, number, frequency) {
    let aux_index = array_numbers.indexOf(number);
    if( aux_index == -1) {
      array_numbers.push(number);
      array_frequency.push(0);
      aux_index = array_numbers.indexOf(number);
    }
    array_frequency[aux_index] += frequency;
  }

  for(let i = 0 ; i < dice1.numbers.length ; i++) {
    for(let j = 0 ; j < dice2.numbers.length ; j++){
      let new_number = dice1.numbers[i] + dice2.numbers[j];
      let new_frequency = dice1.frequency[i] * dice2.frequency[j];
      
      add_case(numbers,frequency, new_number, new_frequency);
      
    }
  }
  
  let new_dice = new Dice(numbers, frequency);
  return new_dice;
}

// All valid credit card numbers
const valid1 = '4539677908016808'; //[4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]; //result is false
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]; //result is false
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]; //result is false
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Add your functions below:
const validateCred = (array) => {
    const testArray = [];
    let sum = 0;
    let multArray =0;
    for(i =array.length-1; i >=0; i--){
            if((array.length-1)%2 !==0){
                if(i === array.length-1)
                testArray[i] = array[i];
                else if (i <array.length-1){
                    if( i%2 ===0){
                        multArray = array[i]*2;
                        if(multArray >9)
                            testArray[i] = multArray - 9;
                        else if(multArray < 9)
                    testArray[i] = multArray;
                    }
                    else if(i%2 !== 0)
                        testArray[i] = array[i];
                
                }
            }
            else if((array.length-1)%2===0){
                if(i === array.length-1)
                testArray[i] = array[i];
                else if (i <array.length-1){
                    if( i%2 !==0){
                        multArray = array[i]*2;
                        if(multArray >9)
                            testArray[i] = multArray - 9;
                        else if(multArray < 9)
                            testArray[i] = multArray;
                    }
                    else if(i%2 === 0)
                        testArray[i] = array[i];
            }
        }
    }
    for(i = 0; i < array.length ; i++){
        sum += testArray[i];
    }
   // console.log('The sum is: ' +sum);
   //console.log('testArray values: ' + testArray);
    if(sum % 10 === 0)
    return true;
    else
    return false;
}

const findInvalidCards = (array) => {
     const invalidArray = [];

        array.forEach(element => {
            if(!validateCred(element)){
                invalidArray.push(element);
            }
        })
        return invalidArray;
}

const idInvalidCardCompanies = (array) => {

    const invalidCardNums = findInvalidCards(array);
    const cardCompanies = [];
    let visaExist = 0;
    let mastercardExist =0;
    let amexExist = 0;
    let discoverExist = 0;

    invalidCardNums.forEach(element => {
        if(element[0]===3)
        cardCompanies.push('Amex (American Express)');
        else if(element[0] === 4)
        cardCompanies.push('Visa');
        else if(element[0] === 5)
        cardCompanies.push('Mastercard');
        else if(element[0] === 6)
        cardCompanies.push('Discover');
        else
        return 'Company not found';
    })
   
    for(i=0; i< cardCompanies.length; i++){
        if(cardCompanies[i] ==='Visa')
            visaExist++;
            
        if(visaExist > 1){
           // console.log('im in the visaExist checker. i counter is: ' + i);
            cardCompanies.splice(i,1);
        }
    }
    for(i=0; i< cardCompanies.length; i++){
        if(cardCompanies[i] ==='Mastercard')
            mastercardExist++; 
        if(mastercardExist > 1)
            cardCompanies.splice(i,1);
    }
    for(i=0; i< cardCompanies.length; i++){
        if(cardCompanies[i] ==='Discover')
            discoverExist++; 
        if(discoverExist > 1)
            cardCompanies.splice(i,1);
    }
    for(i=0; i< cardCompanies.length; i++){
        if(cardCompanies[i] ==='Amex (American Express)')
            amexExist++; 
        if(amexExist > 1)
            cardCompanies.splice(i,1);
    } 

    return cardCompanies;
}
const stringConvert = (string) => {

    const numberArray = string.split('');

    return numberArray;


}

//console.log(validateCred(mystery1));
//console.log(validateCred(mystery2));
//console.log(validateCred(mystery3));
//console.log(validateCred(mystery4));
//console.log(validateCred(mystery5));
//console.log(findInvalidCards(batch));
//console.log(idInvalidCardCompanies(batch));
console.log(stringConvert(valid1));

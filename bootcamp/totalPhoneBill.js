export default function totalPhoneBill(string){
    let data = string.toLowerCase().split(',');
    let total=0;
     console.log(data);
     for(let i=0;i<data.length;i++){
      if(data[i].includes('call')){
         total += 2.75;
      }else if(data[i].includes('sms')){
         total += 0.65;
       }
       else {
        return "Invalid input: Only 'call' and 'sms' are allowed separated by a comma.";
    }
     } return (`Your total phone bill is R${total.toFixed(2)}`);
   }
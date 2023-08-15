export default function enoughAirtime(string,integer){
  let arr=string.toLowerCase().split(',');
  let total =0;
   for(let i=0;i<arr.length;i++){
    const item = arr[i].trim();
     if(item.includes("call")){
        total+= 1.88;
     }
     else if(item.includes("data")){
       total += 12;
     }
     else if(item.includes("sms")){
       total+= 0.75;
     }
     else if(item !=='sms' || item !=='data' || item !=='call'){
      return "Invalid input: The projected data usage should consist only of 'call', 'data' or 'sms' separated by commas.";
    }
     
   }
   
     if(total<integer){
       return "Sufficient funds: After your projected usage you will still have R"+(integer-total).toFixed(2)+" worth of airtime.";
       }
      else if(total==integer){
        return "Sufficient funds: After your projected usage you will have R0.00 worth of airtime." 
      } 
      else {
         return "Insufficient funds: R"+(total-integer).toFixed(2)+" worth of additional airtime is required.";
       }
} 
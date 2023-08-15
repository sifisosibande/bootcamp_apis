document.addEventListener("alpine:init", () => {
    Alpine.data('container', ()=>({
      sentence : "",
      button1 : true,
      longestWord: '',
      shortestWord:'',
      wordCount: '',
      answer1Show: false,

      //Word Game
      wordGame(){
        axios.get(`https://bootcamp-apis-8kz9.onrender.com/api/word_game?sentence=${this.sentence}`).then((result) => {
          this.longestWord = `The longest word is, ${result.data.longestWord}.`;
          this.shortestWord = `The shortest word is, ${result.data.shortestWord}.`;
          this.wordCount = `The word count = ${result.data.sum}.`;
          this.answer1Show = true;
          this.sentence = '';
          this.button1 = true;
          setTimeout(()=>{
            this.sentence ='';
            this.longestWord ='';
            this.shortestWord ='';
            this.wordCount = '';
            this.answer1Show = false;
          },5000);

      })
      },
      reset1(){
        this.sentence ='';
        this.longestWord ='';
        this.shortestWord ='';
        this.wordCount = '';
        this.answer1Show = false;
      },

      //Total phone bill
      bill:'',
      answer2:'',
      showBill:false,
      showBillInput:true,
      button2:true,
      totalPhoneBill(){
        axios.post('https://bootcamp-apis-8kz9.onrender.com/api/phonebill/total', {
          bill: this.bill
        }).then((result)=>{
           this.answer2 = result.data.total;
           this.bill = '';
           this.showBill = true;
           this.showBillInput = false;
           this.button2 = true;
           setTimeout(()=>{
            this.bill = '';
            this.answer2 = '';
            this.showBill=false;
            this.showBillInput=true;
           },5000)
        }).catch((error) => {
          console.error("An error occurred:", error);
          // Handle the error and provide feedback to the user
      });
      },

      prices:'',
      showPrices:false,
      displayButton:false,
      displayPrices(){
          axios.get('https://bootcamp-apis-8kz9.onrender.com/api/phonebill/prices').then((result)=>{
              this.prices = `A call cost R${result.data.call} and a sms cost R${result.data.sms}`;
              this.showPrices = true;
              this.showBillInput =false;
              this.bill = '';
              this.showBill = true;
              this.showBillInput = false;
              this.button2 = true;
              this.disableShowMenu=true;
              setTimeout(()=>{
                 this.prices = '';
                 this.showPrices = false;
                 this.showBillInput =true;
                 this.disableShowMenu=false; 
              },5000)
          });
      },

      newPrice:'',
      type:'',
      showInputs:false,
      submitChangePrice: false,
      showChangePrice: true,
      answer3:'',
      showAnswer3:false,
      disableShowMenu:false,
      showChanges(){
        this.prices = ''; // Reset the prices
        this.showInputs = true; // Toggle the showInputs property
        this.showBillInput = false; // Set showBillInput to false
        this.showChangePrice = false; // Toggle the showChangePrice property
        this.submitChangePrice = true; // Toggle the submitChangePrice property
        this.button2 = true; // Set button2 to true
        this.displayButton = true; // Set displayButton to true
    }
    ,
      changePrice(){
        axios.post('https://bootcamp-apis-8kz9.onrender.com/api/phonebill/price', {
            newPrice: this.newPrice,
            type: this.type
        })
        .then((result) => {
          if(result.data.status === 'error'){
            this.answer3 = result.data.message;
            this.showBillInput = false;
            this.showInputs = true;
            this.newPrice = '';
            this.type = '';
            this.showAnswer3 = true;
            setTimeout(()=>{
              this.answer3='';
              this.showAnswer3='';
            },4500);
          }else if(result.data.status === 'success'){
            this.answer3 = result.data.message;
            this.showBillInput = false;
            this.showInputs = false;
            this.showAnswer3 = true;
            this.showChangePrice = true; // Toggle the showChangePrice property
            this.submitChangePrice = false; 
            this.newPrice = '';
            this.type = '';
            setTimeout(()=>{
              this.answer3='';
              this.showAnswer3='';
              this.showBillInput = true;
              this.displayButton = false;
            },4500);
          }
        })
    }
    ,
      reset3(){
        this.newPrice='';
        this.type='';
        this.showInputs=false;
        this.submitChangePrice= false;
        this.showChangePrice= true;
        this.answer3='';
        this.showBillInput=true;
        this.bill='';
        this.button2 = true;
        this.answer2='';
        this.answer3='';
        this.displayButton = false;
        this.prices = '';
        this.disableShowMenu=false; 
      },

      //Enough Airtime
      dataUsage:'',
      airtimeBudget:'',
      answer4:'',
      showAnswer4:false,
      showLastInputs:true,

      enoughAirtime(){
        axios.post('https://bootcamp-apis-8kz9.onrender.com/api/enough', {
          usage : this.dataUsage,
          available : parseFloat(this.airtimeBudget).toFixed(2),
        }).then((result)=>{
          this.answer4 = result.data.result;
          this.showLastInputs = false;
          this.showAnswer4 = true;
          setTimeout(()=>{
            this.dataUsage='';
            this.airtimeBudget='';
            this.answer4='';
            this.showAnswer4=false;
            this.showLastInputs=true;
          },5200)
        })
      },

      reset4(){
        this.dataUsage='';
        this.airtimeBudget='';
        this.answer4='';
        this.showAnswer4=false;
        this.showLastInputs=true;
      }
    
    }));
  });
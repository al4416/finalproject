import Ember from 'ember';

  var taxRate = 1;
  var toEuro = 1;
  var currency = "€";
  var i = null;
  
  
export default Ember.Component.extend({
  countryOptions: ['Austria', 'Belgium','Croatia','Czech Republic','Denmark','Estonia','Finland','France','Germany','Great Britain','Greece', 'Hungary', 'Ireland','Italy','Latvia', 'Lithuania', 'Luxembourg','Netherlands', 'Norway','Poland','Portugal','Romania', 'Slovakia','Slovenia','Spain','Sweden','Switzerland','Turkey'],
  output: null,
  model() {
    return {};
  },
  actions: {

    selectCountry(value){
      if(value == "Austria"){
        taxRate = taxRate=0.2;
        toEuro = toEuro = 1;
        currency = currency = "€";
      }
      else if(value =="Belgium")
      {
        taxRate = taxRate=0.21;
        toEuro = toEuro = 1;
        currency = currency = "€";
      }
      else if(value =="Croatia")
      {
        taxRate= taxRate=0.25;
        toEuro = toEuro = 7.53;
        currency = currency = "HRK";
      }
      else if(value =="Czech Republic")
      {
        taxRate= taxRate=0.21;
        toEuro = toEuro = 27;
        currency = currency = "CZK";
      }
      else if(value =="Denmark")
      {
        taxRate= taxRate=0.25;
        toEuro = toEuro = 7.44;
        currency = currency = "DKK";
      }
      else if(value =="Estonia")
      {
        taxRate= taxRate=0.20;
        toEuro = toEuro = 1;
        currency = currency = "€";
      }
      else if(value =="Finland")
      {
        taxRate= taxRate=0.24;
        toEuro = toEuro = 1;
        currency = currency = "€";
      }
      else if(value =="France")
      {
        taxRate= taxRate=0.20;
        toEuro = toEuro = 1;
        currency = currency = "€";
      }
      else if(value =="Germany")
      {
        taxRate= taxRate=0.19;
        toEuro = toEuro = 1;
        currency = currency = "€";
      }
      else if(value =="Great Britain")
      {
        taxRate= taxRate=0.20;
        toEuro = toEuro = 0.8;
        currency = currency = "£";
      }
      else if(value =="Greece")
      {
        taxRate= taxRate=0.23;
        toEuro = toEuro = 1;
        currency = currency = "€";
      }
      else if(value =="Hungary")
      {
        taxRate= taxRate=0.27;
        toEuro = toEuro = 313.7;
        currency = currency = "HUF";
      }
      else if(value =="Ireland")
      {
        taxRate= taxRate=0.23;
        toEuro = toEuro = 1;
        currency = currency = "€";
      }
      else if(value =="Italy")
      {
        taxRate= taxRate=0.22;
        toEuro = toEuro = 1;
        currency = currency = "€";
      }
      else if(value =="Latvia")
      {
        taxRate= taxRate=0.21;
        toEuro = toEuro = 1;
        currency = currency = "€";
      }
      else if(value =="Lithuania")
      {
        taxRate= taxRate=0.21;
        toEuro = toEuro = 7.25;
        currency = currency = "LTL";
      }
      else if(value =="Luxembourg")
      {
        taxRate= taxRate=0.15;
        toEuro = toEuro = 1;
        currency = currency = "€";
      }
      else if(value =="Netherlands")
      {
        taxRate= taxRate=0.21;
        toEuro = toEuro = 1;
        currency = currency = "€";
      }
      else if(value =="Norway")
      {
        taxRate= taxRate=0.25;
        toEuro = toEuro = 9;
        currency = currency = "NOK";
      }
      else if(value =="Poland")
      {
        taxRate= taxRate=0.23;
        toEuro = toEuro = 4.4;
        currency = currency = "PLN";
      }
      else if(value =="Portugal")
      {
        taxRate= taxRate=0.23;
        toEuro = toEuro = 1;
        currency = currency = "€";
      }
      else if(value =="Romania")
      {
        taxRate= taxRate=0.24;
        toEuro = toEuro = 4.52;
        currency = currency = "RON";
      }
      else if(value =="Slovakia")
      {
        taxRate= taxRate=0.20;
        toEuro = toEuro = 1;
        currency = currency = "€";
      }
      else if(value =="Slovenia")
      {
        taxRate= taxRate=0.22;
        toEuro = toEuro = 1;
        currency = currency = "€";
      }
      else if(value =="Spain")
      {
        taxRate= taxRate=0.21;
        toEuro = toEuro = 1;
        currency = currency = "€";
      }
      else if(value == "Sweden")
      {
        taxRate = taxRate = 0.25;
        toEuro = toEuro = 9.75;
        currency = currency = "SEK";
      }
      else if(value =="Switzerland")
      {
        taxRate= taxRate=0.08;
        toEuro = toEuro = 1.08;
        currency = currency = "CHF";
      }
      else if(value =="Turkey")
      {
        taxRate= taxRate=0.18;
        toEuro = toEuro = 3.7;
        currency = "TRY";
      }

      this.set('model.country', value);

      //do something to set the tax rate value based on the selected country


  },
  

    
    save(model) {
      if(model.amount == null){

        let error = true;
        this.set("error",error);
      }else{
        let myOutput = {
        amount: Number(model.amount).toFixed(2),
        description: model.description,
        country: model.country,
        
        // add the taxRate and calculate the value of the refundAmount

        refund : (Number(taxRate) * Number(model.amount)).toFixed(2),
        refundAmount: (Number(model.amount) - (Number(taxRate) * Number(model.amount))).toFixed(2),
        taxRate:taxRate*100,
        toEuro: ((Number(model.amount)-(Number(taxRate) * Number(model.amount)))/Number(toEuro)).toFixed(2),
        currency: currency

      };
      this.set("output", myOutput);

      }// do something to save the model in a new database entry
    },
    
    
      createPDF() {
        
       var doc = new jsPDF();
       
       doc.setFontSize(22);
       doc.text(20, 20, 'Tax-Free Shopping');
       
      doc.setFontSize(14); 
      doc.text(20, 40, 'Product ');
      doc.text(45,40, 'Country ');
      doc.text(80,40, ' Amount ');
      doc.text(110,40, 'Refund ');
      doc.text(140,35, 'Amount');
      doc.text(140,40,  'after refund');
      doc.text(170,35, 'Amount');
      doc.text(170,40,  'after refund(€)');
      doc.setLineWidth(1);
      doc.line(20, 42, 200, 42); //x,y,x,y
      
      doc.setFontSize(12);
      doc.text(20, 50, 'LV bag ');
      doc.text(45,50, 'France ');
      doc.text(80,50, '€400.00  ');
      doc.text(110,50, '€80.00 ');
      doc.text(140,50, '€320.00');
      doc.text(170,50,  '€320.00');

      doc.text(20, 60, 'LV bag ');
      doc.text(45,60, 'Italy ');
      doc.text(80,60, ' €400.00 ');
      doc.text(110,60, '€88.00 ');
      doc.text(140,60, '€312.00'); 
      doc.text(170,60,  '€312.00');

      doc.text(20, 70, 'LV bag ');
      doc.text(45,70, 'Great Britain ');
      doc.text(80,70, ' £350.00 ');
      doc.text(110,70, '£70.00 ');
      doc.text(140,70, '£280.00'); 
      doc.text(170,70,  '€334.00');
      
      doc.setFontSize(8);
      doc.text(20, 280, '*All calculations are estimates. VisiTax Calculator is not responsible or liable for any losses that may occur. ');
       doc.save('Tax-Free Shopping.pdf');
      
     }
  }
});

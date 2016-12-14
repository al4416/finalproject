import Ember from 'ember';

  var taxRate = 1;
  
  
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
      }
      else if(value =="Belgium")
      {
        taxRate = taxRate=0.21;
      }
      else if(value =="Croatia")
      {
        taxRate= taxRate=0.25;
      }
      else if(value =="Czech Republic")
      {
        taxRate= taxRate=0.21;
      }
      else if(value =="Denmark")
      {
        taxRate= taxRate=0.25;
      }
      else if(value =="Estonia")
      {
        taxRate= taxRate=0.20;
      }
      else if(value =="Finland")
      {
        taxRate= taxRate=0.24;
      }
      else if(value =="France")
      {
        taxRate= taxRate=0.20;
      }
      else if(value =="Germany")
      {
        taxRate= taxRate=0.19;
      }
      else if(value =="Great Britain")
      {
        taxRate= taxRate=0.20;
      }
      else if(value =="Greece")
      {
        taxRate= taxRate=0.23;
      }
      else if(value =="Hungary")
      {
        taxRate= taxRate=0.27;
      }
      else if(value =="Ireland")
      {
        taxRate= taxRate=0.23;
      }
      else if(value =="Italy")
      {
        taxRate= taxRate=0.22;
      }
      else if(value =="Latvia")
      {
        taxRate= taxRate=0.21;
      }
      else if(value =="Lithuania")
      {
        taxRate= taxRate=0.21;
      }
      else if(value =="Luxembourg")
      {
        taxRate= taxRate=0.15;
      }
      else if(value =="Netherlands")
      {
        taxRate= taxRate=0.21;
      }
      else if(value =="Norway")
      {
        taxRate= taxRate=0.25;
      }
      else if(value =="Poland")
      {
        taxRate= taxRate=0.23;
      }
      else if(value =="Portugal")
      {
        taxRate= taxRate=0.23;
      }
      else if(value =="Romania")
      {
        taxRate= taxRate=0.24;
      }
      else if(value =="Slovakia")
      {
        taxRate= taxRate=0.20;
      }
      else if(value =="Slovenia")
      {
        taxRate= taxRate=0.22;
      }
      else if(value =="Spain")
      {
        taxRate= taxRate=0.21;
      }
      else if(value =="Switzerland")
      {
        taxRate= taxRate=0.08;
      }
      else if(value =="Turkey")
      {
        taxRate= taxRate=0.18;
      }

      this.set('model.country', value);

      //do something to set the tax rate value based on the selected country


  },
  

    
    save(model) {
      if(model.amount == null){

        alert("Please insert an amount");
      }else{
        let myOutput = {
        amount: Number(model.amount).toFixed(2),
        description: model.description,
        country: model.country,
        
        // add the taxRate and calculate the value of the refundAmount

        refund : (Number(taxRate) * Number(model.amount)).toFixed(2),
        refundAmount: (Number(model.amount) - (Number(taxRate) * Number(model.amount))).toFixed(2),
        taxRate:taxRate*100

      };
      this.set("output", myOutput);

      }// do something to save the model in a new database entry
    },
    reset() {
      // clear the form fields
      this.set('model.amount', "");
      this.set('model.description', "");


    }
    
    
  }
});

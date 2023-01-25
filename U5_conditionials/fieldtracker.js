class User {
    #fields;
    constructor(){
        this.#fields = [];
    }

    plant(plot, seed){
        let plotCondition = plot.getCondition();
        if(plotCondition == "tilled"){
            plot.setSeed(seed);
            plot.setCondition("planted");  
            alert("You have planted " + seed + " in " + plot.getName() + ".");
        } else {
          console.log("You can only plant a plot that has been tilled!");
        }
         
    }

    till(plot){
        plot.setCondition("tilled");
        plot.setSeed("none");
        alert("You have tilled plot :" + plot.getName())
    }


    harvest(plot){
       let seedPlanted = plot.getSeedPlanted();
       if(seedPlanted != "none"){
        alert("You have harvested plot :" + plot.getName())
       }
    } 

    addField(name){
        let newField = new Field(name);
        this.#fields.push(newField); 
        alert("A new field was created with the name " + name);
    }

    removeField(name){
      for(let i=0; i<this.#fields.length; i++){
        let fieldName = this.#fields[i].getName();
        if(fieldName==name){
            console.log(fieldName + " is removed from your fields. ");
            this.#fields.splice(i,1);
          }
       }
    }

    getFields(){
        return this.#fields;
    }

    printFields(){
        let fieldList = "";     
        for(let i=0; i<this.#fields.length; i++){
            let currentField = this.#fields[i];
            fieldList += i + ": " + currentField.getName();  
        }
       alert("You have the following fields avaiable: " + fieldList)
    }
}

class Field{
    #plots;
    #name;
constructor(name){
    this.#plots = [];
    this.#name = name;
   }

   addPlot(name){
       let newPlot = new Plot(name)
       this.#plots.push(newPlot);
       console.log("A new plot named " + name + " has been added to the field called " + this.#name +".");
   }

   removePlot(name){
    for(let i=0; i<this.#plots.length; i++){
        let plotName = this.#plots[i].getName();
        if(plotName==name){
            console.log(plotName + " is removed from your plots.");
            this.#plots.splice(i,1);
          }
       }
     }

   getName(){
       return this.#name;
   }

   printPlots(){
       let plotList = "";
       for(let i=0; i<this.#plots.length; i++){
           let nextPlot = this.#plots[i];
           plotList += i + ": " + nextPlot.getName();
       }
       alert("You have the following plots avaiable: " + plotList)
   }

   getPlots(){
       return this.#plots;
   }



}

class Plot{
    #name;
    #seedPlanted;
    #condition;
constructor(name){
    this.#name = name;
    this.#condition = "untilled";
    this.#seedPlanted = "none";

  }

  printOptions(){
      if(this.#condition == "untilled"){
          console.log("You may till the field");
      } else if(this.#condition == "tilled"){
          console.log("You may plant the field");
      } else if(this.#condition == "planted"){
          console.log("You may harvest the field");
      }

  }

setSeed(seed){
    if(this.#condition == "tilled"){
        this.#seedPlanted = seed;

    } else {
console.log("You may only plant a field that is tilled.");
    }
}

setConditon(condition){
    this.#condition = condition;
}

getName(){
    return this.#name;
   }

   getState(){
       return this.#condition;

   }

   getSeedPlanted(){
       return this.#seedPlanted;
   }
}

let user = new User();
user.addField("Corn");

let fieldTracking = true;
while (fieldTracking){
    let selectOrCreateField = Number(prompt("Would you like to (1)create a field (2) choose a field, or (3) exit the program."));

    if(selectOrCreateField == 1){

    user.printFields();
    let fieldChoice = Number(prompt("Please type the index of the field you want to choose."));
    let userFields = user.getFields();
    let currentField = userFields[fieldChoice];
    let inField = true;
    while(inField){
        let selectPlotChoice = Number(prompt("Would you like to (1) select a plot (2) create a plot (3) go back to field selection?"));
        if(selectPlotChoice==1){
            currentField.printPlots();
            let plotChoice = Number(prompt("Please type the index of the plot you want to choose."));
            let fieldPlots = currentField.getPlots();
            let currentPlot = fieldPlots[plotChoice];
            alert("You have selected plot " + currentPlot.getName());
            let inPlot = true;
            while(inPlot){
                let chooseWhatToDoInPlot = Number(prompt("Would you like to (1) till the plot, (2) plant the plot (3) harvest, or (4) selet a new plot?"));
                if(chooseWhatToDoInPlot==1){
                    user.till(currentPlot);
                } else if (chooseWhatToDoInPlot==2){
                    let seedType = prompt("What kind of seed do you want to plant?")
                    user.plant(currentPlot, seedType);
                } else if (chooseWhatToDoInPlot==3){
                    user.harvest(currentPlot);
                } else {
                    inPlot = false;
                }
            }

        } else if (selectPlotChoice==2){
            let plotName = prompt("What would you like to name your plot?");
            currentField.addPlot(plotName);
            } else {
                inField = false;
            }
    }

 } else if (selectOrCreateField==2){
     let fieldName = prompt("What is the name of the field");
     user.addField(fieldName);
 } else {
      fieldTracking = false
    }
 
}
alert("Thank you for using the Field Tracker!");

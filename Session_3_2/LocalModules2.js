
class sample {
    constructor()
    {
        console.log("I am from sample class ");
        
    }


    hey(){
        console.log("Hello Jash i am from sample class!");
    }
}

const Computer = {
  comp_name: "HP",
  comp_specs: {
    ram: "8gb",
    color: "red",
    processor: "Intel Core I7 9th Gen",
    storage: "1TB SSD",
  },

  getallcompname : function(){

    return(`Computer Name: ${Computer.comp_name}`)
  }
};



module.exports = {Computer,sample};
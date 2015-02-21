var trip = [

{
  place: "Seville",
  description: "Seville was founded as the Roman city of Hispalis, and was known",
  top: "250px",
  left: "600px",
  landed: 1519,
  nextPort : "Canary Islands"
  
}, 

{
  place: "Canary Islands",
  description: "test description canary",
  top: "280px",
  left: "580px",
  landed: 1519,
  prevPort : "Seville",
  nextPort : "Cape Verde"
 
},

{
  place: "Cape Verde",
  description: "test description cape verde",
  top: "330px",
  left: "560px",
  landed: 1520,
  prevPort : "Canary Islands",
  nextPort : "Strait of Magellan"
  
},

{
  place: "Strait of Magellan",
  description: "test description SoM",
  top: "560px",
  left: "450px",
  landed: 1521,
  prevPort : "Cape Verde",
  nextPort : "Guam"
  
},

{
  place: "Guam",
  description: "test description guam",
  top: "330px",
  left: "1150px",
  landed: 1521,
  prevPort : "Strait of Magellan",
  nextPort : "Philippines"
  
},

{
  place: "Philippines",
  description: "test description phil",
  top: "360px",
  left: "1075px",
  landed: 1522,
  prevPort : "Guam",
  nextPort : ""
  
}

];

module.exports = trip;
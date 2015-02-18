var trip = [
{
  name: "Seville",
  description: "Seville was founded as the Roman city of Hispalis, and was known",
  nextPort : "Canary Islands",
  image : "http://cdni.condenast.co.uk/646x430/s_v/seville_cnt_24nov09_iStock_.jpg"
}, 

{
  name: "Canary Islands",
  description: "test description canary",
  prevPort : "Seville",
  nextPort : "Cape Verde",
  image : "http://www.celebritycruises.co.uk/images/20-214051-4-5-Canary-Islands-Cruises-Carousel-2-694x388.jpg"
},

{
  name: "Cape Verde",
  description: "test description cape verde",
  prevPort : "Canary Islands",
  nextPort : "Strait of Magellan",
  image : "http://images.sunshine.co.uk/ver2/images/whereshot/jan-cape-verde.jpg"
},

{
  name: "Strait of Magellan",
  description: "test description SoM",
  prevPort : "Cape Verde",
  nextPort : "Guam",
  image : "https://c1.staticflickr.com/3/2225/2196504962_270b8a1259.jpg"
},

{
  name: "Guam",
  description: "test description guam",
  prevPort : "Straight of Magellan",
  nextPort : "Philippines",
  image : "http://www.pacsafe.com/blog/wp-content/uploads/2013/06/Guam-Big-city-on-a-small-Island.jpg"
},

{
  name: "Philippines",
  description: "test description phil",
  prevPort : "Guam",
  nextPort : "",
  image : "http://demo1.globescope.com//fpss/slideshows/myslideshow1/images/photo4.jpg"
}


];

module.exports = trip;
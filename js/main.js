
function getDogPic(){
  var dogURL= "https://dog.ceo/api/breeds/image/random";

  $.ajax({
    url: dogURL,
    success: function(r){
      // console.log(r) viewing the object
      // console.log(r.message) the property message of object is the img url
      var dogPic= $("img");
      dogPic.attr("src", r.message);
      $("h2").html("The world is full of hazards, thefts, and various incidents.");
      $("h3").html("Here's a photo of a dog to distract you from this disturbing reality reality:")
    },
    error: function(er){
      console.log("Something went wrong :( )");
    }
  })
};

$(document).ready(function(){

  $("button").on("click", function(){

    var apiURL= "https://bikewise.org/api/v2/locations?";
    $.ajax({
      url: apiURL,
      success: function(r){

        r.features.forEach(function(e){
          // console.log(e.properties.type)
          // console.log(e.geometry.coordinates)
          $("ol").append("<li>"+"<span> Type of Incident that occurred: </span>" + e.properties.type + "<span>, at the following coordinates: "+e.geometry.coordinates+ "</li>"); //list locations
          });
          getDogPic();
        // console.log(r.features[0].properties.type);
      },
      error: function(er){
        console.log(er);
      }
    })
  })

});

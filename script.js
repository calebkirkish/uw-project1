

    
    // Variables for our API call.  Lat, lon, distance will be determined by the end user but are hard-coded for now
    var preHikingQueryURL = "https://www.hikingproject.com/data/get-trails?lat="
    var lat = 47.6062
    var lon = -122.3321
    var distance = 100
    var hikingAPIkey = "200842322-939f54646af26cdd74e5614a1181a8da"
    var hikingQueryURL = preHikingQueryURL + lat + "&lon=" + lon + "&maxDistance=" + distance + "&key=" + hikingAPIkey

    // Make variables that we will use to store trail data global
    // var result = ""
    // var resultStr = ""
    var trailArray = []
    // var trailName = ""
    // var trailSummary = ""
    // var trailDifficulty = ""
    // var trailVotes = ""
    // var trailImg = ""
    // var trailLength = ""
    // var trailAscent = ""
    // var trailDescent = ""
    // var trailLon = ""
    // var trailLat = ""

    
    class Trail {
        constructor(id, name, summary, difficulty, starVotes, location, image, trailLength, ascent, longitude, latitude, conditionStatus) {
            this.id = id;
            this.name = name;
            this.summary = summary;
            this.difficulty = difficulty
            this.starVotes = starVotes
            this.location = location
            this.image = image
            this.length = trailLength
            this.ascent = ascent
            this.longitude = longitude
            this.latitude = latitude
            this.conditionStatus = conditionStatus
            this.userImg = image;
            this.covidStatus = "";
            this.county = ""
        }
    }

    // currentTrail = new Trail(id, name, summary, difficulty, starVotes, location, image, trailLength, ascent, longitude, latitude, conditionStatus)
    



    function getTrailData(){


    // API Call to Hiking Project

    $.ajax({
        url: hikingQueryURL,
        method: "GET"
      }).then(function(response){

        result = response.trails

console.log(result.length)

        for (var i = 0; i < result.length; i++) {

        // If a trail is closed, we don't push it to our trail array
            if (result[i].conditionStatus.includes("Closed")) {
                // We won't actually do anything with the variable "x", it's just a placeholder
                var x = 0;
        // If open we push to the trail array
            } else {
                var id = result[i].id;
                var name = result[i].name;
                var summary = result[i]
                var difficulty = result[i].difficulty
                var starVotes = result[i].starVotes
                var location = result[i].location
                var image = result[i].imgMedium
                var trailLength = result[i].length
                var ascent = result[i].ascent
                var longitude = result[i].longitude
                var latitude = result[i].latitude
                var conditionStatus = result[i].conditionStatus

                currentTrail = new Trail(id, name, summary, difficulty, starVotes, location, image, trailLength, ascent, longitude, latitude, conditionStatus);
                trailArray.push(currentTrail)
                Trail.trailID = result[i].trailID
                // var county = getCounty(lat, lon);

                

                


            }
            
        }
        
        // Set our newly created Trail array to local storage, this is the only way I've found for us to reference the array globally

        console.log(trailArray[2])

      }).done(function(){
          
        // all code can go here after AJAX calls

      var trail = trailArray[0];
      console.log(trail)
      
      


      })

      // Parse our new local storage item so that it can be referenced

      


    }

    // Run our function

    $(document).ready(function() {

    getTrailData();

    console.log(trailArray[5]);

    // When we are done using the data from our trailArray, it would be best if we deleted that item from localStorage, but definitely not sooner or 
    //else it won't work
    
})
// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if (location>=42) {
        return(location-42)
    } else {
        return(42-location)
    }
}

function distanceFromHqInFeet(location){
return distanceFromHqInBlocks(location)*264
}

function distanceTravelledInFeet(origin , destination){
    return Math.abs(destination-origin)*264

    }


 

    function calculatesFarePrice(origin , destination){

        const distance = distanceTravelledInFeet(origin , destination)
        if (distance <= 400){
            return 0
        } else if (distance - 400 && distance <= 2000 ) {
            return (distance - 400) * 0.02
        } else if (distance > 2000 && distance <= 2500){
            return (25)
        } else {
            return ("cannot travel that far")
        }
    }
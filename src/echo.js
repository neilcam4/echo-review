
function echo(response){
    if(response != 'exit'){
    firstDate = new Date()
    date = firstDate.toLocaleDateString();
    time = firstDate.toTimeString()
    timeArray = time.split(" ")
    return response + " " + date + " " + timeArray[0]
    } else {
        return 'Goodbye!'
    }
}
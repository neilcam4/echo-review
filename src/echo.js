function echo(string){
    if(string != 'exit'){
    firstDate = new Date()
    date = firstDate.toLocaleDateString();
    time = firstDate.toTimeString()
    timeArray = time.split(" ")
    console.log(string + " " + date + " " + timeArray[0])
    return string + " " + date + " " + timeArray[0]
    } else {
        return 'Goodbye!'
    }
}
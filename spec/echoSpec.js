
describe("Echo Process Review ", function(){
    let date;
    let firstDate;
    let time;
    let timeArray;
    let response;
    beforeEach(function(){
        firstDate = new Date()
        date = firstDate.toLocaleDateString()
        time = firstDate.toTimeString()
        timeArray = time.split(" ")
        console.log(date)
        console.log(time)
        console.log(timeArray[0])
    })  
    
    it("should return the input", function(){
        let response = "hello"
        let result = echo(response);
        expect(result).toEqual(response + " " + date + " " + timeArray[0])
    })
    it("should return the input", function(){
        let input = "hi"
        let result = echo(input);
        expect(result).toEqual(input + " " + date + " " + timeArray[0])
    })
    it("should return the input with the date", function(){
        let input = "hi"
        let result = echo(input);
        expect(result).toEqual(input + " " + date + " " + timeArray[0])
    })
    it("should return the Goodbye if exit is entered", function(){
        let input = "exit"
        let result = echo(input);
        expect(result).toEqual('Goodbye!')
    })
})
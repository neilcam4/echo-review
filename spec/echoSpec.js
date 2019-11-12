describe("Echo Process Review ", function(){
    it("should return the input", function(){
        let input = "hello"
        let result = echo(input);
        expect(result).toEqual(input)
    })
    it("should return the input", function(){
        let input = "hi"
        let result = echo(input);
        expect(result).toEqual(input)
    })
})


let parse = require("../src/index");

let assert = require("chai").assert;

describe("demo", function() {
    it("100% success", function() {
        assert(1 == "1");
    });

    it("for...in", function() {
        let data = { skills: ["js", "html", "css"] };
        let tpl = "My skills:" + "<%for(var index in data.skills) {%>" + '<a href="#"><%data.skills[index]%></a>' + "<%}%>";

        let res = parse(tpl, data);
        assert(res == `My skills:<a href='#'>js</a><a href='#'>html</a><a href='#'>css</a>`);
    });
});




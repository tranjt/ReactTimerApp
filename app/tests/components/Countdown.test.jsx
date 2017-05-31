var React = require("react");
var ReactDom = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var Countdown = require("Countdown");

describe("Countdown", ()=> {
    it("should exist", ()=>{
        expect(Countdown).toExist();
    });

    describe("handleSetCountdown", ()=>{
        it("should set state to started and countdown", (done)=>{
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countDownStatus).toBe("started");

            setTimeout(()=>{
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001)
        });

        it("should never set countdown to less than 0 ", (done)=>{
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);

            expect(countdown.state.count).toBe(1);
           
            setTimeout(()=>{
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001)
        });
    });
});
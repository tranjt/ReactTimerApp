var React = require("react");
var Clock = require("Clock");
var Control = require("Controls");

var Timer = React.createClass({

    getInitialState: function() {
        return {
            count: 0,
            timerStatus: "stopped"
        }
    },
    componentDidUpdate: function(prevProps, prevStatus) {
        if (this.state.timerStatus !== prevStatus.timerStatus) {
            switch(this.state.timerStatus) {
                case "started":
                    this.startTimer();                    
                    break;
                case "paused":
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                case "stopped":
                    clearInterval(this.timer);
                    this.timer = undefined;
                    this.setState({
                        count: 0,                       
                    });
                    break;
            }
        }

    },
    componentWillUnmount: function() {        
        clearInterval(this.timer);
        this.timer = undefined;
    },

    startTimer: function() {
        this.timer = setInterval(()=>{
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount
            }); 
        }, 1000);
    },

    handleStatusChange: function(newStatus) {
        this.setState({
            timerStatus: newStatus
        });
    },
    render: function() {
        var {count, timerStatus} = this.state;
        return (
            <div >
                 <h1 className="page-title">Timer App </h1>
                <Clock totalSeconds={count}/>
                <Control countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            
            </div>
        );
    }
});

module.exports = Timer;
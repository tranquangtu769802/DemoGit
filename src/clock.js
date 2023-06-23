import React from "react";
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date() ///*lấy thời gian hiện tại
        }

    }
    //*Cập nhật lại giờ giấc hiện tại
    updatetime = ()=>{
        this.setState({
            time: new Date()
        });
    }
    render(){
        return(
            <div>
                <h2>Time: {this.state.time.toLocaleTimeString()}</h2> {/** toLocaleDateString() để biểu diễn thời gian đẹp hơn */}
                <button onClick={this.updatetime}>UpdateTime</button>
            </div>
        );
    }
}
export {Clock};
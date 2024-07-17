import React from "react"

class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0,
            textLive : ""
        }
        // console.log(this)
    }

    increment=()=> this.setState({count : this.state.count + 1})
    decrement=()=> this.state.count > 0 && this.setState({count : this.state.count - 1})
    
    componentDidMount(){
        document.title = "Hi Achref"
    }

    componentDidUpdate(){
        document.title = this.state.count
    }

    componentWillUnmount(){
        document.title = "Bye Achref"
    }
    render(){
        return(
            <div>
                <h2>Counter Component</h2>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>

                <br/>
                <br/>

                <input type="text" onChange={(e)=> this.setState({textLive : e.target.value})}/>
                <h2>{this.state.textLive}</h2>
            </div>
        )
    }
}

export default Counter
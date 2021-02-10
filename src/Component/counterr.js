import { Button, } from 'react-bootstrap'
import React, { Component } from 'react'

export class Counter extends Component {
state={
    counter:0,
    show: true
}
handleClickStart =()=>{
    this.temp = setInterval(() => {
        this.setState({
            counter: this.state.counter + 1
        })
    }, 1000)
    this.setState({
        show: !this.state.show
    })
}
/******stop */
handleClickStop =()=>{
    clearInterval(this.temp)
this.setState({
    show :!this.state.show
})
}
handleClickReset=()=>{
    clearInterval(this.temp)
    this.setState({
        counter:0
    })
}
    render() {
        return (
            <div className='cc' style={{color:'white', backgroundColor:'rgb(0,0,0,0.8)',width:'500px'}}>
              <div>
                   {this.state.show ? <Button onClick={this.handleClickStart}> Start </Button>:
                   <Button  onClick={this.handleClickStop}> Stop </Button>}
                    <Button onClick={this.handleClickReset}> Reset </Button>
              </div>
                <h3 style={{color:'white', textAlign:'center'}}>{this.state.counter} </h3>
            </div>
        )
    }
}
export default Counter
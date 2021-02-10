import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

class Timer extends Component {

    state = {
            count: 0,
            show: true
            
        };
      

      start = () =>{
        
          this.myTimer = setInterval(() => {
              this.setState(prevState => ({
                  count: parseInt(prevState.count) + 1,
              })) ;   
          }, 1000);
          this.setState({
            show: !this.state.show
        })
      }


      reset = () => {
          clearInterval(this.myTimer)
          this.setState (prevState => ({
              count : 0,
          }))
      }

      stop = () => {
        clearInterval(this.myTimer)
        this.setState({
            show :!this.state.show
        })

    }



    render() {
        return (
            <div className="count">

                 {this.state.count}
                 <br/>
                 {this.state.show ? <Button variant="light" onClick={this.start}> Start </Button>:
                   <Button variant="light" onClick={this.stop}> Stop </Button>}
                 
                 <span>  </span>
                 <Button variant="light" onClick={this.reset}>Reset</Button>
                

            </div>
        )
    }
}
export default Timer
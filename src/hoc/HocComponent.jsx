import React, {Component} from 'react'

// the component that accepts Component and data
export default function HoC(AppComponent, data) {
    return class extends Component {
        constructor(props){
            super(props);
            this.state = {
                data: data
            };
        }

        render(){
            return(
                <div className="container">
                  <AppComponent data={this.state.data}></AppComponent>
                </div>
            ); 
        }
    }
}
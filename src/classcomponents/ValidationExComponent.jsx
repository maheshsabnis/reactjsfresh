import React, { Component } from 'react';
class ValidationExComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            PersonId:0,
            PersonName:'',
            isPersonIdValid:true,
            isPersonNameValid: true,
            isFormValid: true
        }
    }
    handleInputs =(evt)=>{
         this.setState({[evt.target.name]:evt.target.value},()=>{});
         this.validateForm(evt.target.name, evt.target.value); 
    }
    validateForm(name,value){
        if(name === 'PersonId'){
            if(parseInt(value) < 0 || value.length > 5){
                this.setState({isPersonIdValid:false});
                this.setState({isFormValid:false});

            } else {
                this.setState({isPersonIdValid:true});
                this.setState({isFormValid:true});
            }
        }
        if(name === 'PersonName'){
            if(value === '' || value.length > 20){
                this.setState({isPersonNameValid:false});
                this.setState({isFormValid:false});
            } else {
                this.setState({isPersonNameValid:true});
                this.setState({isFormValid:true});
            }
        }
    }
    render() { 
        return ( 
            <div>
               <h1>React.js Validations Example</h1>
               <div className="form-group">
                  <label>PersonId</label>
                  <input type="text" value={this.state.PersonId}
                  name="PersonId"
                   onChange={this.handleInputs.bind(this)}
                  className="form-control"/>
                  <div hidden={this.state.isPersonIdValid} className="alert alert-danger">Person Id is Must</div>
               </div>
               <div className="form-group">
                  <label>PersonName</label>
                  <input type="text" value={this.state.PersonName}
                  name="PersonName"
                  onChange={this.handleInputs.bind(this)}
                  className="form-control"/>
                  <div hidden={this.state.isPersonNameValid} className="alert alert-danger">Person Name is Must</div>
               </div>
               <div className="form-group">
                 <input type="button" value="Save" disabled={!this.state.isFormValid} className="btn btn-success"></input>
               </div>
            </div>
        );
    }
}
 
export default ValidationExComponent;
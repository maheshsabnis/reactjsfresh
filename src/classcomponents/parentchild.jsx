import React, { Component } from 'react';
class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [
                'James Bond',
                'Indiana Jones',
                'Ethan Hunt',
                'Jason Bourn'
            ],
            movies: [
                 'Dr.No', 'Goldfinger', 'Skyfall', 'Spectre',
                 'Last Crusade', 'Temple of doom', 'Bourn Identity'
            ],
            selectedCharacter:'',
            selectedMovie: ''
        }
    }
    handleSelectionChanged(evt){
        this.setState({selectedCharacter:evt.target.value});
    }
    handleSelectionMovieChanged(evt){
        this.setState({selectedMovie:evt.target.value});
    }
    render() {
        return (
            <div className="container">
               <div className="form-group">
                 <label>Characters </label>
                 <select value={this.state.selectedCharacter} onChange={this.handleSelectionChanged.bind(this)}>
                   {
                       this.state.characters.map((c,i) => (
                           <option key={i} value={c}>{c}</option>
                       ))
                   }
                 </select>
                 <br/>
                 <div className="container"><strong>{this.state.selectedCharacter}</strong> </div>
               </div>
               <hr></hr>
               <div className="form-group">
                 <label>Characters </label>
                 <select value={this.state.selectedMovie} onChange={this.handleSelectionMovieChanged.bind(this)}>
                   {
                       this.state.movies.map((c,i) => (
                           <option key={i} value={c}>{c}</option>
                       ))
                   }
                 </select>
                 <br/>
                 <div className="container"><strong>{this.state.selectedMovie}</strong> </div>
               </div>
            </div>
        );
    }
}

export default ParentComponent;
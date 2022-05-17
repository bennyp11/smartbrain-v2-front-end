import React, {Component} from 'react';
import './Register.css';

export default class PasswordScorer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            password: '',
            score: ''
         };
    }

    render(){
        const currentPassword = this.props.password;
        let x = this.props.score;
        if (currentPassword === '') {
            return null;
        } else if (x === 0){
            return (
                <div className="pw-1"><h4>weak!</h4></div>
            );
        } else if (x === 1){
            return (
                <div className="pw-1"><h4>weak!</h4></div>
            );
        } else if (x === 2){
            return (
                <div className="pw-2"><h4>not great...</h4></div>
            );
        } else if (x === 3){
            return (
                <div className="pw-3"><h4>this is decent...</h4></div>
            );
        } else if (x === 4){
            return (
                <div className="pw-4"><h4>GREAT PASSWORD!</h4></div>
            );
        } else return null;
    }
}

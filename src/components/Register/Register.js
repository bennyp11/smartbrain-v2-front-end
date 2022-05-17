import React from 'react';
import PasswordScorer from './PasswordScorer.js';
import zxcvbn from 'zxcvbn';
import './Register.css';

const REGISTRATION_ENDPOINT = process.env.REACT_APP_REGISTRATION_ENDPOINT;

class Register extends React.Component {
    constructor(props){
        super(props);

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        //this.onScoreChange = this.onScoreChange.bind(this);
        this.onSubmitRegister = this.onSubmitRegister.bind(this);

        this.state = {
            name: '',
            email: '',
            password: '',
            score: ''
        }
    }
    onNameChange = (e) => {
        this.setState({name: e.target.value});
    }

    onEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    onPasswordChange = (e) => {
        this.setState({password: e.target.value});
        let currentScore = zxcvbn(e.target.value).score;
        this.setState({score: currentScore});
        console.log(this.state.score);
    }

    //onScoreChange = (e) => {
    //    this.setState({score: e.target.value});
    //}

    onSubmitRegister = () => {
        if (this.state.score <= 2){
            alert('Please make your password stronger');
        } else {
        fetch(REGISTRATION_ENDPOINT, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
        .catch(err => 'REGISTRATION ERROR');
    }}

    render(){
        return(
        <article className='br2 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center'>
        <main className="pa4 black-80">
        <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90" type="name" name="name"  id="name" onChange={this.onNameChange}/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
                </div>
                <div className="mv3">
                <div className="pw-widget-container">
                    <div className="strength-container">
                    <PasswordScorer score={this.state.score} />
                    </div>
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
                </div>
                </div>
            </fieldset>
                <div className="mv3">
                    <input className="b ph3 pv2 input-reset ba2 b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={this.onSubmitRegister}/>
                </div>
        </div>
        </main>
        </article>
        );
    }
}

export default Register;
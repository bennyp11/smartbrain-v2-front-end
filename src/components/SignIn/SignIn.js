import React from 'react';
import './SignIn.css';

const SIGNIN_ENDPOINT = process.env.REACT_APP_SIGNIN_ENDPOINT;

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmitSignIn = this.onSubmitSignIn.bind(this);

        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (e) => {
        this.setState({signInEmail: e.target.value});
    }

    onPasswordChange = (e) => {
        this.setState({signInPassword: e.target.value});
    }

    onSubmitSignIn = () => {
        fetch(SIGNIN_ENDPOINT, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
        //if the user id exists, load the user
            if (user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            } else {
                alert('WRONG CREDENTIALS');
            }
        })
    }

    render(){
        const { onRouteChange } = this.props;
        return (
            <article className='br2 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center'>
            <main className="pa4 black-80">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange} />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
                    </div>
                </fieldset>
                    <div className="mv3">
                        <input className="b ph3 pv2 input-reset ba2 b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={this.onSubmitSignIn}/>
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register Here</p>
                    </div>
            </div>
            </main>
            </article>
        );

    }
}

export default SignIn;
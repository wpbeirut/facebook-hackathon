import React, { Component } from "react";
class SignIn extends Component {

   state={
       error:'',
       email:'',
       password:''
   }

  submit = e =>{
    e.preventDefault()
    this.setState({error:''})
    if(this.state.email === 'admin' && this.state.password === 'admin'){
        localStorage.setItem('token','token')
        this.props.history.push('/')
    }else {
        this.setState({error:'incorrect email or password'})
    }
  }

  handleInputChange = e=>{
    this.setState({[e.target.name]:e.target.value})
  }

  renderError(){
      if(this.state.error){
          return(
              <div className='text-center text-danger'>{this.state.error}</div>
          )
      }
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-7 text-center mx-auto mt-5 p-0 logo-container'>
            <img src='/images/palarmlogo.jpg' alt='logo'/>
          </div>
        </div>
        <form onSubmit={this.submit}>
            {this.renderError()}
          <div class="form-group row mb-2">
            <label for="inputEmail3" class="col-sm-2 ">
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                name='email'
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 ">
              Password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword3"
                placeholder="Password"
                name='password'
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row m-0">
            <div className="col-sm-10 mx-auto text-center">
              <button className="btn btn-primary btn-block" type="submit">
                Log In
              </button>
            </div>
            <div className="col-sm-10 mx-auto text-center">
              <p className="text-primary m-0"  onClick={_=>this.props.history.push('/signup')}>
                Dont have an account
              </p>
              <p className="text-primary m-0">
                Forgot Password
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

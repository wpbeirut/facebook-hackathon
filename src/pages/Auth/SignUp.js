import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <div className='container'>
                      <div className='row'>
          <div className='col-7 text-center mx-auto mt-5 p-0 logo-container'>
            <img src='/images/palarmlogo.jpg' alt='logo'/>
          </div>
        </div>
            <form>
            <div class="form-group row mb-2">
                <label for="inputEmail3" class="col-sm-2 ">
                  Full name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail3"
                    placeholder="Full name"
                  />
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="inputEmail3" class="col-sm-2 ">
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail3"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="inputPassword3" class="col-sm-2 ">
                  Password
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword3"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 ">
                 confirm Password
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword3"
                    placeholder="Confirm password"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10 mx-auto text-center">
                  <button className="btn btn-primary btn-block" type="submit">
                    Create my account
                  </button>
                </div>
                <div className="col-sm-10 mx-auto text-center">
                  <p className="text-primary" onClick={_=>this.props.history.push('/signin')}>
                    Already have an account
                  </p>
                </div>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUp;
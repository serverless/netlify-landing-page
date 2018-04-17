import React, { Component } from 'react'
import './bootstrap.css'
import './App.css'

console.log(process.env)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="landing-page">
          <div className="container">
            <div className="row centered">
              <h3 className="logo aligncenter">ServerLess</h3>

              <h1>Sign up to get notified<br/>when we launch!</h1>

              <div className="col-md-6 col-md-offset-3 mt">
                <form>
                  <input
                    type="email"
                    name="email"
                    className="sign-up"
                    placeholder="Enter your email address..."
                    required
                    />
                  <button className="btn btn-lg btn-green sign-up-button" type="submit">
                    Notify Me
                  </button>
                </form>
              </div>
            </div>

            <div className="row">
              <div className="continue">
                <i className="ion-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

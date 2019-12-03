import React, { Component } from 'react'
import { UserSession } from 'blockstack'
import { appConfig } from './appConfig'

class App extends Component {
  constructor() {
     super()
     this.userSession = new UserSession({ appConfig })
     this.state = {
       isSignInPending: this.userSession.isSignInPending(),
       isUserSignedIn: this.userSession.isUserSignedIn()
     }
   }

   componentDidMount() {
     const session = this.userSession
     if(!session.isUserSignedIn() && session.isSignInPending()) {
       session.handlePendingSignIn()
       .then((userData) => {
         this.setState({ userData })
         if (!userData.username) throw new Error('This app requires a username.')
         this.setState({
           isUserSignedIn: session.isUserSignedIn(),
           isSignInPending: session.isSignInPending()
         })
       })
     }
   }

  redirectToSignIn = () => this.userSession.redirectToSignIn()

  signOut(e) {
    e.preventDefault()
    this.userSession.signUserOut()
    window.location = '/'
  }

  render() {
    const { isUserSignedIn, isSignInPending } = this.state
    return (
      <div className="App">
        <div style={{width: '80%', margin: '0 auto'}}>
          <header style={{display: 'flex', fontFamily: 'monospace'}}>
            <h1>React Blockstack app</h1>
            <section style={{marginLeft: 'auto', lineHeight: '60px'}}>
              <span style={{display: 'inline-block', marginRight: '10px', borderRadius: '50%', width: '8px', height: '8px', background: isUserSignedIn ? 'green' : 'red', lineHeight: '60px'}}></span>
              <span>{isUserSignedIn ? 'Connected' : isSignInPending ? 'Loading...' : 'Not connected'}</span>
            </section>
          </header>

          <article>
            <section>
              {!isUserSignedIn && <button onClick={() => this.redirectToSignIn()} type="submit">Login with Blockstack</button>}
              {isUserSignedIn && <button onClick={e => this.signOut(e)} type="submit">Sign out</button>}
            </section>
          </article>
        </div>
      </div>
    )
  }
}

export default App

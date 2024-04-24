import { useState } from 'react'
import Header from './components/Header'
import initialEmails from './data/emails'

import './styles/App.css'

function App() {

  const [email, setEmail] = useState(initialEmails)
  

  const isRead = (email) => {
    if(email.read) {
      return 'email read'
    } else {
      return 'email unread'
    }
  }

  const isStarred = (email) => {
    if(email.starred) {
      return 'star-checkbox'
    } else {
      return ''
    }
  }
  

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {email.map((email, index) => {
            return (
              <li key={index} className={isRead(email)}>
                <div className='select'>
                  <input type='checkbox'/> 
                </div>
                <div className='star'>
                  <input type='checkbox' className={isStarred(email)}/>
                </div>
                <div className='sender'> {email.sender} </div>
                <div className='title'> {email.title} </div>
              </li>
            )
          })}
        </ul>
        </main>
    </div>
  )
}

export default App

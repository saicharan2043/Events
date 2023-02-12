// Write your code here
import {Component} from 'react'

import './index.css'

const registrationStatus = {
  yetNotValue: 'YET_TO_REGISTER',
  registred: 'REGISTERED',
  regiClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  //   constructor(props) {
  //     super(props)
  //     console.log(props)
  //     this.state = {event: props.value}
  //   }

  notYetRegistation = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="not-yet-regi-img"
        alt="yet to register"
      />
      <p className="discription">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="button">Register Here</button>
    </>
  )

  alreadyRegistation = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="success-img"
        alt="registered"
      />
      <h1 className="success-text">
        You have already registered for the event
      </h1>
    </>
  )

  registrationClosed = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="closed-img"
        alt="registrations closed"
      />
      <h1 className="closed-heading">Registrations Are Closed Now!</h1>
      <p className="closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </>
  )

  NoActiveEvent = () => (
    <>
      <p className="view-events">
        Click on an event, to view its registration details
      </p>
    </>
  )

  render() {
    const {value} = this.props
    switch (value) {
      case registrationStatus.yetNotValue:
        return this.notYetRegistation()
      case registrationStatus.registred:
        return this.alreadyRegistation()
      case registrationStatus.regiClosed:
        return this.registrationClosed()
      default:
        return this.NoActiveEvent()
    }
  }
}

export default ActiveEventRegistrationDetails

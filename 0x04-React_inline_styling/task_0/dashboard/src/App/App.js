import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js'
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList.js'
import PropTypes from 'prop-types';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js'
import BodySection from '../BodySection/BodySection.js'
import WithLogging from '../HOC/WithLogging.js'


const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];
const listNotifications = [
  { id:1, html: "Test", type:"default", value:"Hello"}
]

const FooterComp = WithLogging(Footer)

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  handleKeyPress(event){
    if (event.ctrlKey && event.keyCode === 72){
      alert("Logging you out")
      this.props.logOut()
    }
  }

  render() {
    const { isLoggedIn} = this.props
  return (
    <React.Fragment>
      <div className="App">
    <Notifications {...{listNotifications}}/>
    </div>
        <Header/>
      < BodySectionWithMarginBottom title="Course list">
      {isLoggedIn && <CourseList {...{listCourses}}/>}
      </BodySectionWithMarginBottom>
      < BodySectionWithMarginBottom title="Log in to continue">
      {!isLoggedIn && <Login/>}
      </BodySectionWithMarginBottom>
      <BodySection title='News from the School'>
          <p>Log in the School addEventListener </p>
        </BodySection> 
      <FooterComp />

    </React.Fragment>
  );
}
}
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}
App.defaultProps = {
  isLoggedIn:true,
  logOut: () => undefined,
}

export default App;
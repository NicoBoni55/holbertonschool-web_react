import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import CourseList from '../CourseList/CourseList'
import { Component } from 'react'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import BodySection from '../BodySection/BodySection'
import WithLogging from '../HOC/WithLogging'
import { StyleSheet, css } from 'aphrodite'

const notificationsList = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: {__html: '<strong>Urgent requirement</strong> - complete by EOD'} },
]

const coursesList = [
  {id: 1, name: 'ES6', credit: 60 },
  {id: 2, name: 'Webpack', credit: 20 },
  {id: 3, name: 'React', credit: 40 },
]

const LoginWithLogging = WithLogging(Login);
const CourseListWithLogging = WithLogging(CourseList);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    }
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  }
  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  }
  // method to execute when the component is mounted(
  // Ensures the DOM is fully mounted and ready for safe interaction)
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  // method to execute when the component is unmounted
  // Serves to notify that the component is about to be removed from the DOM
  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    if (event.ctrlKey && event.key === 'h'){
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render () {
  const {isLoggedIn, logOut} = this.props;
  const {displayDrawer} = this.state;
  
  return (
    <div className={css(styles.App)}>
      <div className={css(styles.rootNotifications)}>
        <Notifications 
        notifications={notificationsList}
        displayDrawer={displayDrawer}
        handleDisplayDrawer={this.handleDisplayDrawer}
        handleHideDrawer={this.handleHideDrawer} />
      </div>
      <Header />
      {isLoggedIn === false ? (
        <BodySectionWithMarginBottom title={"Log in to continue"}>
          <LoginWithLogging/>
        </BodySectionWithMarginBottom>
      ) : (
          <BodySectionWithMarginBottom title={"Course list"}>
            <CourseListWithLogging courses={coursesList}/>
          </BodySectionWithMarginBottom>
      )}
      <BodySection title={"News from the School"} className={css(styles.body)}>
        <p>Holberton School News goes here</p>
      </BodySection>
      <div className={css(styles.footer)}>
        <Footer />
      </div>
    </div>
  )
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

const styles = StyleSheet.create({
  App: {
    margin: 0,
    padding: 0,
  },
  body: {
    fontSize: '20px',
  },
  footer: {
    fontSize: '20px',
    textAlign: 'center',
    marginTop: '20px',
  },
  rootNotifications: {
    '@media (max-width: 900px)': {
      order: -1,
  }
}
})

export default App

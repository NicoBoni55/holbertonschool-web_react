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
  const {isLoggedIn} = this.props;
  const {logOut} = this.props;
  
  return (
    <div className={css(styles.App)}>
      <Notifications notifications={notificationsList} displayDrawer={true} />
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
        <p className={css(styles.p)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio explicabo dolore nam officiis, libero cupiditate animi excepturi pariatur ab similique molestias omnis architecto eveniet obcaecati, dicta quos itaque beatae aperiam!</p>
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
    paddingLeft: '25px',
    '@media (max-width: 900px)': {
      paddingLeft: '0px',
      margin: '0',
      padding: '0 20px',
    }
  },
  body: {
    fontSize: '20px',
    '@media (max-width: 900px)': {
      textAlign: 'center',
      padding: '0 10px 0 10px',
    }
  },
  footer: {
    fontSize: '20px',
    textAlign: 'center',
    marginTop: '20px',
  },
  p: {
    '@media (max-width: 900px)': {
      fontSize: 'clamp(17px, 2.5vw,)',
      textAlign: 'left',
      margin: '0 10px',
    }
  }
})

export default App

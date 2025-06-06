import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import CourseList from '../CourseList/CourseList'
import './App.css'
import { Component } from 'react'



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

class App extends Component {
  render () {
  const {isLoggedIn} = this.props;
  return (
    <>
      <Notifications notifications={notificationsList} displayDrawer={false} />
      <Header />
      {isLoggedIn === false ? (
        <Login/>
      ) : (
        <CourseList courses={coursesList}/>
      )}
      <Footer />
    </>
  )
  }
}

App.defaultProps = {
  isLoggedIn: false,
}

export default App

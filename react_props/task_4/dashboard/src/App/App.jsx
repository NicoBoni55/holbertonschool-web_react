import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import CourseList from '../CourseList/CourseList'
import './App.css'

function App() {
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

const isLoggedIn = false
  return (
    <>
      <Notifications notifications={notificationsList} />
      <Header />
      {isLoggedIn ? (
        <CourseList listCourses={coursesList} />
      ): (
        <Login />
      )}
      <Footer />
    </>
  )
}

export default App

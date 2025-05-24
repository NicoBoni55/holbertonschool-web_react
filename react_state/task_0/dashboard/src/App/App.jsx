import { StyleSheet, css } from 'aphrodite';
import { Component } from 'react';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import withLogging from '../HOC/WithLogging';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

// function App({ isLoggedIn = false }) {
//   const notificationsList = [
//     { id: 1, type: "default", value: "New course available" },
//     { id: 2, type: "urgent", value: "New resume available" },
//     {
//       id: 3,
//       type: "urgent",
//       html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
//     },
//   ];

//   const coursesList = [
//     { id: 1, name: "ES6", credit: "60" },
//     { id: 2, name: "Webpack", credit: "20" },
//     { id: 3, name: "React", credit: "40" },
//   ];

//   return (
//     <>
//       <div className={css(styles.notificationsHeader)}>
//         <Header />
//         <div className={css(styles.rootNotifications)}>
//           <Notifications notifications={notificationsList} />
//         </div>
//       </div>
//       {isLoggedIn ? (<div className={css(styles.coursesBody)}><CourseList courses={coursesList} /></div>) : (<Login />)}
//       <Footer />
//     </>
//   )
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.notificationsList = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      {
        id: 3,
        type: "urgent",
        html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
      },
    ];

    this.coursesList = [
      { id: 1, name: "ES6", credit: "60" },
      { id: 2, name: "Webpack", credit: "20" },
      { id: 3, name: "React", credit: "40" },
    ];

    this.handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'h') {
        e.preventDefault();
        alert("Logging you out");
        this.props.logOut();
      }
    };

    this.WithLogin = withLogging(Login);
    this.WithCourseLit = withLogging(CourseList);

    this.state = {
      displayDrawer: false
    }

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer = () => {
    this.setState({
      displayDrawer: true
    });
  };

  handleHideDrawer = () => {
    this.setState({
      displayDrawer: false
    });
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        <div className={css(styles.notificationsHeader)}>
          <Header />
          <div className={css(styles.rootNotifications)}>
            <Notifications notifications={this.notificationsList} isDrawerDisplayed={this.state.displayDrawer} showDrawer={this.handleDisplayDrawer} hideDrawer={this.handleHideDrawer} />
          </div>
        </div>
        {isLoggedIn ? (
          <div className={css(styles.Body)}>
            <BodySectionWithMarginBottom title={"Course List"}>
              <this.WithCourseLit courses={this.coursesList} />
            </BodySectionWithMarginBottom>
          </div>
        ) : (
          <div className={css(styles.Body)}>
            <BodySectionWithMarginBottom title={"Log in to continue"}>
              <this.WithLogin />
            </BodySectionWithMarginBottom>
          </div>
        )}
        <div>
          <BodySection title={"News from the School"}>
            <p>Holberton School News goes here</p>
          </BodySection>
        </div>
        <Footer />
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { },
};

const styles = StyleSheet.create({
  notificationsHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomStyle: 'solid',
    borderColor: '#e1003c',
    height: '15vh',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
    }
  },
  rootNotifications: {
    '@media (max-width: 900px)': {
      order: -1,
    }
  },
  Body: {
    height: '55vh',
  },
});

export default App;

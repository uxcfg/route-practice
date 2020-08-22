import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

/* Icons */
import * as Fa from 'react-icons/fa';
import * as Ai from 'react-icons/ai';
import * as Io from 'react-icons/io';

/* Components */
import NavBar from './component/navBar/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';

export default class App extends React.Component {
  state = {
    sideBarData: [
      {
        title: 'Home',
        path: '/',
        icon: <Ai.AiFillHome />,
        cName: 'nav__sideLink',
      },
      {
        title: 'Reports',
        path: '/reports',
        icon: <Io.IoIosPaper />,
        cName: 'nav__sideLink',
      },
      {
        title: 'Products',
        path: '/products',
        icon: <Fa.FaCartPlus />,
        cName: 'nav__sideLink',
      },
      {
        title: 'Team',
        path: '/team',
        icon: <Io.IoMdPeople />,
        cName: 'nav__sideLink',
      },
      {
        title: 'Message',
        path: '/message',
        icon: <Fa.FaEnvelopeOpenText />,
        cName: 'nav__sideLink',
      },
      {
        title: 'Support',
        path: '/support',
        icon: <Io.IoMdHelpCircle />,
        cName: 'nav__sideLink',
      },
    ],
  };
  render() {
    return (
      <>
        <Router>
          <NavBar sidebarData={this.state.sideBarData} />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/reports" component={Reports}/>
          </Switch>
        </Router>
      </>
    );
  }
}

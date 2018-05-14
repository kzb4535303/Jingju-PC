import React from 'react';
import './App.css';
import Tabbar from  './components/TabBar/Tabbar'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import RouterConfig from './router/router'
import './common/css/common.scss'

class App extends React.Component {
  render() {
    return (
        <Router>
            <div className="App">
                <div>
                    <Tabbar />
                </div>
                <Route render={({ location }) => {
                    return (
                        <ReactCSSTransitionGroup
                            transitionName="fade"
                            transitionLeave={ false }
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>
                            <div key={ location.pathname }>
                                {RouterConfig.map((route, index) => {
                                    return  ( <Route
                                        key={index}
                                        location={ location }
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.component}
                                    />)
                                })}
                            </div>
                        </ReactCSSTransitionGroup>
                    )
                }} />
            </div>
        </Router>
    );
  }
}

export default App;

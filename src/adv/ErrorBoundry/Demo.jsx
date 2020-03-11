import React, { Component } from "react";
import Raven from "raven-js";

import "./../../App.css";
import oops from "./sentry-aw-snap.svg";

class SentryBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
//   static getDerivedStateFromError(){
//      this.setState({this.state.error: true});
//       return { this.state.error};
//   }
  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Raven.captureException(error, { extra: errorInfo });
  }
  
  render() {
    if (this.state.error) {
      return (
        <div className="snap">
          <img src={oops} />
          <div className="snap-message">
            <p>We're sorry - something's gone wrong.</p>
            <p>Our team has been notified, but click  <button  onClick={() => Raven.lastEventId() && Raven.showReportDialog()}>
              here
              </button> to fill out a report.
                  
            </p>
          </div>

        </div>
      );
    } else {
      return this.props.children;
    }
  }
}


class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, n: 0 };
  }

  
  getCount() {
    if (this.state.n > 3) throw new Error('woops');
    return `(${this.state.n})`;
  }

  handleClick() {
    this.setState({ n: this.state.n + 1 });
  }
  
  render() {
    return (
      <div>
        <div>Counter widget {this.getCount(this.state.n)}</div>
        <button onClick={this.handleClick.bind(this)}>
          Click me a few times
        </button>
      </div>
    );
  }
}
class Sidebar extends Component {
    
  render() {
    return (
      <div className="sidebar">
        <SentryBoundary>
          <h2>Sidebar</h2>
          <Widget />
        </SentryBoundary>
      </div>
    );
  }
}
export default Sidebar;
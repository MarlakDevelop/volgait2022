import React from "react"
import logoSvg from 'assets/media/logo.svg'
import backSvg from 'assets/media/navigation/back.svg'
import nextSvg from 'assets/media/navigation/next.svg'
import closeSvg from 'assets/media/navigation/close.svg'

export default class HeaderComponent extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header">
        {this.props.screen < 1 && (
          <div className="navigation">
            <img src={logoSvg} className="logo" alt="logo" data-testid="logo"/>
            <a className="navigationButton" onClick={() => this.props.goToNScreen({num: 1})} data-testid="nextButton">
              <img src={nextSvg}/>
            </a>
          </div>
        )}
        {this.props.screen >= 1 && this.props.screen <= this.props.screensCount && (
          <div className="navigation">
            <a className="navigationButton" onClick={this.props.goToPrevScreen} data-testid="backButton">
              <img src={backSvg}/>
            </a>
            <div>
              {this.props.screen}/{this.props.screensCount}
            </div>
            <a className="navigationButton" onClick={this.props.close} data-testid="closeButton">
              <img src={closeSvg}/>
            </a>
          </div>
        )}
        {(this.props.screen > this.props.screensCount) && (
          <div className="navigation">
            <div>
              <img src={logoSvg} className="logo" alt="logo" data-testid="logo"/>
            </div>
            <a className="navigationButton" onClick={this.props.close} data-testid="closeButton">
              <img src={closeSvg}/>
            </a>
          </div>
        )}

        {(this.props.screen >= 1) && (
          <div className="progress" data-testid="progress">
            <div
              className="progress-line"
              style={{
                right: `${((this.props.screensCount + 1) - this.props.screen) / (this.props.screensCount + 1) * 100}%`,
                transition: 'right 1s'
              }}
            ></div>
          </div>
        )}
      </div>
    )
  }
}

import React from "react"
import answers from 'data/answers.json'
import HeaderComponent from "components/Header/Header.component";
import bannerImg from "assets/media/banner.png";
import giftBadgeSvg from "assets/media/badges/gift.svg";
import LinkService from "services/Link.service";

import FirstScreen from "screens/first/First.screen";
import SecondScreen from "screens/second/Second.screen";
import ThirdScreen from "screens/third/Third.screen";
import FourthScreen from "screens/fourth/Fourth.screen";
import FifthScreen from "screens/fifth/Fifth.screen";
import SixthScreen from "screens/sixth/Sixth.screen";
import SeventhScreen from "screens/seventh/Seventh.screen";
import EighthScreen from "screens/eighth/Eighth.screen";
import NinthScreen from "screens/ninth/Ninth.screen";
import TenthScreen from "screens/tenth/Tenth.screen";

export default class App extends React.Component{
  constructor(props) {
    super(props)

    if (this.props.baseUrl) this.linkService = new LinkService(this.props.baseUrl)
    else this.linkService = new LinkService('')

    this.state = {
      currentScreen: 0,
      screensCount: 10,
      answers: {
        gender: null,
        eyewear_type: null,
        lenstype: null,
        frame_size: null,
        blue_light: null,
        shade: null,
        face_shape: null,
        facial_features: null,
        shape: null,
        brand: null
      }
    }

    this.goToNScreen = this.goToNScreen.bind(this)
    this.goToPrevScreen = this.goToPrevScreen.bind(this)
    this.close = this.close.bind(this)
  }

  close() {
    this.setState({
      ...this.state,
      currentScreen: 0,
      answers: {
        gender: null,
        eyewear_type: null,
        lenstype: null,
        frame_size: null,
        blue_light: null,
        shade: null,
        face_shape: null,
        facial_features: null,
        shape: null,
        brand: null
      }
    })
  }

  goToPrevScreen() {
    this.setState({
      ...this.state,
      currentScreen: this.state.currentScreen - 1
    })
    switch (this.state.currentScreen) {
      case 1:
        this.state.answers.gender = null
        break
      case 2:
        this.state.answers.eyewear_type = null
        break
      case 3:
        this.state.answers.lenstype = null
        break
      case 4:
        this.state.answers.frame_size = null
        break
      case 5:
        this.state.answers.blue_light = null
        this.state.answers.shade = null
        break
      case 6:
        this.state.answers.face_shape = null
        break
      case 7:
        this.state.answers.facial_features = null
        break
      case 8:
        this.state.answers.shape = null
        break
      case 10:
        this.state.answers.brand = null
        break
    }
  }

  goToNScreen({value, num}) {
    switch (this.state.currentScreen) {
      case 1:
        this.state.answers.gender = value
        break
      case 2:
        this.state.answers.eyewear_type = value
        break
      case 3:
        this.state.answers.lenstype = value
        break
      case 4:
        this.state.answers.frame_size = value
        break
      case 5:
        if (this.state.answers.eyewear_type === answers.eyewear_type.sunglasses)
          this.state.answers.shade = value
        else
          this.state.answers.blue_light = value
        break
      case 6:
        this.state.answers.face_shape = value
        break
      case 7:
        this.state.answers.facial_features = value
        break
      case 8:
        this.state.answers.shape = value
        break
      case 10:
        this.state.answers.brand = value
        break
    }
    this.setState({
      ...this.state,
      currentScreen: num
    })
  }

  getCurrentScreen() {
    switch(this.state.currentScreen) {
      case 1: return <FirstScreen goToNScreen={this.goToNScreen}/>
      case 2: return <SecondScreen goToNScreen={this.goToNScreen} gender={this.state.answers.gender}/>
      case 3: return <ThirdScreen goToNScreen={this.goToNScreen}/>
      case 4: return <FourthScreen goToNScreen={this.goToNScreen}/>
      case 5: return <FifthScreen goToNScreen={this.goToNScreen} eyewear_type={this.state.answers.eyewear_type}/>
      case 6: return <SixthScreen goToNScreen={this.goToNScreen} gender={this.state.answers.gender}/>
      case 7: return <SeventhScreen goToNScreen={this.goToNScreen}/>
      case 8: return <EighthScreen goToNScreen={this.goToNScreen}/>
      case 9: return <NinthScreen goToNScreen={this.goToNScreen}/>
      case 10: return <TenthScreen goToNScreen={this.goToNScreen}/>
    }
  }

  generateAndOutputLink() {
    const link = this.linkService.generate(this.state.answers)
    console.log(link)
  }

  render() {
    return (
      <div className="glasses-quiz-widget">
        <HeaderComponent
          screen={this.state.currentScreen}
          screensCount={this.state.screensCount}
          goToNScreen={this.goToNScreen}
          goToPrevScreen={this.goToPrevScreen}
          close={this.close}
        />
        {this.state.currentScreen < 1 && (
          <div
            className="body preview"
          >
            <div
              className="banner"
              style={{
                marginTop: '67px',
                paddingRight: '10px'
              }}
            >
              <img src={bannerImg}/>
            </div>
            <div
              className="title-primary-lg"
              style={{
                marginTop: '48px'
              }}
            >
              Let’s find your perfect pair!
            </div>
            <div
              className="description-primary-md"
              style={{
                marginTop: '22px'
              }}
            >
              Take the quiz to easily discover your perfect fit from thousands of styles
            </div>
            <button
              className="m-0-auto button"
              style={{
                marginTop: '30px'
              }}
              onClick={() => this.goToNScreen({num: 1})}
            >Start Now</button>
          </div>
        )}
        {this.state.currentScreen >= 1 && this.state.currentScreen <= this.state.screensCount && (
          <div className="body screen">
            {this.getCurrentScreen()}
          </div>
        )}
        {(this.state.currentScreen > this.state.screensCount) && (
          <div className="body screen">
            <div className="screen-flex-column-between">
              <div>
                <div
                  className="text-center badge"
                  style={{
                    marginTop: '13px'
                  }}
                >
                  <img
                    src={giftBadgeSvg}
                  />
                </div>
                <div
                  className="title-primary-md padding-x-sm"
                  style={{
                    marginTop: '7px'
                  }}
                >
                  We've found some awesome frames for you!
                </div>
                <div
                  className="description-primary-lg padding-x-sm"
                  style={{
                    marginTop: '12px'
                  }}
                >
                  We've found some awesome frames for you!
                </div>
                <button
                  className="m-0-auto button"
                  style={{
                    marginTop: '50px'
                  }}
                  onClick={() => this.generateAndOutputLink()}
                >Send</button>
              </div>
              <div className="padding-x-2xl hint">
                By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy and receiving promotion emails
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

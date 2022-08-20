import React from "react"
import answers from "../../data/answers.json";
import likeBadgeSvg from "../../assets/media/badges/like.svg";
import lensWidthSvg from "../../assets/media/lens-width.svg";
import {Flex} from "@chakra-ui/react";

export default class FourthScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stage: 0,
      frame_width: [
        {
          name: "Small",
          size: '42-48 mm',
          value: answers.frame_size.small
        },
        {
          name: "Medium",
          size: '49-53 mm',
          value: answers.frame_size.medium
        },
        {
          name: "Large",
          size: '54-58 mm',
          value: answers.frame_size.large
        }
      ],
      faces: [
        {
          name: "Wider Than Average",
          value: answers.frame_size.wider
        },
        {
          name: "Average",
          value: answers.frame_size.average
        },
        {
          name: "Narrower Than Average",
          value: answers.frame_size.narrower
        }
      ],
    }
  }

  goToNStage({num}) {
    this.setState({
      ...this.state,
      stage: num
    })
  }

  render() {
    return (
      <>
        {this.state.stage === 0 && (
          <div className="padding-x-lg screen-flex-column-between">
            <div
              style={{
                marginTop: '50px'
              }}
            >
              <div className="padding-x-3xl meta-primary">
                What’s your current frame size?
              </div>
              <div
                className="banner"
                style={{
                  marginTop: '38px'
                }}
              >
                <img src={lensWidthSvg}/>
              </div>
              <div
                style={{
                  marginTop: '35px'
                }}
              >
                <Flex gap="12px" direction="column">
                  {
                    this.state.frame_width.map(frame_width => (
                      <a
                        key={`frame-width-${frame_width.value}`}
                        className="card frame-width-card"
                        onClick={() => this.props.goToNScreen({num: 5, value: frame_width.value})}
                      >
                        <div className="name">
                          {frame_width.name}
                        </div>
                        <div className="size">
                          {frame_width.size}
                        </div>
                      </a>
                    ))
                  }
                </Flex>
              </div>
            </div>
            <a
              className="other-option"
              onClick={() => {
                this.goToNStage({num: 1});
                setTimeout(() => this.goToNStage({num: 2}), 2000)
              }}
            >
              I don’t know
            </a>
          </div>
        )}
        {this.state.stage === 1 && (
          <div>
            <div
              className="text-center badge"
              style={{
                marginTop: '75px'
              }}
            >
              <img
                src={likeBadgeSvg}
              />
              <div
                className="title-primary-lg padding-x-sm"
                style={{
                  marginTop: '15px'
                }}
              >
                Let's get to know you!
              </div>
            </div>
          </div>
        )}
        {this.state.stage === 2 && (
          <div className="padding-x-xl screen-flex-column-between">
            <div
              style={{
                marginTop: '50px'
              }}
            >
              <div className="meta-primary padding-x-sm">
                <div className="padding-x-lg">
                  How wide would you say your face is?
                </div>
              </div>
              <div
                style={{
                  marginTop: '32px'
                }}
              >
                <Flex gap="12px" direction="column">
                  {
                    this.state.faces.map(face => (
                      <a
                        key={`face-width-${face.value}`}
                        className="card face-width-card"
                        onClick={() => this.props.goToNScreen({num: 5, value: face.value})}
                      >
                        {face.name}
                      </a>
                    ))
                  }
                </Flex>
              </div>
            </div>
            <a
              className="other-option"
              onClick={() => this.props.goToNScreen({num: 5, value: null})}
            >
              I’m not sure
            </a>
          </div>
        )}
      </>
    )
  }
}

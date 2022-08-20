import React from "react"
import {Flex} from "@chakra-ui/react";
import answers from "../../data/answers.json";
import likeBadgeSvg from "../../assets/media/badges/like.svg";

export default class ThirdScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stage: 0,
      visions: [
        {
          id: 1,
          name: "Near Vision",
          value: answers.lenstype.near
        },
        {
          id: 2,
          name: "Distance Vision",
          value: answers.lenstype.distance
        },
        {
          id: 3,
          name: "Multifocal / Progressive",
          value: answers.lenstype.multifocal
        }
      ]
    }
  }

  componentDidMount() {
    setTimeout(() => this.goToNStage({num: 1}), 2000)
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
        {this.state.stage === 1 && (
          <div className="screen-flex-column-between">
            <div
              style={{
                marginTop: '50px'
              }}
            >
              <div className="meta-primary">
                Do you need vision correction?
              </div>
              <div
                style={{
                  marginTop: '32px'
                }}
              >
                <Flex className="padding-x-3xl" gap="14px" direction="column">
                  <a
                    className="card vision-option-card"
                    onClick={() => this.goToNStage({num: 2})}
                  >
                    <div className="name">
                      Yes
                    </div>
                  </a>
                  <a
                    className="card vision-option-card"
                    onClick={() => this.props.goToNScreen({num: 4, value: null})}
                  >
                    <div className="name">
                      No
                    </div>
                  </a>
                </Flex>
              </div>
            </div>
            <a
              className="other-option"
              onClick={() => this.props.goToNScreen({num: 4, value: null})}
            >
              Skip
            </a>
          </div>
        )}
        {this.state.stage === 2 && (
          <div className="screen-flex-column-between">
            <div
              style={{
                marginTop: '50px'
              }}
            >
              <div className="meta-primary">
                What do you need your glasses for?
              </div>
              <div
                style={{
                  marginTop: '23px'
                }}
              >
                <Flex className="padding-x-3xl" gap="14px" direction="column">
                  {
                    this.state.visions.map(vision => (
                      <div
                        key={`eyeware-${vision.id}`}
                        className="vision-card card"
                        onClick={() => this.props.goToNScreen({num: 4, value: vision.value})}
                      >
                        {vision.name}
                      </div>
                    ))
                  }
                </Flex>
              </div>
            </div>
            <a
              className="other-option"
              onClick={() => this.props.goToNScreen({num: 4, value: null})}
            >
              Skip
            </a>
          </div>
        )}
      </>
    )
  }
}

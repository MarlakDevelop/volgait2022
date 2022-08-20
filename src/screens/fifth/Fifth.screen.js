import React from "react"
import answers from "../../data/answers.json";
import {Flex} from "@chakra-ui/react";

import darkShadeSvg from "../../assets/media/shades/dark.svg";
import lightShadeSvg from "../../assets/media/shades/light.svg";
import transitionShadeSvg from "../../assets/media/shades/transition.svg";

export default class FifthScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shades: [
        {
          name: "Dark Shade",
          icon: darkShadeSvg,
          value: answers.shade.dark
        },
        {
          name: "Light Shade",
          icon: lightShadeSvg,
          value: answers.shade.light
        },
        {
          name: "Transitioning Shade",
          icon: transitionShadeSvg,
          value: answers.shade.transition
        }
      ]
    }
  }

  render() {
    return (
      <div className="screen-flex-column-between">
        <div
          style={{
            marginTop: '50px'
          }}
        >
          <div className="padding-x-sm meta-primary">
            {this.props.eyewear_type === answers.eyewear_type.sunglasses
              ? 'When you’re out and about, which shade of lenses do you prefer?'
              : 'Would you like to protect your eyes from light emanating from screens?'
            }
          </div>
          <div
            style={{
              marginTop: '32px'
            }}
          >
            {this.props.eyewear_type === answers.eyewear_type.sunglasses
              ? (
                <Flex className="padding-x-lg" gap="16px" direction="column">
                  {
                    this.state.shades.map(shade => (
                      <a
                        key={`face-shape-${shade.value}`}
                        className="card shade-card"
                        onClick={() => this.props.goToNScreen({num: 6, value: shade.value})}
                      >
                        <div className="icon">
                          <img src={shade.icon}/>
                        </div>
                        <div className="divisor"></div>
                        <div className="name">
                          {shade.name}
                        </div>
                      </a>
                    ))
                  }
                </Flex>
              )
              : (
                <Flex className="padding-x-xl" gap="14px" direction="column">
                  <a
                    className="card eyeglasses-option-card"
                    onClick={() => this.props.goToNScreen({num: 6, value: answers.blue_light.yes})}
                  >
                    <div className="name">
                      Yes
                    </div>
                  </a>
                  <a
                    className="card eyeglasses-option-card"
                    onClick={() => this.props.goToNScreen({num: 6, value: answers.blue_light.no})}
                  >
                    <div className="name">
                      No
                    </div>
                  </a>
                </Flex>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

import React from "react"
import {Flex} from "@chakra-ui/react";
import answers from "../../data/answers.json";

import eyeglassesWomenIcon from "assets/media/glasses/women/eyeglasess.svg";
import sunglassesWomenIcon from "assets/media/glasses/women/sunglasses.svg";
import eyeglassesMenIcon from "assets/media/glasses/men/eyeglasess.svg";
import sunglassesMenIcon from "assets/media/glasses/men/sunglasses.svg";

export default class SecondScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eyewares: [
        {
          icon: this.props.gender === answers.gender.women ? eyeglassesWomenIcon : eyeglassesMenIcon,
          name: "Eyeglasses",
          value: answers.eyewear_type.eyeglasses
        },
        {
          icon: this.props.gender === answers.gender.women ? sunglassesWomenIcon : sunglassesMenIcon,
          name: "Sunglasses",
          value: answers.eyewear_type.sunglasses
        }
      ]
    }
  }

  render() {
    return (
      <div className="padding-x-3xl screen-flex-column-between">
        <div
          style={{
            marginTop: '50px'
          }}
        >
          <div className="meta-primary">
            <div className="padding-x-sm">
              What type of glasses are you looking for?
            </div>
          </div>
          <div
            style={{
              marginTop: '32px'
            }}
          >
            <Flex gap="14px" direction="column">
              {
                this.state.eyewares.map(eyeware => (
                  <a
                    key={`eyeware-${eyeware.value}`}
                    className="card eyeware-type-card"
                    onClick={() => this.props.goToNScreen({num: 3, value: eyeware.value})}
                  >
                    <div className="icon">
                      <img src={eyeware.icon}/>
                    </div>
                    <div className="name">
                      {eyeware.name}
                    </div>
                  </a>
                ))
              }
            </Flex>
          </div>
        </div>
        <a
          className="other-option"
          onClick={() => this.props.goToNScreen({num: 3, value: null})}
        >
          I'd like to see both
        </a>
      </div>
    )
  }
}

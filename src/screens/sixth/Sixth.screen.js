import React from "react"
import answers from "../../data/answers.json";
import {Flex} from "@chakra-ui/react";

import menLongFaceSvg from "assets/media/shapes/men/long.svg"
import menBetweenFaceSvg from "assets/media/shapes/men/between.svg"
import menRoundFaceSvg from "assets/media/shapes/men/round.svg"

import womenLongFaceSvg from "assets/media/shapes/women/long.svg"
import womenBetweenFaceSvg from "assets/media/shapes/women/between.svg"
import womenRoundFaceSvg from "assets/media/shapes/women/round.svg"

import generalLongFaceSvg from "assets/media/shapes/general/long.svg"
import generalBetweenFaceSvg from "assets/media/shapes/general/between.svg"
import generalRoundFaceSvg from "assets/media/shapes/general/round.svg"

export default class SixthScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shapes: [
        {
          name: "I have a long face",
          icon: this.props.gender === answers.gender.men ? menLongFaceSvg :
            this.props.gender === answers.gender.women ? womenLongFaceSvg :
              generalLongFaceSvg,
          value: answers.face_shape.long
        },
        {
          name: "I have a round face",
          icon: this.props.gender === answers.gender.men ? menRoundFaceSvg :
            this.props.gender === answers.gender.women ? womenRoundFaceSvg :
              generalRoundFaceSvg,
          value: answers.face_shape.round
        },
        {
          name: "In between",
          icon: this.props.gender === answers.gender.men ? menBetweenFaceSvg :
            this.props.gender === answers.gender.women ? womenBetweenFaceSvg :
              generalBetweenFaceSvg,
          value: answers.face_shape.between
        }
      ]
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
      <div className="screen-flex-column-between">
        <div
          style={{
            marginTop: '50px'
          }}
        >
          <div className="padding-x-3xl meta-primary">
            <div className="padding-x-sm">
              Every face shape has a perfect fit. What’s yours?
            </div>
          </div>
          <div
            className="padding-x-lg"
            style={{
              marginTop: '32px'
            }}
          >
            <Flex gap="16px" direction="column">
              {
                this.state.shapes.map(shape => (
                  <a
                    key={`shade-${shape.value}`}
                    className={`card face-shape-card ${this.props.gender === null ? 'non-gender' : 'gender'}`}
                    onClick={() => this.props.goToNScreen({num: 7, value: shape.value})}
                  >
                    <div className="icon">
                      <img src={shape.icon}/>
                    </div>
                    <div className="divisor"></div>
                    <div className="name">
                      {shape.name}
                    </div>
                  </a>
                ))
              }
            </Flex>
          </div>
        </div>
        <a
          className="other-option"
          onClick={() => this.props.goToNScreen({num: 7, value: null})}
        >
          I don’t know
        </a>
      </div>
    )
  }
}

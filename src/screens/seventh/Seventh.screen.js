import React from "react"
import answers from "../../data/answers.json";
import {Flex} from "@chakra-ui/react";

export default class SeventhScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shapes: [
        {
          name: "Sharp",
          value: answers.facial_features.sharp
        },
        {
          name: "Rounded",
          value: answers.facial_features.rounded
        },
        {
          name: "In between",
          value: answers.facial_features.between
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
          <div className="padding-x-3xl meta-primary">
            <div className="padding-x-sm">
              How would you define your facial features?
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
                    className="card facial-features-card"
                    onClick={() => this.props.goToNScreen({num: 8, value: shape.value})}
                  >
                    {shape.name}
                  </a>
                ))
              }
            </Flex>
          </div>
        </div>
        <a
          className="other-option"
          onClick={() => this.props.goToNScreen({num: 8, value: null})}
        >
          I don’t know
        </a>
      </div>
    )
  }
}

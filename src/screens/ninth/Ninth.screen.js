import React from "react"
import answers from "../../data/answers.json";
import {Flex} from "@chakra-ui/react";

export default class NinthScreen extends React.Component {
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

  goToNStage({num}) {
    this.setState({
      ...this.state,
      stage: num
    })
  }

  render() {
    return (
      <div className="padding-x-3xl screen-flex-column-between">
        <div
          style={{
            marginTop: '50px'
          }}
        >
          <div className="padding-x-sm meta-primary">
            Are you looking for any particular eyewear brands?
          </div>
          <div
            style={{
              marginTop: '32px'
            }}
          >
            <Flex gap="16px" direction="column">
              <a
                className="card brand-option-card"
                onClick={() => this.props.goToNScreen({num: 10, value: null})}
              >
                <div>
                  Yes, I have some in mind
                </div>
              </a>
              <a
                className="card brand-option-card"
                onClick={() => this.props.goToNScreen({num: 11, value: null})}
              >
                <div>
                  No, brand isn't important
                </div>
              </a>
            </Flex>
          </div>
        </div>
        <a
          className="other-option"
          onClick={() => this.props.goToNScreen({num: 7})}
        >
          I don’t know
        </a>
      </div>
    )
  }
}

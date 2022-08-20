import React from "react"
import { Flex } from '@chakra-ui/react'
import answers from 'data/answers.json'

import genderMenIcon from 'assets/media/genders/men.svg'
import genderWomenIcon from 'assets/media/genders/women.svg'

export default class FirstScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genders: [
        {
          icon: genderWomenIcon,
          name: "Women's Styles",
          value: answers.gender.women
        },
        {
          icon: genderMenIcon,
          name: "Men's Styles",
          value: answers.gender.men
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
            You are looking for
          </div>
          <div
            style={{
              marginTop: '24px'
            }}
          >
            <Flex gap="14px" direction="column">
              {
                this.state.genders.map(gender => (
                  <a
                    key={`gender-${gender.value}`}
                    className="card gender-card"
                    onClick={() => this.props.goToNScreen({num: 2, value: gender.value})}
                  >
                    <div className="icon">
                      <img src={gender.icon}/>
                    </div>
                    <div className="name">
                      {gender.name}
                    </div>
                  </a>
                ))
              }
            </Flex>
          </div>
        </div>
        <a
          className="other-option"
          onClick={() => this.props.goToNScreen({num: 2, value: null})}
        >
          I'd like to see both
        </a>
      </div>
    )
  }
}

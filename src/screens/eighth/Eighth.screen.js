import React from "react"
import {Grid, Flex} from "@chakra-ui/react";
import SelectionCardComponent from "components/SelectionCard/SelectionCard.component";

import RectangleImg from "assets/media/frames/Rectangle.png"
import BrowlineImg from "assets/media/frames/Browline.png"
import AviatorImg from "assets/media/frames/Aviator.png"
import GeometricImg from "assets/media/frames/Geometric.png"
import WayframeImg from "assets/media/frames/Wayframe.png"
import RoundImg from "assets/media/frames/Round.png"
import OvalImg from "assets/media/frames/Oval.png"
import OversizedImg from "assets/media/frames/Oversized.png"
import CatEyeImg from "assets/media/frames/Cat Eye.png"
import RimlessImg from "assets/media/frames/Rimless.png"
import SquareImg from "assets/media/frames/Square.png"
import WrapImg from "assets/media/frames/Wrap.png"

export default class EighthScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      frames: [
        {
          image: RectangleImg,
          name: "Rectangle",
          value: "rectangle"
        },
        {
          image: BrowlineImg,
          name: "Browline",
          value: "browline"
        },
        {
          image: AviatorImg,
          name: "Aviator",
          value: "aviator"
        },
        {
          image: GeometricImg,
          name: "Geometric",
          value: "geometric"
        },
        {
          image: WayframeImg,
          name: "Wayframe",
          value: "wayframe"
        },
        {
          image: RoundImg,
          name: "Round",
          value: "round"
        },
        {
          image: OvalImg,
          name: "Oval",
          value: "oval"
        },
        {
          image: OversizedImg,
          name: "Oversized",
          value: "oversized"
        },
        {
          image: CatEyeImg,
          name: "Cat Eye",
          value: "cat_eye"
        },
        {
          image: RimlessImg,
          name: "Rimless",
          value: "rimless"
        },
        {
          image: SquareImg,
          name: "Square",
          value: "square"
        },
        {
          image: WrapImg,
          name: "Wrap",
          value: "wrap"
        }
      ],
      selected: []
    }
  }

  changeSelection(value) {
    if (this.state.selected.includes(value)) {
      this.setState({
        ...this.state,
        selected: this.state.selected.filter(elem => elem !== value)
      })
    } else {
      this.setState({
        ...this.state,
        selected: [...this.state.selected, value]
      })
    }
  }

  getMappedList() {
    return this.state.frames.map(frame => {
      return {
        ...frame,
        selected: this.state.selected.includes(frame.value)
      }
    })
  }

  render() {
    return (
      <div>
        <div
          style={{
            marginTop: '30px'
          }}
        >
          <div className="meta-primary">
            Which frame style are you looking for?
          </div>
          <div
            style={{
              marginTop: '10px'
            }}
            className="meta-secondary"
          >
            You can pick more than one.
          </div>
          <Flex
            justify={"center"}
            style={{
              marginTop: '11px'
            }}
          >
            <Grid
              className="padding-x-xs horizontal-scroller"
              templateColumns="repeat(4, 160px)"
              gap={11}
            >
              {
                this.getMappedList().map(frame => (
                  <SelectionCardComponent
                    key={`frame-${frame.value}`}
                    active={frame.selected}
                    onClick={() => this.changeSelection(frame.value)}
                  >
                    <div className="frame-card">
                      <div className="image">
                        <img src={frame.image}/>
                      </div>
                      <div className="name">
                        {frame.name}
                      </div>
                    </div>
                  </SelectionCardComponent>
                ))
              }
            </Grid>
          </Flex>
        </div>
        <button
          className="button m-0-auto"
          onClick={() => this.props.goToNScreen({num: 9, value: this.state.selected})}
          disabled={this.state.selected.length === 0}
        >
          Continue
        </button>
      </div>
    )
  }
}

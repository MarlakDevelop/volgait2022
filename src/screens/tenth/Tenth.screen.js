import React from "react"
import {Flex, Grid} from "@chakra-ui/react"
import SelectionCardComponent from "components/SelectionCard/SelectionCard.component"

import RayBanSvg from "assets/media/brands/Ray Ban.svg"
import OakleySvg from "assets/media/brands/Oakley.svg"
import GucciSvg from "assets/media/brands/Gucci.svg"
import ArmaniExchangeSvg from "assets/media/brands/Armani Exchange.svg"
import HillaryDuffSvg from "assets/media/brands/Hillary Duff.svg"
import PradaSvg from "assets/media/brands/Prada.svg"
import VersaceSvg from "assets/media/brands/Versace.svg"
import VogueEyewearSvg from "assets/media/brands/Vogue eyewear.svg"
import MichaelKorsSvg from "assets/media/brands/Michael Kors.svg"
import CoachSvg from "assets/media/brands/Coach.svg"
import ToryBurchSvg from "assets/media/brands/Tory Burch.svg"
import BurberrySvg from "assets/media/brands/Burberry.svg"

export default class TenthScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brands: [
        {
          icon: RayBanSvg,
          value: "ray_ban"
        },
        {
          icon: OakleySvg,
          value: "oakley"
        },
        {
          icon: GucciSvg,
          value: "gucci"
        },
        {
          icon: ArmaniExchangeSvg,
          value: "armani_exchange"
        },
        {
          icon: HillaryDuffSvg,
          value: "hillary_duff"
        },
        {
          icon: PradaSvg,
          value: "prada"
        },
        {
          icon: VersaceSvg,
          value: "versace"
        },
        {
          icon: VogueEyewearSvg,
          value: "vogue_eyewear"
        },
        {
          icon: MichaelKorsSvg,
          value: "michael_kors"
        },
        {
          icon: CoachSvg,
          value: "coach"
        },
        {
          icon: ToryBurchSvg,
          value: "tory_burch"
        },
        {
          icon: BurberrySvg,
          value: "burberry"
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
    return this.state.brands.map(brand => {
      return {
        ...brand,
        selected: this.state.selected.includes(brand.value)
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
                this.getMappedList().map(brand => (
                  <SelectionCardComponent
                    key={`frame-${brand.value}`}
                    active={brand.selected}
                    onClick={() => this.changeSelection(brand.value)}
                  >
                    <div className="brand-card">
                      <div className="image">
                        <img src={brand.icon}/>
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
          onClick={() => this.props.goToNScreen({num: 11, value: this.state.selected})}
          disabled={this.state.selected.length === 0}
        >
          Continue
        </button>
      </div>
    )
  }
}

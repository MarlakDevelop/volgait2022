import React from "react"

export default class SelectionCardComponent extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a
        onClick={this.props.onClick}
        className={`card selection-card ${this.props.active ? 'active' : ''}`}
        data-testid="selectionCard"
      >
        <div className="ok-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.2621" cy="9.702" r="9.702" fill="#2196F3"/>
            <path d="M7.02808 10.2695L9.62682 12.936L13.4961 7.54601" stroke="white" strokeWidth="1.96" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="selection-card-container">
          {this.props.children}
        </div>
      </a>
    )
  }
}

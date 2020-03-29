import React, { Component } from 'react'

import tableau from "tableau-api";

class TableauViz extends Component {
  componentDidMount() {
    this.initTableau(this.props.options)
  }
  
  initTableau(additionalOptions) {
    const vizUrl = 'https://public.tableau.com/views/CaliforniaCOVID19Fatalities/Dashboard1';
    const baseOptions = {
    
    };
    const configOptions = Object.assign(baseOptions, additionalOptions);
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, configOptions);
  };

  render() {
    return (
      <>
        <div ref={(div) => { this.vizContainer = div }}/>
      </>
    )
  }
}

export default TableauViz
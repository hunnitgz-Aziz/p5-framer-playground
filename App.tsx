import * as React from "react";
import { Frame, useCycle } from "framer";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./Sketch";
import styled from "styled-components";
import "./styles.css";

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

const initialState = {
  sliderAlpha: 1.475,
  sliderBeta: 1.3,
  sliderGamma: 0.8,
  sliderDelta: 1.4
};

const Wrapper = styled.div``;

const SliderContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  height: 300px;
`;

const SliderLabel = styled.label``;

const RangeSlider = styled.input`
  display: block;
  width: 100%;
  position: relative;
`;

const SliderOutput = styled.output`
  color: #fff;

  left: 0;
  display: inline-block;
  top: 0;
`;

export class App extends React.Component {
  state = initialState;

  setAlpha = p => {
    this.setState({ sliderAlpha: p });
  };

  setBeta = p => {
    this.setState({ sliderBeta: p });
  };

  setGamma = p => {
    this.setState({ sliderGamma: p });
  };

  setDelta = p => {
    this.setState({ sliderDelta: p });
  };

  render() {
    return (
      <Wrapper>
        <P5Wrapper
          sketch={sketch}
          sliderAlpha={this.state.sliderAlpha}
          sliderBeta={this.state.sliderBeta}
          sliderGamma={this.state.sliderGamma}
          sliderDelta={this.state.sliderDelta}
        />
        <SliderContainer>
          <SliderLabel htmlFor="slider">
            <RangeSlider
              id="sliderAlpha"
              name="alpha"
              className="range_slider"
              type="range"
              min={-3}
              max={3}
              step={0.001}
              value={this.state.sliderAlpha}
              onChange={event => this.setAlpha(+event.target.value)}
            />
            {/* <SliderOutput
              htmlFor="alpha"
              onforminput="value = alpha.valueAsNumber;"
            >
              {this.state.sliderAlpha}
            </SliderOutput> */}
          </SliderLabel>
          <SliderLabel htmlFor="slider">
            <RangeSlider
              id="sliderBeta"
              className="range_slider"
              type="range"
              min={-3}
              max={3}
              step={0.001}
              value={this.state.sliderBeta}
              onChange={event => this.setBeta(+event.target.value)}
            />
          </SliderLabel>
          <SliderLabel htmlFor="slider">
            <RangeSlider
              id="sliderGamma"
              className="range_slider"
              type="range"
              min={-3}
              max={3}
              step={0.001}
              value={this.state.sliderGamma}
              onChange={event => this.setGamma(+event.target.value)}
            />
          </SliderLabel>
          <SliderLabel htmlFor="slider">
            <RangeSlider
              id="sliderDelta"
              className="range_slider"
              type="range"
              min={-3}
              max={3}
              step={0.001}
              value={this.state.sliderDelta}
              onChange={event => this.setDelta(+event.target.value)}
            />
          </SliderLabel>
        </SliderContainer>
      </Wrapper>
    );
  }
}

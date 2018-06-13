import * as React from 'react'
import { Component } from 'react'
import styled from 'react-emotion'
import equals from 'fast-deep-equal'

import { base } from '../../../styles/base'

const Wrapper = styled('div')`
  display: flex;
  height: 100vh;
`

export class Main extends Component {
  componentDidUpdate(prevProps) {
    const { config } = this.props

    if (!equals(prevProps.config, config)) {
      base(config)
    }
  }

  componentDidMount() {
    base(this.props.config)
  }

  render() {
    return <Wrapper>{this.props.children}</Wrapper>
  }
}

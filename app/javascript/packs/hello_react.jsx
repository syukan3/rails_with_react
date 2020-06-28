// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      q: this.props.q || '',
      resources_path: this.props.resources_path || '',
      name: this.props.name || 'David'
    }
  }

  render() {
    return (
        <div>Hello {this.state.name}!</div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('resources-container')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(
    <Hello {...data} name="sakae" />,
    node
  )
})

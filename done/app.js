import React from "react"

function App(props) {
  const { metadata } = props
  return <div>{metadata.greeting} this is my application</div>
}
App.defaultProps = {
  metadata: {
    greeting: "Hello"
  }
}

export default App

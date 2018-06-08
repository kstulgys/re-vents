import React from "react"
import { Dimmer, Loader } from "semantic-ui-react"

const LoadingComponent = () => (
  <Dimmer active inverted>
    <Loader inverted content="Loading..." size="big" />
  </Dimmer>
)

export default LoadingComponent

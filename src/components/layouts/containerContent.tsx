import React from 'react'
import PropTypes,{InferProps} from 'prop-types'

function ContainerContent({content, sideContent}: InferProps<typeof ContainerContent.propTypes>) {
  return (
    <div className="container-content">
      <div>
        {sideContent}
      </div>
      <div>
        {content}
      </div>
    </div>
  )
}

ContainerContent.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  sideContent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ContainerContent


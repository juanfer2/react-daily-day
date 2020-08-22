import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

function ContainerList({children}: InferProps<typeof ContainerList.propTypes>) {
  return (
    <div className="container-list">
      {children}
    </div>
  )
}

ContainerList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ContainerList

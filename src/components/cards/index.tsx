import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { SvgIcon } from '@material-ui/core';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import Button from '@material-ui/core/Button';
function Card({title, description}: InferProps<typeof Card.propTypes>) {
  return (
    <div className="card">
      <div className="card__content">
        <div>
          <h3>
            {title}
          </h3>
          <p>
            {description}
          </p>
        </div>
        <div>
          <SvgIcon>
            <CheckCircleOutlinedIcon color='secondary' />
          </SvgIcon>
        </div>
      </div>
      <div className="card__footer">
        <div>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </div>
        <p>
          45%
        </p>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default Card


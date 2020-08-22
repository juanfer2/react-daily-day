import React from 'react'

/** Components */
import ContainerList from '../layouts/containerList'
import Card from '../cards'

function ListCard() {
  const listCards: string[] = ['1','1','1','1']

  return (
    <ContainerList>
      {
        listCards.map( (cardItem, i) => <Card key={i} title={cardItem} /> )
      }
    </ContainerList>
  )
}

export default ListCard

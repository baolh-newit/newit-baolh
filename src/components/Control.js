import React from 'react'
import Search from './Search'
import Sort from './Sort'

function Control(props) {
  return (
    <>
      <Search />
      <Sort onSort={props.onSort} />
    </>
  )
}

export default Control

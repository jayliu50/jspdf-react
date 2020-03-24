import React from 'react'

import { Consumer } from './PDF'

const Html = (props) => {
  const {
    x,
    y,
    sourceById,
    importHtml
  } = props
  return (
    <Consumer>
      {(context) => {
        const html = sourceById ? document.getElementById(sourceById) : importHtml
        context.doc.fromHTML(html.innerHTML, x, y)
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default Html

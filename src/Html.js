import React from 'react'

import { Consumer } from './PDF'

const Html = (props) => {
  const {
    x,
    y,
    sourceById,
    importHtml,
    settings = null,
    callback = null,
    margins = null,
    fontName
  } = props
  return (
    <Consumer>
      {(context) => {
        const html = sourceById ? document.getElementById(sourceById) : importHtml
        context.doc.setFont(fontName)
        context.doc.fromHTML(html.innerHTML, x, y, settings, callback, margins)
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default Html

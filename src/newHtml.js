import React from 'react'

import { Consumer } from './PDF'

const newtml = (props) => {
  const {
    html,
    callback,
    fontName
  } = props
  return (
    <Consumer>
      {(context) => {
        context.doc.setFont(fontName);
        context.doc.html(html, {callback});
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default newHtml

import React from 'react'

import { Consumer } from './PDF'

const NewHtml = (props) => {
  const {
    html,
    tweak,
    fontName
  } = props
  return (
    <Consumer>
      {(context) => {
        context.doc.setFont(fontName);
        context.doc.html(html, {callback: function(doc) {
          doc = tweak(doc);
          context.addProperty(doc);
        }});
        // return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default NewHtml

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
      {async (context) => {
        let pdf;
        context.doc.setFont(fontName);
        await context.doc.html(html, {callback: function(doc) {
          if (tweak) {
            pdf = tweak(doc);
          } else {
            pdf = doc;
          }
        }});
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default NewHtml

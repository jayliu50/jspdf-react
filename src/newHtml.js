import React from 'react'

import { PDFContext } from './PDF';

const NewHtml = (props) => {
  const context = useContext(PDFContext);
  const {
    html,
    tweak,
    fontName
  } = props;

  context.doc.setFont(fontName);
  context.doc.html(html, {callback: function(doc) {
    context.addProperty(doc)
  }});

  return <></>
}

export default NewHtml

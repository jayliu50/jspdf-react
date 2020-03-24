import React, { useContext } from 'react'

import { PDFContext, Consumer } from './PDF'

const Html = (props) => {
  const context = useContext(PDFContext);
  const {
    x,
    y,
    sourceById,
    importHtml,
    settings = null,
    callback = null,
    margins = null,
    fontName = 'helvetica'
  } = props

  const html = sourceById ? document.getElementById(sourceById) : importHtml
  context.doc.setFont(fontName)
  context.doc.fromHTML(html.innerHTML, x, y, settings, callback, margins)

  return context.addProperty(context.doc)
}

export default Html

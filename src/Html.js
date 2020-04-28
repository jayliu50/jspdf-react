import React, { useContext } from 'react'

import { PDFContext } from './PDF'

const Html = (props) => {
  const context = useContext(PDFContext);
  const {
    x,
    y,
    sourceById,
    importHtml,
    settings = null,
    callback = null,
    margins = null
  } = props

  const html = sourceById ? document.getElementById(sourceById) : importHtml
  context.doc.fromHTML(html.innerHTML, x, y, settings, callback, margins)
  context.addProperty(context.doc)

  return <></>
}

export default Html

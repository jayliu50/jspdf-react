import React, { useContext, Fragment } from 'react'

import { PDFContext } from './PDF'

const FooterSingle = ({page, children}) => {
  const context = useContext(PDFContext);
  context.doc.setPage(page);
  return (
    <PDFContext.Provider value={{doc: context.doc, addProperty: context.addPropertyFooter}}>
      {children.map(child => child)}
    </PDFContext.Provider>
  )
}

const Footer = (props) => {
  const context = useContext(PDFContext);
  const { children, skipFirst = false } = props;
  const { doc } = context;
  const totalPages  = doc.internal.getNumberOfPages();

  return (
    <>
      {[...Array(totalPages).keys()].map(page => {
        if (skipFirst && page === 0) return <Fragment key={page} />
        return <FooterSingle key={page} page={page + 1}>{children}</FooterSingle>
      })}
      {() => {
        context.addProperty(doc)
        return <></>
      }}
    </>
  )
}

export default Footer;

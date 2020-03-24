import React, { useContext } from 'react'

import { PDFContext } from './PDF'

const FooterSingle = ({page, children}) => {
  const context = useContext(PDFContext);
  context.doc.setPage(page);
  return (
    <PDFContext.Provider value={context}>
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
        if (skipFirst && page === 0) return <></>;
        return <FooterSingle page={page + 1}>{children}</FooterSingle>
      })}
    </>
  )
}

export default Footer;

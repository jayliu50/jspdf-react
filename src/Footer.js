import React, { useContext } from 'react'

import { PDFContext } from './PDF'

const Footer = (props) => {
  const context = useContext(PDFContext);
  const { children, skipFirst = false } = props;
  const { doc } = context;
  const totalPages  = doc.internal.getNumberOfPages();

  return (
    <>
      {[...Array(totalPages).keys()].map(page => {
        if (skipFirst && page === 0) return;
        doc.setPage(page);
        return children;
      })}
    </>
    // <Consumer>
    //   {(context) => {
        
        

    //     for (let i = totalPages; i >= 1; i--) {
    //       doc.setPage(i);      
    //     }
    //     return context.addProperty(context.doc)
    //   }}
    // </Consumer>
  )
}

export default Footer;

import React from 'react'

const processRandomPDF = (pdfs) => {

    const pdf = pdfs[Math.floor(Math.random() * pdfs.length)]
    let processedPDF;

    console.log(pdf)
    switch(true){
        
        case !!pdf.match("http://imslp.simssa.ca") || !!pdf.match("http://ks.imslp.net"):
            processedPDF = pdf.replace("http://", "https://")
            return {pdf, processedPDF, secure: true}

        case !!pdf.match("http://conquest.imslp.info"):
            processedPDF = pdf.replace("http://conquest.imslp.info", "https://ks.imslp.net")
            return {pdf, processedPDF, secure: true}
            
        case !!pdf.match("http://ks.imslp.info"):
            processedPDF = pdf.replace("http://ks.imslp.info", "https://ks.imslp.net")
            return {pdf, processedPDF, secure: true}
            
        case !!pdf.match("http://ks.petruccimusiclibrary.org"):
            processedPDF = pdf.replace("http://ks.petruccimusiclibrary.org", "https://ks.imslp.net")
            return {pdf, processedPDF, secure: true}

        default:
            return {pdf, processedPDF: null, secure: false}

    }

}

export default processRandomPDF;
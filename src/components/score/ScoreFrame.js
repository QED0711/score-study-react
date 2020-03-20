import React from 'react';

const ScoreFrame = ({ pdf, pageNum, applyPageNum }) => {

    if (typeof pdf === "object") {
        pdf = pdf.processedPDF ? pdf.processedPDF : pdf.pdf

        if (applyPageNum){
            pdf = `${pdf}#page=${pageNum}&toolbar=0&navpanes=1&scrollbar=0`
        }
    }

    if (!!pdf.match("https://")) { // if a secure url
        return (
            <iframe
                id="selected-score-url"
                src={pdf}
                type="application/pdf"
                style={{ height: 800, width: "90%", overflow: "hidden" }}
            ></iframe>)
    } else { // if an unsecure url
        return (
            <div style={{ padding: "1rem" }}>
                <h3>
                    The requested score is not served over a secure connection, and cannot be loaded in this application.
                    You can view the score in another window <a id="selected-score-url" href={pdf} target="_blank"> here</a>.
                </h3>
            </div>
        )
    }

}

export default ScoreFrame;
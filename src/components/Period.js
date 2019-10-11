import React, {useContext} from 'react';

const Period = ({ era, composers }) => {

    return (
        <section className={`period period-${era}`}>
            <h1>{era}</h1>
        </section>
    )

}

export default Period
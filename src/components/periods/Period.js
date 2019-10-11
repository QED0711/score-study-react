import React, {useContext} from 'react';

const Period = ({ era, composers }) => {
    const validComposers = composers.filter(c => {
        return c.period === era;
    })
    const periodComposers = validComposers.map((composer, i) => {
        return (
            <div key={i} className="composer-checkbox">
                <input type="checkbox" value={composer.composer}/>
                <label>{composer.displayName}</label>
            </div>
        )
    }) 

    

    

    return (
        <section className={`period period-${era}`}>
            <h3>{era}</h3>
            {periodComposers}
        </section>
    )

}

export default Period
import React, { useState } from 'react'

const Slides = ({slides}) => {
    const [ count, setCount] = useState(0);
    return (
        <div>
            <button className="btn" onClick={() => setCount(0)}
            disabled={count === 0 ? true : false}>Reset</button>
            <button className="btn" onClick={() => setCount( count - 1 )}
            disabled={count === 0 ? true : false}>Pre</button>
            <button className="btn" onClick={() => setCount(count + 1 )}
            disabled={count === slides.length - 1 ? true : false}>next</button>
            <div>
                <h3>{slides[count].title}</h3><br/>
                <p>{slides[count].text}</p>
            </div>
        </div>
    )
}
export default Slides
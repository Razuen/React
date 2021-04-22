import React from 'react';
import './Heading.scss';

function Heading({ text }) {
    return (
        <div className="heading">
            {text}
        </div>
    )
}

export default Heading

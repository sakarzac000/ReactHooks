import React, { useState } from 'react';

export default function functionalComponent(props) {
    const [visible, updateVisible] = useState(true)

    const handleToggle = () => {
        updateVisible(!visible)
    }

    return (
        <div className="functional-component">
            <h3 style={{visibility: visible ? 'visible' : 'hidden'}}>Hello!</h3>
            <button onClick={handleToggle}>{visible ? "Hide" : "Show"}</button>
        </div>
    )
}
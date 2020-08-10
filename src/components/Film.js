import React from 'react'

const Film = ({children, name}) => {
    return (
        <div className="film">
            <p><a href={children}>{name}</a></p>
            
        </div>
    )
}
export default Film
import React from 'react'

export default function Profile(props) {
    return (
        <div className="container container--bg-wine-red container--h-250 container--p-10">
            <h3 className="container__title">{props.name}</h3>
            <p className="container__text">{props.country}</p>
        </div>
    );
}
    

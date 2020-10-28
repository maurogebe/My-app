import React from 'react'

export default function Profile(props) {
    return (
        <div className="container container--bg-wine-red container--border container--h-250">
            <h3 className="container__title">{props.name}</h3>
    <p className="container__text">{props.country}</p>
        </div>
    );
}
    

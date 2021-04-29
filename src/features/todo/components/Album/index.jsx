import React from 'react';
import './styles.scss';


function AnbumList({anbum}) {
    return (
        <div className="anbum-list">
           <div>
                <img className="img-width" src={anbum.img}/>
                <p>{anbum.name}</p>
                </div>
        </div>
    );
}

export default AnbumList;
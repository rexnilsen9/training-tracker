import React from 'react';

const List = props => (
    <ul>
        {
        props.endurance.map((item, index) => <li key={index}> {item} </li>)
        }
    </ul>
);



export default List;

import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
    return (
        <div className='rank-container'>
            <div className='black f3'>
                {`${name}, you've given SmartBrain this many pictures....`}
            </div>
            <div className='black f1 count-box'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;
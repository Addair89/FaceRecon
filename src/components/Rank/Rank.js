import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className='white f3'>
                {`${name}, number of pictures you've uploaded...`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div> 
    );
}

export default Rank;
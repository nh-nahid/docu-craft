import React from 'react';

const TagPage = async ({params}) => {
    const {name} = await params;
    return (
        <div>
            {name}
        </div>
    );
};

export default TagPage;
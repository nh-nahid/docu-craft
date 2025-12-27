import React from 'react';

const AuthorPage = async ({params}) => {
    const {name} = await params;
    return (
        <div>
            {name}
        </div>
    );
};

export default AuthorPage;
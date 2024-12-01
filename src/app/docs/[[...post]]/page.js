import React from 'react';

function Page({params}) {
    return (
        <div>Post: {params.post}</div>
    );
}

export default Page;
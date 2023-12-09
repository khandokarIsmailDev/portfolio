import React from 'react';
// import { useRouter } from 'next/router';

const Page = ({ params }: any) => {
    // const router = useRouter();
    // const { id } = router.query;

    return (
        <div>
            <h1>Your ID: </h1>
            <h4>{params.id}</h4>
        </div>
    );
};

export default Page;

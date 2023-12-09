import React from 'react';
import Team from "@/components/Team";
import Advisor from "@/components/Advisor";

const Page = () => {
    return (
        <div>
            <Team/>
            <Advisor/>
            <div className="spacener"></div>
        </div>
    );
};

export default Page;
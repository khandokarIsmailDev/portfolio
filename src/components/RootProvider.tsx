'use client'

import React, { ReactNode } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

interface RootProviderProps {
    children: ReactNode;
}

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
    return (
        <>
            {children}
        <ProgressBar color="#0B5ED7" />
        </>
);
};

export default RootProvider;

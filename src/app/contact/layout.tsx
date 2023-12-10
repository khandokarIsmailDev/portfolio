import React from 'react';

export function generateMetadata(){
    return{
        title:'Contact',
        description:'SEO Agency'
    }
}

export default function RootLayout({children}:{children:React.ReactNode}){
    return(
        <div>
            {children}
        </div>
    )
}
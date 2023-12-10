import React from 'react';

export function generateMetadata(){
    return{
        title:'Team',
        description:'SEO Agency',
        icons:{
            icon: '/fabicon.png'
        }
    }
}
export default function RootLayout({children}:{children:React.ReactNode}){
    return(
        <div>
            {children}
        </div>
    )
}
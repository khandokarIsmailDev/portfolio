import React from 'react'
export function generateMetadata(){
    return{
        title:'Profile',
        description:'SEO Agency'
    }
}

export default function RootLayout({children}:{children:React.ReactNode}){
    return(
        <div>
            {children}
            <div className="spacener"></div>
        </div>
    )
}
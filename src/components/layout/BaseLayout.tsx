import * as React from 'react'
import GlobalStyle from '../../styles/GlobalStyle';

interface IBaseLayout {
    children?:React.ReactNode;
}

const BaseLayout: React.FC<IBaseLayout> = ({children}) => {
    return(
        <>  
            <GlobalStyle />
            <main>{children}</main>
        </>
    )
}

export default BaseLayout;
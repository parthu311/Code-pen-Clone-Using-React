import { createContext , useState } from "react";
import LocalStorage from '../compontent/LocalStorage'

export const DataContext = createContext();




 const DataProvider = ({children}) =>{

    const [html, setHtml] = LocalStorage('html' ,'');
    const [css, setCss] = LocalStorage( 'css' ,'');
    const [js, setJs] = LocalStorage('js', '');
    return  (
        <DataContext.Provider
            value={{
                html,
                setHtml ,
                css, 
                setCss,
                js,
                setJs, 
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
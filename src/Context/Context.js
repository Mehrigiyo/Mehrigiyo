import { createContext, useContext, useState } from "react"

 const ContextProvider = createContext()
 export const Store = ()=> useContext(ContextProvider)
function Context({children}) {
    const [modalVisible, setModalVisible] = useState(false)

    function handelVisible(){
        setModalVisible(prev => !prev)
        
    }


    const store = {
        modalVisible, 
        handelVisible ,
        setModalVisible,
    }
    return (
        <ContextProvider.Provider value={store}>
            {children}
        </ContextProvider.Provider>
    )
    
}

export default Context ;
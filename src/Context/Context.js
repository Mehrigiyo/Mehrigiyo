import { createContext, useContext, useState } from "react"

const ContextProvider = createContext()
export const Store = () => useContext(ContextProvider)

function Context({ children }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [ModalData, setModalData] = useState({})

    function handelVisible() {
        // console.log(data);
        setModalVisible(prev => !prev)
            // setModalData(data)
            // console.log('modal');

    }


    const store = {
        modalVisible,
        ModalData,
        handelVisible,
        setModalVisible,
    }
    return ( <
        ContextProvider.Provider value = { store } > { children } <
        /ContextProvider.Provider>
    )

}

export default Context;
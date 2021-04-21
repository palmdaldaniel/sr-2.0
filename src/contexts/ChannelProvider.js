import { createContext, useState, useEffect } from 'react'

export const ChannelContext = createContext()

const ChannelProvider = (props) => {
    const [channels, setChannels]  = useState(null)
    const [categories, setCategories] = useState(null)
   
    useEffect(() => {
        getAllChannels()
        getAllCategories()
    },[])


    const getAllChannels = async () => {
        let getChannels = await fetch('http://localhost:3000/api/v1/channels')
        getChannels = await getChannels.json()
        setChannels(getChannels.channels)
    }

    const getAllCategories = async () => {
        let getCategories = await fetch('http://localhost:3000/api/v1/categories')
        getCategories = await getCategories.json()
        setCategories(getCategories.programcategories);
        
    }



    const values = {
        channels,
        categories

    };
    return ( 
        <ChannelContext.Provider value={values}>
            {props.children}
        </ChannelContext.Provider>
     );
};
 
export default ChannelProvider;
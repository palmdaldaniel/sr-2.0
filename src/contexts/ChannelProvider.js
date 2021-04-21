import { createContext, useState, useEffect } from 'react'

export const ChannelContext = createContext()

const ChannelProvider = (props) => {
    const [channels, setChannels]  = useState(null)
   
    useEffect(() => {
        getAllChannels()
    },[])


    const getAllChannels = async () => {
        let getChannels = await fetch('http://localhost:3000/api/v1/channels')
        getChannels = await getChannels.json()
        setChannels(getChannels.channels)
    }



    const values = {
        channels

    };
    return ( 
        <ChannelContext.Provider value={values}>
            {props.children}
        </ChannelContext.Provider>
     );
};
 
export default ChannelProvider;
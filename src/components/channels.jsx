import { useContext } from "react";
import { ChannelContext } from "../contexts/ChannelProvider";


import Channel from './channel'

const Channels = () => {
    const { channels } = useContext(ChannelContext)
    
    return (  
        <div>
             {channels && channels.map(channel => (
                 <Channel key={channel.id} channel={channel}/>
             ))
             }
        </div>


    );
}
 
export default Channels;


const Channel = ({channel}) => {
    return ( <div>
        <h1> {channel.name}  </h1>
        <div>
            <img src={channel.image}></img>
        </div>
        <p> {channel.tagline}  </p>
    </div> );
}
 
export default Channel;
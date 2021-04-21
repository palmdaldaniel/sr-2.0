const Program = (props) => {

    console.log(props.data);

    const { name, description  } = props.data


    return (
        
        <div>
          <p> { name } </p>  
          <p> { description } </p>  
        </div>

        
     );
}
 
export default Program;
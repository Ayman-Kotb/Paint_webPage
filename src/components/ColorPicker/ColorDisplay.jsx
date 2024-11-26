
function ColorDisplay(props){
 return(
    <div className="colorDisplay_container">
        <div className="colorDisplay" style={{backgroundColor: props.color}}/>
        <p> {props.color} </p>
    </div>
 )
}

export default ColorDisplay

function ColorDisplay({props}){
 return(
    <div className="colorDisplay_container">
        <div className="colorDisplay" style={{backgroundColor: props}}/>
        <p> {props} </p>
    </div>
 )
}

export default ColorDisplay
import React, { useEffect , useState } from "react";
// import {Input} from "blocksin-system";
function Setting({canvas}){
    const [selected , setSelected] = useState(null) ;
    const [width , setWidth] = useState("") ;
    const [height , setHeight] = useState("") ;
    const [radius , setRadius] = useState("") ;
    const [color , setColor] = useState("") ;
    
    useEffect(() => {
        if(canvas.current){
            canvas.current.on("selection:created", (event) => {
                handleSelection(event.selected[0]);
            });
            canvas.current.on("selection:updated", (event) => {
                handleSelection(event.selected[0]);
            });
            canvas.current.on("selection:cleared", (event) => {
                setSelected(null);
                clearSettings();
            });
            canvas.current.on("object:modified", (event) => {
                handleSelection(event.target);
            });
            canvas.current.on("object:scaling", (event) => {
                handleSelection(event.target);
            });
            
        }

    }, [canvas])

    const handleSelection = (object) => {
        if (object){
            setSelected(object);
            if (object.type =="circle"){
                setWidth("");
                setHeight("");
                setColor(object.fill) ;
                setRadius(Math.round(object.radius * object.scaleX)) ;
            }
            else if (object.type =="rectangle"){
                setWidth(Math.round(object.width * object.scaleX));
                setHeight(Math.round(object.height * object.scaleY));
                setColor(object.fill) ;
                setRadius("") ;
            }
            else if (object.type =="triangle"){
                setWidth(Math.round(object.width * object.scaleX));
                setHeight(Math.round(object.height * object.scaleY));
                setColor(object.fill) ;
                setRadius("") ;
            }
        }
    }
    const clearSettings = () => {
        setWidth("") ;
        setHeight("") ;
        setColor("") ;
        setRadius("") ;
    }
    const handleWidthSelection = (e) => {
        const value = e.target.value.replace(/,/g, "")
        const intValue = parseInt(value, 10)
        setWidth(intValue) ;
        if(selected && selected.type =="rectangle" && intValue >=0){
            selected.set({width : intValue / selected.scaleX}) ;
            canvas.current.renderAll();
        }

    }
    const handleHeightSelection = (e) => {
        const value = e.target.value.replace(/,/g, "")
        const intValue = parseInt(value, 10)
        setHeight(intValue) ;
        if(selected && selected.type =="rectangle" && intValue >=0){
            selected.set({height : intValue / selected.scaleY}) ;
            canvas.current.renderAll();
        }
    }
    const handleRadiusSelection = (e) => {
        const value = e.target.value.replace(/,/g, "")
        const intValue = parseInt(value, 10)
        setRadius(intValue) ;
        if(selected && selected.type =="circle" && intValue >=0){
            selected.set({radius : intValue / selected.scaleY}) ;
            canvas.current.renderAll();
        }

    }

    return(
    <div className="Settings">
        {selected}
        <>
            <input
                label = "width"
                value={width}
                onChange={handleWidthSelection}
            />
            <input
                label = "height"
                value={height}
                onChange={handleHeightSelection}
            />
            
        </>
    </div>
    )
}
export default Setting
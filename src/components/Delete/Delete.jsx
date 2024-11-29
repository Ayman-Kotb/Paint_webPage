import { handleSave } from "../SaveStateToBack/SaveStateToBack";

function Delete({canvas}){
    const deleteSelected = () => {
      const active = canvas.current.getActiveObjects()
      if(active){
        active.forEach((obj) => {
          canvas.current.remove(obj);
        })
        canvas.current.discardActiveObject()

        handleSave({canvas})
        canvas.current.renderAll();
      }
    }
    window.addEventListener('keydown',(event)=> {
      if(event.key === 'Delete'){
        deleteSelected()
      }
    })
    return(
      <div className="container">
        <button className="button" onClick={deleteSelected}>Delete</button>
      </div>
    )
}
export default Delete 
function Delete({canvas}){
    const deleteSelected = () => {
        const active = canvas.current.getActiveObject()
        if(active){
            canvas.current.remove(active)
            canvas.current.discardActiveObject()
            canvas.current.renderAll()
        }
    }
    return(
      <div className="container">
        <button className="button" onClick={deleteSelected}>Delete</button>
      </div>
    )
}
export default Delete 
function Delete({canvas}){
    const deleteSelected = () => {
        const active = canvas.current.getActiveObject()
        if(active){
            canvas.current.remove(active)
            canvas.current.discardActiveObject()
            canvas.current.renderAll()
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
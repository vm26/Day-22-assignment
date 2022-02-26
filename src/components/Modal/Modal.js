const Modal = (props) => {
    if(!props.open) {
      return null;}
    return (
        <div className='bg-neutral-50 border-zinc-400 border-2 absolute top-14 left-96 ml-16'>
          {
              props.children
          }  
                                 
        </div>

    )
}
export default Modal;
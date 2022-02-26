const Main=(props)=>{
    return (
        <div className='text-center text-white bg-gray-900 p-20' onClick={props.onOtherClick}>
            <h1 className="text-5xl mb-3 font-bold">Shop in style</h1>
            <h4 className='text-slate-400 text-lg'>
                With this shop home page template
            </h4>
        </div>
    );
}
export default Main;
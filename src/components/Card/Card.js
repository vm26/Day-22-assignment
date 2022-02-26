import React,{useState} from 'react'
import './Card.css'
function Card(props) {
    const [rating, setRating] = useState(0);
     const [hover, setHover] = useState(0);

    return (

        <div className='h-96 w-72 border-zinc-200 border-2 m-6 text-center'>
            {
            props.sale?
            
            <div className='text-white text-xs absolute bg-zinc-800 ml-60 mt-2 rounded pt-1 pb-1 pr-2 pl-2 font-bold' >
                Sale
            </div>
            :
           
            <div>
            </div>
            }       
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt='image' className="h-1/2 w-72" />
            <div className="h-32 p-4 ">
                <div className="font-bold text-lg">{props.title}</div>
                <div>
                    {
                    props.rating ?
                    
                <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"                     
                      key={index}
                      className={index <= (hover || rating) ? "on bg-transparent border-0 outline-none cursor-pointer " : "off bg-transparent border-0 outline-none cursor-pointer"}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <span className="star text-2xl">&#9733;</span>
                    </button>
                  );
                })}
              </div>
                    :
                    <div></div>

                    }
                </div>

                <div>
                    <span className='line-through pr-2'>{props.oldprice}</span>
                    <span>{props.newprice}</span>
                </div>
            </div>
           
            <button className='border-black border-2 p-2 rounded hover:bg-zinc-800 hover:text-white disabled:bg-red-100 disabled:text-white' disabled={props.isdis||props.isdis1||props.isdis2||props.isdis3||props.isdis4||props.isdis5} onClick={(event)=>{props.onAdd({title:props.title,price:props.newprice,props,rating});}}>{props.bname}</button>
        </div>

    );
}
export default Card;
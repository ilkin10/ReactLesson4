// import React, { Component } from 'react'

// export default class Gallery extends Component {
   

//     constructor(props){
//         super(props);
//         this.setState={
//             count:0
//         }
//     }

//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }



import React, { useState } from 'react'
import { sculptureList } from './data';

export default function Gallery() {
   const [index,setIndex] = useState(0); 
   const[showMore,setShowMore]=useState(false);

   const hasNext = index<sculptureList.length-1;

    let item = sculptureList[index];


    function handleMoreClick(){
        setShowMore(!showMore);
    }

    function handleNextClick(){
        if(hasNext){
            setIndex(index+1);
        }
        else{
            setIndex(0);
        }
    }

  return (
    <div>
      <section>
        <button onClick={handleNextClick}>
            Next
        </button>
      </section>
      <h2>
        <i>{item.name} </i>
        by {item.artist}
      </h2>
      <h3>
        {index+1} of {sculptureList.length}
      </h3>
      <section>
        <button onClick={handleMoreClick}>
            {showMore?'Hide':'Show'} details
        </button>
        {showMore && <p>{item.description}</p>}
      </section>
      <br></br>
      <section>
        <img src={item.url} alt='Image'></img>
      </section>
    </div>
  )
}

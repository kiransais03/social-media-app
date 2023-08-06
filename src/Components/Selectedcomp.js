import React ,{useState} from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../css/Selectedcomp.css"
import backimg from "../Images/backward.png"

//imports
import likeimg from '../Images/like.svg'
import shareimg from '../Images/share.svg';


const Selectedcomp = (props) => {


const [selected,setSelected]=useState("detail");

  const  selectedobj=useSelector(state=>state.selectedimgReducer);

  if(!selectedobj){
    let atag =document.createElement('a');
    atag.href="/";
    atag.click();
  }  

  
  const imgLink=`https://picsum.photos/200?random=${selectedobj.id}`;


function details(){
setSelected('detail');
}

function userInfo(){
setSelected(`userInfo`);
}

const navigate=useNavigate();

  return (<>
<div className='selected-details-container'>
    <div className="post-heading">
      <button onClick={()=>navigate('/')}> <img src={backimg} alt="back"/> </button>
       <h1>Post Number  #{selectedobj.id}</h1>
    </div>
    <div className="post-details">
        <div className="post-image">
            <img className="img-disp" src={imgLink} alt={`post-${selectedobj.id}`} />
             <div className='info'>
             <span style={{color:"white"}}> {selectedobj.title.slice(0,20)}..</span>
              <div className='icons'>
                <img src={shareimg} alt="share" />
                <img src={likeimg} alt="like" />
                </div>
             </div>
        </div>
        <div className="details-section">
            <div className="buttons">
                <button className={selected==='detail' ?'click':'hide'} onClick={details}>Detail</button>
                <button className={selected==='userInfo' ?'click':'hide'} onClick={userInfo}>User Info</button>
            </div>
            <div className="info1">
              {selected==='detail' ? <p>{selectedobj.body}</p>
              : <p>Post Was Posted By {selectedobj.id}</p>}
            </div>
        </div>
    </div>
</div>
 <h1>More Posts</h1>
 {props.children}
</>) }

export default Selectedcomp
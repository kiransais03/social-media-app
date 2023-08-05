import React ,{useState} from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//imports
import likeimg from '../images/likeimg.svg'
import shareimg from '../images/shareimg.svg';
import Post from './Post';
import {selectedimage} from '../redux/actions/selectedimgAction';


const Selectedcomp = () => {


const [selected,setSelected]=useState("");

  const  selectedobj=useSelector(state=>state.selectedimgReducer);
  
  const imgLink=`https://picsum.photos/200?random=${selectedobj.id}`;

  const {fetching,success,failure}=useSelector(state=>state.getapiReducer);

   const dispatch=useDispatch();

  function handleClick(selectedobj){
    dispatch(selectedimage(selectedobj));
      navigate(`/item/${selectedobj.id}`);
}


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
    <p className='back' onClick={()=>navigate('/')}></p>
    <h1>Post Number  #{selectedobj.id}</h1>
    </div>
    <div className="post-details">
        <div className="post-image">
            <img src={imgLink} alt={`post-${selectedobj.id}`} />
             <div className='info'>
             <span> {selectedobj.title.slice(0,20)}..</span>
              <div className='icons'>
                <img src={shareimg} alt="share" />
                <img src={likeimg} alt="like" />
                </div>
             </div>
        </div>
        <div className="details-section">
            <div className="buttons">
                <button className={selected==='detail' ?'active':'hide'} onClick={details}>Detail</button>
                <button className={selected==='userInfo' ?'active':'hide'} onClick={userInfo}>User Info</button>
            </div>
            <div className="info">
              {selected==='detail' ? <p>{selectedobj.body}</p>
              : <p>Post Was Posted By {selectedobj.id}</p>}
            </div>
        </div>
    </div>
</div>
 <h1>More Posts</h1>
 <div className="posts">
      {fetching && <h1>Fetching...</h1>}
      {data.length>0 && data.map((post)=>{
       return <div className="post" onClick={()=>handleClick(post)} key={post.id}>
               <Post info={post} />
              </div>
      })}
   </div>
</>) }

export default Selectedcomp
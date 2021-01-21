import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MediaCard({title,imageUrl,lines}) {
    const [posts,setPosts]  = useState([]);
    const [isHide,setHide]  = useState(true);
    const [doUpdate,setUpdate] = useState(true);
    useEffect(()=>{
        (async()=>{
            let res = await axios.get('https://www.reddit.com/r/reactjs.json');
            console.log(res);
            let children = res.data.data.children;
            console.log(children);
            const newPosts  = children.map(obj=>obj.data);
            setPosts(newPosts);
        })()
    },[doUpdate]);

    /*
    React.useEffect(()=>{
        axios.get('https://www.reddit.com/r/reactjs.json').then(res=>{
            const newPosts  = res.data.data.children.map(obj=>obj.data);
            setPosts(newPosts);
            console.log('In useEffect');
        })
    },[doUpdate]);
    */
    const length = isHide?lines:posts.length;

    return (
        <div>
        <h2>{title}</h2>
        <img src={imageUrl} />
        <ul>
            {posts.slice(0,length).map(post=>(
                <li key={post.id}>{post.title}</li>
            ))}
            <button onClick={()=>setHide(!isHide)}>
                {isHide?'... read more':'read less'}
            </button>
            <button onClick={()=>setUpdate(!doUpdate)}>
                Refresh
            </button>
        </ul>
        </div>
    );
}

export default MediaCard;


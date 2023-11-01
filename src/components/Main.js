import Footer from "./Footer";
import Article from "./post/Article";
import {useEffect, useState} from 'react';
const Main = () => {
    const [blogs,setBlogs] = useState(null);
    const [isPending, setPending] = useState(true);
        useEffect(()=>{
            setTimeout(()=>{
                fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
                
            })
            .then(data => {
                setBlogs(data)
                //console.log(data)
                setPending(false)
            })
            },1000)
            
        },[]);

    return ( 
        <div className="container-fluid">
            <main className="tm-main">
            {isPending && <div className="loader">Loading...</div>}
            {blogs && <Article blogs={blogs} title="All blogs!" />}
            {blogs && <Article blogs={blogs.filter((blog)=> blog.category === 'Cooking')} title="Teach blogs!" />}
            </main>
        </div>

     );
}
 
export default Main;

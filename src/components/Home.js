import Article from "./post/Article";
import useFetch from "../useFetch";
const Home = () => {
    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs');
    return ( 
            <div className="Home">
            { error && <div className="error">{error}</div> }
            {isPending && <div className="loader">Loading...</div>}
            {blogs && <Article blogs={blogs} title="All blogs!" />}
            {/* {blogs && <Article blogs={blogs.filter((blog)=> blog.category === 'Cooking')} title="Teach blogs!" />} */}
            </div>
     );
}
 
export default Home;

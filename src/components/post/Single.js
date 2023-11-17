import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import blogsData from "../../blogsData";

const BlogDetails = () => {
    const {id} = useParams();
    // const {data:blog,isPending,error} = useFetch('http://localhost:8000/blogs/' + id);
    const {isPending,error} = useFetch();
    const blog = blogsData.blogs.find((article) => article.id === parseInt(id, 10));

    return ( 
        <div className="Details">
            { error && <div className="error">{error}</div> }
            {isPending && <div className="loader">Loading...</div>}
                {blog && (

                    <div className="row tm-row">
                        <div className="col-lg-8 tm-post-col mx-auto">
                                <div className=" tm-post-link-inner">
                                    <img src={blog.imageSrc} alt="Image" className="img-fluid" />                            
                                </div>
                            <div className="tm-post-full">                    
                                <div className="mb-4">
                                    <h2 className="pt-2 tm-color-primary tm-post-title">{blog.title}</h2>
                                    <p className="tm-mb-40">{blog.date}</p>
                                    <p>
                                        {blog.description}
                                    </p>
                                    <span className="d-block text-right tm-color-primary">{blog.category}</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                )} 
        </div>
    );
}
 
export default BlogDetails;

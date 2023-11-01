import { Link } from "react-router-dom";

const Article = ({blogs, title}) => {

    return ( 
        <div>
            <div className="row tm-row">
                <h2 className="col-12">{title}</h2>
            </div>   
            <div className="row tm-row">
           
                    {
                    blogs.map((blog)=>(
                        <article className="col-12 col-md-6 tm-post" key={blog.id}>
                        <hr className="tm-hr-primary"></hr>
                            <Link to={`/blogs/${blog.id}`}>
                                <div className=" tm-post-link-inner">
                                    <img src={blog.imageSrc} alt="Image" className="img-fluid" />                            
                                </div>
                            </Link>
                            <span className="position-absolute tm-new-badge">New</span>
                            <h2 className="tm-pt-30 tm-color-primary tm-post-title">{blog.title}</h2>
                            
                            <p className="tm-pt-30">
                            {blog.description.slice(0,100,)+"..." }               
                            </p>
                        <div className="d-flex justify-content-between tm-pt-45">
                            <span className="tm-color-primary">{blog.category}</span>
                            <span className="tm-color-primary">{blog.date}</span>
                        </div>
                        
                        <div className="d-flex justify-content-between">
                            <span>{blog.commentsCount} comments</span>
                            <span>by {blog.author}</span>
                        </div>
                    </article>
                    ))
                }
                        
            </div>
            </div>
     );
}
 
export default Article;
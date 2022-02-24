import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data:blog , isPending, error} = useFetch('http://localhost:8000/blogs/' + id );
    const history = useNavigate();

    const handleDeleteBlog = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method: 'DELETE'
        }).then(() =>{
            history('/');
        })
    }
    return (  
        <div className="blog-details">
     
                { error && <div> { error } </div> }
                { isPending && <div> Loading ... </div> }
                { blog && (
                    <article>
                        <h2> { blog.title } </h2>
                        <p> Written By : { blog.author } </p>
                        <div> { blog.body } </div>
                        <button onClick={handleDeleteBlog}>Delete Blog</button>
                    </article>
                )}
        </div>
    );
}
 
export default BlogDetails;
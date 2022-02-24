import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Kamalka');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();

    const handleSubmit= (e) =>{
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() =>{
            setIsPending(false);
            //history(-1);
            history('/');
        })

    }

    return ( 
        <div className="create">
            <h2>Add a new BLOG!!!</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog Title : </label>
                <input 
                    type="text" 
                    required
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label> Blog Body : </label>
                <textarea 
                    required
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label> Blog Author : </label>
                <select
                    value={ author }
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Kamalka">Kamalka Fernando</option>
                    <option value="Asoka">Asoka Samarawickrama</option>
                    <option value="Upali">Upali Fernando</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button>Adding Blog</button> }
            
            </form>
        </div>
     );
}
 
export default Create;
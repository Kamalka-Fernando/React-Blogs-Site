import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Kamalka');

    const handleSubmit= (e) =>{
        e.preventDefault();
        const blog = { title, body, author }

        console.log(blog)

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
                <button>Add Blog</button>
            
            </form>
        </div>
     );
}
 
export default Create;
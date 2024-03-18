import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // Prevents the page from refreshing after clicking the submit button
        e.preventDefault();

        setIsPending(true);

        const blog = {title, body, author};
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added")
            setIsPending(false);
            navigate('/');
        })
    }

    return ( 
        <div className="create">
            <h2>add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>blog title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="reid">reid</option>
                </select>
                {!isPending && <button>add blog</button>}
                {isPending && <button disabled>adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;
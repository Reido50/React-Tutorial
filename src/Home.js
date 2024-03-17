import BlogList from "./BlogList.js";

import { useEffect, useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'review 1', body: 'the game is good', author: 'reid', id: 1},
        {title: 'review 2', body: 'the game is mid', author: 'reid', id: 2},
        {title: 'review 3', body: 'the game is bad', author: 'reid', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => {return blog.id !== id;});
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("use effect ran");
    }, []);

    return (
        <div className="home">
            <BlogList blogs = {blogs} title = "all blogs" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;
import BlogList from "./BlogList.js";
import useFetch from "./useFetch.js";

const Home = () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && !error && <div>loading...</div>}
            {blogs && <BlogList blogs = {blogs} title = "all blogs"/>}
        </div>
     );
}
 
export default Home;
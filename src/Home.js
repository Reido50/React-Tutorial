const Home = () => {
    const title = 'welcome to the new blog';
    const likes = 50;
    const link = 'http://www.google.com';

    const handleClick = (e) => {
        console.log("hello!", e);
    }

    const handleClickParam = (e, name) => {
        console.log(`hello ${name}`, e);
    }

    return (
        <div className="home">
            <h2>{ title }</h2>
            <p>Likes: { likes }</p>
            <p> { 10 + 20 } </p>\
            <p> { [1, 4, 10] } </p>
            <p> {Math.random() * 10} </p>
            <p><a href={ link } target='_blank'>Link to site</a></p>
            <button onClick={handleClick}>click me!</button>
            <button onClick={(e) => handleClickParam(e, "reid")}>click me instead!</button>
        </div>
     );
}
 
export default Home;
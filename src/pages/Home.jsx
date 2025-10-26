import "./../css/Home.css";
import "./../components/Navigation";
import PopularItems from "./../components/PopularItems";


const Home = () =>
{
    return (
        <div id="parent">
          <PopularItems />
        </div>
       
    );
};

export default Home;
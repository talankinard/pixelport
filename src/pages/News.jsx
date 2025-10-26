import "./../css/News.css";
import "./../components/Navigation";
import NewsItems from "./../components/NewsItems";
import NewsFooter from "./../components/NewsFooter";


const News = () =>
{
    return (
        <div id="news">
          <NewsItems />
          <NewsFooter />
        </div>
       
    );
};

export default News;
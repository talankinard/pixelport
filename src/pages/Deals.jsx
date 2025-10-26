import "./../css/Deals.css";
import "./../components/Navigation"
import DealsItems from "../components/DealsItems";
import FeaturedDeal from "../components/FeaturedDeal";


const Deals = () =>
{
    return (
        <div id="deals">
            <DealsItems />
            <FeaturedDeal />
        </div>
    );
};

export default Deals;
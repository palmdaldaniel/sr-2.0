import Categories from "../components/Categories"
import Channels from "../components/channels"


const Home = () => {
    return (
        <div className="homepageWrapper">
           <Channels />
           <Categories />
        </div>
      );
}
 
export default Home;
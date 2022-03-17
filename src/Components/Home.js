import Title from "./Title";
import PhotoWall from "./PhotoWall";


function Home(props) {
  return (
    <div>
      <Title title={"Photowall"} />
      <PhotoWall {...props} />
    </div>
  );
};


export default Home;
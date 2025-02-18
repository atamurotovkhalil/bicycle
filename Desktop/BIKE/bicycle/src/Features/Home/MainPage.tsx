import Advantages from "./Advantages";
import Catalog from "./Catalog";
import Contact from "./Contact";
import Equipment from "./Equipment";
import Good from "./Good";
import Header from "./Header";
import Latest from "./Latest";
import Mountain from "./Mountain";
import New from "./New";
import Nothing from "./Nothing";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div>
      <Header />
      <New />
      <Catalog />
      <Nothing />
      <Good />
      <Mountain />
      <Advantages />
      <Equipment />
      <Latest />
      <Contact />
    </div>
  );
};

export default MainPage;

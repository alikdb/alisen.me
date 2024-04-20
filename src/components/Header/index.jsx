import { Sun } from "lucide-react";
import Container from "../Container";
import Divide from "../Divide";
import Navbar from "./Navbar";
import SocialSide from "./SocialSide";
const Header = () => {
  return (
    <Container margin={true}>
      <div className="flex flex-col gap-y-5">
        <div className="flex justify-between">
          <div>
            <span className="text-3xl font-bold text-white">Ali Şen</span>
          </div>
          <div>
            <Sun size={30} className="cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between">
          <Navbar />
          <SocialSide />
        </div>
        <Divide />
      </div>
    </Container>
  );
};
export default Header;

import Link from "next/link";
import Container from "../Container";
import Divide from "../Divide";
import Navbar from "./Navbar";
import SocialSide from "./SocialSide";
import Theme from "./Theme";
const Header = () => {
  return (
    <Container margin={true}>
      <div className="flex flex-col gap-y-5">
        <div className="flex justify-between">
          <div>
            <Link href={"/"}>
              <span className="text-3xl font-bold text-white">Ali Şen</span>
            </Link>
          </div>
          <Theme />
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

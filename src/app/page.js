import Container from "@/components/Container";
import Home from "@/components/Home";

const Main = () => {
  return (
    <Container>
      <Home />
    </Container>
  );
};

export const generateMetadata = () => {
  return {
    title: "alisen.me",
    description: "Software Developer.",
  };
};
export default Main;

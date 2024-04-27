import cx from "classix";
import Container from "../Container";
const Page = ({ children, title, className }) => {
  return (
    <Container className={cx("mt-16 mb-16", className)}>
      {title && (
        <h1 className="mb-3 text-2xl font-bold text-gray-200 md:text-4xl">
          {title}
        </h1>
      )}
      {children}
    </Container>
  );
};

export default Page;

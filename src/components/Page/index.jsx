import Container from "../Container";
const Page = ({ children, title }) => {
  return (
    <Container className="mt-16 mb-16">
      {title && (
        <h1 className="mb-3 text-4xl font-bold text-gray-200">{title}</h1>
      )}
      {children}
    </Container>
  );
};

export default Page;

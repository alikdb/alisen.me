import cx from "classix";
const Container = ({ children, margin = false, className }) => {
  return (
    <div
      className={cx(
        "container mx-auto",
        className ? className : "",
        margin ? "pt-6 md:pt-12" : ""
      )}
    >
      {children}
    </div>
  );
};

export default Container;

import Page from "../Page";
const UsesComponent = () => {
  return (
    <Page title="Uses">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="my setup"
        className="rounded"
        loading="lazy"
        src="/setup.jpeg"
      />
    </Page>
  );
};

export default UsesComponent;

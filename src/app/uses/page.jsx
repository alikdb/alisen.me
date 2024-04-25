import UsesComponent from "@/components/Uses";
const UsesPage = () => {
  return <UsesComponent />;
};

export const generateMetadata = () => {
  return {
    title: "Uses - alisen.me",
    description: "A list of tools and software I use for development.",
  };
};

export default UsesPage;

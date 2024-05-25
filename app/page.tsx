import { ClientsSection } from "@/components/clients.component";
import { MainView } from "../components/main-view.component";
import { ProjectsSection } from "@/components/projects.component";

const Home = () => {
  return (
    <>
      <MainView />
      <ProjectsSection />
      <ClientsSection />
    </>
  );
};

export default Home;

import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectProjectId: undefined,
    projects: [],
  });

  function handleStartProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectProjectId: null,
      };
    });
  }

  function handleAddProject(projectsData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectsData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;
  if (projectState.selectProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectState.selectProjectId === undefined) {
    content = <NoProjectSelected onStartProject={handleStartProject} />;
  }

  console.log(projectState);

  return (
    <main className="h-screen flex my-8 gap-8">
      <ProjectsSidebar onStartProject={handleStartProject} />
      {content}
    </main>
  );
}

export default App;

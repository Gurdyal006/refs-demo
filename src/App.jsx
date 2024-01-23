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

  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectsData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectsData,
        id: projectId,
      };
      return {
        ...prevState,
        // selectProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;
  if (projectState.selectProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} oncancel={handleCancelProject} />
    );
  } else if (projectState.selectProjectId === undefined) {
    content = <NoProjectSelected onStartProject={handleStartProject} />;
  }

  return (
    <main className="h-screen flex my-8 gap-8">
      <ProjectsSidebar
        onStartProject={handleStartProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;

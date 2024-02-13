import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    // undefined: we're neither adding a new project nor have a project selected. we're doing nothing
    projects: []
  });

  function startAddProjectHandler() {
    setProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
        // null: we're adding a new project
      }
    });
  }

  function finishAddProjectHandler(projectData) {
    setProjects(prevState => {
      const newProject = { ...projectData, id: Math.random() };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      }
    });
  }

  let content;
  if (projects.selectedProjectId === undefined) {
    content = <NoProjectSelected addProject={startAddProjectHandler} />;
  } else if (projects.selectedProjectId === null) {
    content = <NewProject onAdd={finishAddProjectHandler} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar addProject={startAddProjectHandler} />
        {content}
      </main>
    </>
  );
}

export default App;

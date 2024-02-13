import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  const [myProjects, setMyProjects] = useState({
    selectedProjectId: undefined,
    // undefined: we're neither adding a new project nor have a project selected. we're doing nothing
    projects: []
  });

  function startAddProjectHandler() {
    setMyProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
        // null: we're adding a new project
      }
    });
  }

  function finishAddProjectHandler(projectData) {
    setMyProjects(prevState => {
      const newProject = { ...projectData, id: Math.random() };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    });
  }

  function cancelAddProjectHandler() {
    setMyProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    });
  }

  let content;
  if (myProjects.selectedProjectId === undefined) {
    content = <NoProjectSelected addProject={startAddProjectHandler} />;
  } else if (myProjects.selectedProjectId === null) {
    content = <NewProject onAdd={finishAddProjectHandler} onCancel={cancelAddProjectHandler} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar addProject={startAddProjectHandler} projects={myProjects.projects} />
        {content}
      </main>
    </>
  );
}

export default App;

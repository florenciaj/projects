import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

function App() {
  const [myProjects, setMyProjects] = useState({
    selectedProjectId: undefined,
    // undefined: we're neither adding a new project nor have a project selected. we're doing nothing
    projects: [],
    tasks: [],
  });

  function selectProjectHandler(selectedProjectId) {
    setMyProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId,
      }
    });
  }

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

  function deleteProjectHandler() {
    setMyProjects(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id != prevState.selectedProjectId),
      }
    });
  }

  function addTaskHandler(text) {
    setMyProjects(prevState => {
      const newTask = {
        text,
        projectId: prevState.selectedProjectId,
        id: Math.random()
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      }
    });
  }

  function deleteTaskHandler(taskId) {
    setMyProjects(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id != taskId),
      }
    });
  }

  const selectedProject = myProjects.projects.find(project => project.id === myProjects.selectedProjectId);
  let content = <Project
    project={selectedProject}
    onDeleteProject={deleteProjectHandler}
    onAddTask={addTaskHandler}
    onDeleteTask={deleteTaskHandler}
    tasks={myProjects.tasks}
  />;
  if (myProjects.selectedProjectId === undefined) {
    content = <NoProjectSelected addProject={startAddProjectHandler} />;
  } else if (myProjects.selectedProjectId === null) {
    content = <NewProject onAdd={finishAddProjectHandler} onCancel={cancelAddProjectHandler} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          projects={myProjects.projects}
          addProject={startAddProjectHandler}
          onSelectProject={selectProjectHandler}
          selectedProjectId={myProjects.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  return (
    <main className="h-screen flex my-8 gap-8">
      <ProjectsSidebar />
      {/* <NewProject /> */}
      <NoProjectSelected />
    </main>
  );
}

export default App;

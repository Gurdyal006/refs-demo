import NoProjectImage from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected({ onStartProject, onCancelProject }) {
  return (
    <div className="mt-24 text-center mx-auto">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={NoProjectImage}
        alt="project image"
      />
      <h2 className="text-xl font-bold text-stone-500">No project selected</h2>
      <p className="text-stone-500 mb-4">
        Select a project or started a project new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartProject}>Create a new project</Button>
      </p>
    </div>
  );
}

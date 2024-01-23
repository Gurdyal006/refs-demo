import { useState } from "react";
import Button from "./Button.jsx";

export default function NewTask({ onAdd }) {
  const [enterTask, setEnterTask] = useState();

  function handleChange(e) {
    setEnterTask(e.target.value);
  }

  function handleClick() {
    if (enterTask.trim() === "") {
      return;
    }
    onAdd(enterTask);
    setEnterTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enterTask}
      />
      <Button onClick={handleClick}>Add Task</Button>
    </div>
  );
}

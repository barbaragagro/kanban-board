import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function PromptAddTask(props: any) {
  const [open, setOpen] = React.useState(false);

  const [inputValues, setInputValues] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCreate = () => {
    props.setNewTasksNames((prev: any) => [...prev, { task: inputValues }]);
    setInputValues("");
    handleClose();
    props.setNewTasksNumber((prev:number)=>prev+1)
  };

  const handleChange = (event:any) => {
    setInputValues(event.target.value);
  };

  return (
    <div>
      <button
        onClick={handleClickOpen}
        className="mx-3 mt-2 text-indigo-600 font-semibold"
      >
        + Add a Task
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New TaskList</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create new TaskList, please enter the name of the TaskList here.
          </DialogContentText>
          <input
            onChange={handleChange}
            placeholder="New Task Name"
            className=" focus:outline-indigo-600 border-2 border-gray-300 rounded-md w-full h-9 py-6 px-4 mt-4"
          ></input>
        </DialogContent>
        <DialogActions>
          <button
            className="text-indigo-600 hover:bg-indigo-50 p-1.5 rounded-md"
            onClick={handleClose}
          >
            CANCEL
          </button>
          <button
            className="text-indigo-600 hover:bg-indigo-50 p-1.5 rounded-md"
            onClick={handleCreate}
            disabled={inputValues === ""}
          >
            CREATE
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

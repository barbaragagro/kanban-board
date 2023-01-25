import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";

export default function FormDialog(props: any) {
  const [open, setOpen] = React.useState(false);
  const [inputValues, setInputValues] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    props.setNewTaskListNames((prev: any) => [
      ...prev,
      { tasklist: inputValues },
    ]);
    setInputValues("");
    handleClose();
  };

  const handleChange = (event: any) => {
    setInputValues(event.target.value);
  };

  return (
    <div>
      <Card
        className=" cursor-pointer m-2 w-12 h-10 text-center pt-0.5 text-xl"
        onClick={handleClickOpen}
      >
        +
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Task List</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create new Task List, please enter the name of the Task List here.
          </DialogContentText>
          <input
            onChange={handleChange}
            placeholder="New Task List Name"
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

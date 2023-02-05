import React, { Link } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Paper,
  TableContainer,
} from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/AddSharp";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../contexts";
import allReducers from "../reducers/reducers";

const Todolist = ({ setTodoId }) => {
  const todoList = useSelector((state) => allReducers.todoList);
  const dispatch = useDispatch();
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Task</TableCell>
              <TableCell>Due To</TableCell>
              <TableCell>
                <BorderColorOutlinedIcon />
              </TableCell>
              <TableCell>
                <DeleteOutlineOutlinedIcon />
              </TableCell>
            </TableRow>
          </TableHead>
          {todoList.map((elem) => {
            return (
              <TableBody>
                <TableRow key={elem.id}>
                  <TableCell>{elem.data.title}</TableCell>
                  <TableCell>{elem.data.task}</TableCell>
                  <TableCell>{elem.data.dueDate}</TableCell>
                  <Link to="/">
                    <TableCell>
                      <BorderColorOutlinedIcon
                        onClick={(elem) => setTodoId(elem.id)}
                      />
                    </TableCell>
                  </Link>
                  <TableCell>
                    <DeleteOutlineOutlinedIcon
                      onClick={(elem) => dispatch(deleteTodo(elem.id))}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
      <Link to="/">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="c
    "
          component={Paper}
          mt={2}
          minHeight="2rem"
        >
          <AddIcon />
          Add Todo
        </Box>
      </Link>
    </>
  );
};

export default Todolist;

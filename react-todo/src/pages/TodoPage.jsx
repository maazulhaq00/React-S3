import { Container, Grid, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, Box, List, ListItem, IconButton, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DoneIcon from '@mui/icons-material/Done';

import { useState } from "react";
import { green, grey } from "@mui/material/colors";
function TodoPage() {

    const [todoInput, setTodoInput] = useState({
        text: "",
        status: false,
        dateCreated: ""
    })

    const [todoList, setTodoList] = useState([])

    const taskInputChange = (e) => {
        setTodoInput({
            ...todoInput,
            text: e.target.value

        })
    }

    const taskAddButtonClick = () => {

        let now = new Date();

        setTodoList([
            ...todoList,
            {
                ...todoInput,
                dateCreated: now.toString()

            }
        ])

        setTodoInput({
            text: "",
            status: false,
            dateCreated: ""
        })

    }

    const taskDeleteButtonClick = (todoDelete) => {

        let updatedTodoList = todoList.filter((todo) => 
            todo.text !== todoDelete.text)

        setTodoList(updatedTodoList)
    }

    const taskDoneButtonClick = (todoDone) => {

        let updatedTodoList = todoList.map((todo) => { 
            if(todo.text == todoDone.text){
                return {
                    ...todo,
                    status: true
                }
            }
            else {
                return todo
            }
        })

        setTodoList(updatedTodoList)
    }

    



    return (

        <Container sx={{ my: 4 }} >

            <Grid container spacing={2}>
                <Grid size={8}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="todo-input">Add Task Todo</InputLabel>
                        <OutlinedInput
                            id="todo-input"
                            startAdornment={<InputAdornment position="start">I will </InputAdornment>}
                            label="Add Task Todo"
                            value={todoInput.text}
                            onChange={taskInputChange}
                        />
                    </FormControl>

                </Grid>
                <Grid size={4}>
                    <Box>
                        <Button variant="contained" sx={{ m: 1.2, p: 1.5 }} onClick={taskAddButtonClick}>Add</Button>
                    </Box>
                </Grid>
                <Grid size={6}>

                    <List >
                        {
                            todoList.map((todo, index) => {
                                return <ListItem sx={{ bgcolor: todo.status ? 
                                    'text.disabled' : 'success.main'}}
                                    secondaryAction={
                                        <>
                                            <IconButton edge="end" aria-label="delete" 
                                            onClick={() => taskDoneButtonClick(todo)}>
                                                <DoneIcon />
                                            </IconButton>
                                            <IconButton edge="end" aria-label="delete" 
                                            onClick={() => taskDeleteButtonClick(todo)} >
                                                <DeleteIcon />
                                            </IconButton>
                                        </>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <AssignmentIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            todo.status ? 
                                            `[Done] ${todo.text}`:
                                            todo.text
                                        }
                                        secondary={todo.dateCreated}
                                    />
                                </ListItem>
                            })
                        }

                    </List>
                </Grid>

            </Grid>

        </Container>
    );
}

export default TodoPage;
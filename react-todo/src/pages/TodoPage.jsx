import { Container, Grid, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, Box, List, ListItem, IconButton, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
function TodoPage() {
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
                        />
                    </FormControl>

                </Grid>
                <Grid size={4}>
                    <Box>
                        <Button variant="contained" sx={{ m: 1.2, p: 1.5 }}>Add</Button>
                    </Box>
                </Grid>
                <Grid size={6}>
                    
                        <List >
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary='Secondary text'
                                    />
                                </ListItem>,
                        </List>
                    </Grid>

            </Grid>

        </Container>
    );
}

export default TodoPage;
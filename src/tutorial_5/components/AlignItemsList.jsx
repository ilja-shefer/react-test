import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function AlignItemsList({ comments, deleteComment }) {
  return (
    <List>
      {comments.map((obj, index) => (
        <ListItem
          sx={{ width: '100%', minWidth: 303, bgcolor: 'background.paper' }}
          className="list-item"
          key={index}
          alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={obj.fullName} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={obj.fullName}
            secondary={
              <React.Fragment>
                <p>{obj.text}</p>
                <p>
                  {[
                    new Date(obj.createdAt).getDate(),
                    months[new Date(obj.createdAt).getMonth()],
                    new Date(obj.createdAt).getFullYear(),
                  ].join(' ')}
                </p>
              </React.Fragment>
            }
          />
          <Stack direction="row" spacing={1}>
            <IconButton onClick={() => deleteComment(index)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
}

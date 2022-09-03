import { ListItem, ListItemAvatar, ListItemText, Avatar } from "@mui/material";

function Match({ match }) {
  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar alt="Profile Picture" src={match.photo} />
      </ListItemAvatar>
      <ListItemText primary={match.name} secondary={match.bio} />
    </ListItem>
  );
}

export default Match;

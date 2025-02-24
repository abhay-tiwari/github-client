import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { RepositoriesListProps } from "./types";

const RepositoriesList = ({ repositories }: RepositoriesListProps) => {
  return (
    <>
      <List>
        {repositories.map((repo: any) => {
          return (
            <ListItem button key={repo.id}>
              <ListItemText>{repo.name}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default RepositoriesList;

import React, { useState } from "react";
import { Box, Card, Grid, List, ListItem, Typography } from "@material-ui/core";
import { RepositoriesListProps } from "./types";
import { PullRequest, Repository } from "../../pages/Repositories/types";
import { formatDate } from "../../utils/dates";
import CustomDialog from "../Dialog";
import { useStyles } from "./styles";

const RepositoriesList = ({ repositories }: RepositoriesListProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [pullRequests, setPullRequests] = useState<PullRequest[]>();

  const styles = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        {repositories.map((repo: Repository) => {
          return (
            <Grid item key={repo.id} xs={6} sm={3}>
              <Card
                style={{ padding: "1.5rem" }}
                onClick={() => {
                  if (
                    repo.pullRequests &&
                    repo.pullRequests.nodes &&
                    repo.pullRequests.nodes.length > 0
                  ) {
                    setIsDialogOpen(true);
                    setPullRequests(repo.pullRequests.nodes);
                  }
                }}
              >
                <Typography variant="h6">{repo.name}</Typography>
                <Box>{repo.description}</Box>
                <Box marginTop={4} alignItems="center" display="flex">
                  {repo.primaryLanguage && (
                    <Box display="flex" fontSize="0.75rem" alignItems="center">
                      <Box
                        width="0.5rem"
                        height="0.5rem"
                        borderRadius="50%"
                        marginRight="0.25rem"
                        style={{
                          backgroundColor: repo.primaryLanguage.color,
                        }}
                      ></Box>
                      <Box>{repo.primaryLanguage.name}</Box>
                    </Box>
                  )}
                  <Box
                    fontSize="0.75rem"
                    color="#333"
                    marginLeft="auto"
                    justifySelf="flex-end"
                  >
                    Last Updated: {formatDate(repo.pushedAt)}
                  </Box>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <CustomDialog
        title="Pull Requests"
        open={isDialogOpen}
        handleCloseDialog={() => setIsDialogOpen(false)}
      >
        <List>
          {pullRequests?.map((x: PullRequest) => {
            return (
              <ListItem
                style={{
                  borderBottom: "1px solid #ccc",
                  minHeight: "5rem",
                }}
              >
                <Box width="100%">
                  <Box>{x.title}</Box>
                  <Box marginTop={1}>
                    {x.merged && <span className={styles.merged}>Merged</span>}
                    {x.closed && <span className={styles.closed}>Closed</span>}
                  </Box>
                </Box>
              </ListItem>
            );
          })}
        </List>
      </CustomDialog>
    </>
  );
};

export default RepositoriesList;

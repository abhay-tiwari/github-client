export type Repository = {
  id: string;
  name: string;
  pushedAt: Date;
  description: string;
  pullRequests: PullRequests;
  primaryLanguage: PrimaryLanguage;
};

export type PullRequests = {
  nodes: PullRequest[];
};

export type PullRequest = {
  body: string;
  bodyHTML: string;
  title: string;
  closed: boolean;
  changesFiles: number;
  merged: boolean;
  id: string;
};

export type PrimaryLanguage = {
  id: string;
  color: string;
  name: string;
};

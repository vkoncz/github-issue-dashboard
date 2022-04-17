export interface GithubIssues {
  repository: Repository;
}

export interface Repository {
  issues: Issues;
}

export interface Issues {
  nodes: Node[];
}

export interface Node {
  createdAt: string;
  title: string;
  author: Author;
  state: State;
  url: string;
}

export interface Author {
  login: string;
  url: string;
}

export type State = 'OPEN' | 'CLOSE';

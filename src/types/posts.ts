
export interface BasePost {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface ProblemPost extends BasePost {
  type: 'problem';
  industry: string;
  anonymous: boolean;
}

export interface ResearchPost extends BasePost {
  type: 'research';
  researchArea: string;
  fundingNeeded: number;
}

export interface CollabPost extends BasePost {
  type: 'collab';
  resourceType: string;
  institution: string;
}

export type Post = ProblemPost | ResearchPost | CollabPost;

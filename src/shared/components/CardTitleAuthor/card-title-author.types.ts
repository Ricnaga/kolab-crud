import { UseCardTitleAuthorReturnType } from "./use-card-title-author.model";

export type UseCardTitleAuthorProps = {
  userId: string;
  handleNavigate?: VoidFunction;
};

export type CardTitleAuthorProps = UseCardTitleAuthorProps;

export type CardTitleAuthorViewProps = UseCardTitleAuthorReturnType;

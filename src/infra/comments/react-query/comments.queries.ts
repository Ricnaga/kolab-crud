import { useQuery } from "@tanstack/react-query";
import { commentsRequest, CommentsRequestPayload } from "../comments.requests";

export enum CommentsKey {
  Comments = "Comments",
}

export interface UseCommentsQueryProps extends CommentsRequestPayload {
  isEnabled?: boolean;
}

export function useCommentsQuery(props: UseCommentsQueryProps) {
  const { postId, isEnabled = false } = props;

  const query = useQuery({
    queryKey: [CommentsKey.Comments, postId],
    queryFn: () => commentsRequest({ postId }),
    enabled: isEnabled,
  });

  return { ...query, data: query.data?.data || [] };
}

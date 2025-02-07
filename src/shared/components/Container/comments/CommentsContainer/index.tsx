import { promiseWrapper, request } from "@/infra/@adapters/axios/wrapper";
import {
  CommentsRequestPayload,
  CommentsResponse
} from "@/infra/comments/comments.requests";
import { COMMENTS_ENDPOINT } from "@/infra/comments/endpoints";
import { CardSkeleton } from "@/screens/Home/components/CardPost/components/FormPost/components/AccordionItemContentComments/components/CardSkeleton";
import { ResponseType } from "@/shared/types/requests.types";
import { ReactNode, Suspense, useEffect, useState } from "react";

interface CommentsPresenterProps extends CommentsRequestPayload {
  children: (data: CommentsResponse) => ReactNode;
}

function CommentsPresenter(props: CommentsPresenterProps) {
  const { children, postId } = props;
  const [data, setData] = useState<CommentsResponse>([]);

  useEffect(() => {
    const promise = request<ResponseType<CommentsResponse>>({
      endpoint: COMMENTS_ENDPOINT,
      method: "GET",
      params: {
        postId,
      },
    }).then((response) => response.data ?? []);

    setData(promiseWrapper(promise));
  }, [postId]);

  return children(data);
}

type CommentsContainerProps = CommentsPresenterProps;

export function CommentsContainer(props: CommentsContainerProps) {
  const { children, postId } = props;

  return (
    <Suspense fallback={<CardSkeleton />}>
      <CommentsPresenter postId={postId}>
        {(data) => children(data)}
      </CommentsPresenter>
    </Suspense>
  );
}

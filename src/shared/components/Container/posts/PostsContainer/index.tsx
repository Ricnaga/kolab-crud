import { promiseWrapper, request } from "@/infra/@adapters/axios/wrapper";
import { POSTS_ENDPOINT } from "@/infra/posts/endpoints";
import {
  PostsRequestPayload,
  PostsResponse,
} from "@/infra/posts/posts.requests";
import { CardSkeleton } from "@/screens/Home/components/CardPost/components/CardSkeleton";
import { ResponseType } from "@/shared/types/requests.types";
import { ReactNode, Suspense, useEffect, useState } from "react";

interface PostsPresenterProps extends PostsRequestPayload {
  children: (data: PostsResponse) => ReactNode;
}

function PostsPresenter(props: PostsPresenterProps) {
  const { children, ...payload } = props;
  const [data, setData] = useState<PostsResponse>([]);

  useEffect(() => {
    const promise = request<ResponseType<PostsResponse>>({
      endpoint: POSTS_ENDPOINT,
      method: "GET",
      params: payload,
    }).then((response) => response.data || []);

    setData(promiseWrapper(promise));
  }, [payload]);

  return children(data);
}

type PostsContainerProps = PostsPresenterProps;

export function PostsContainer(props: PostsContainerProps) {
  const { children } = props;

  return (
    <Suspense fallback={<CardSkeleton />}>
      <PostsPresenter>{(data) => children(data)}</PostsPresenter>
    </Suspense>
  );
}

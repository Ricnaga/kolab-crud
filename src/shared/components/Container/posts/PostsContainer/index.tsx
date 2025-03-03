import { promiseWrapper, request } from "@/infra/@adapters/axios/wrapper";
import { POSTS_ENDPOINT } from "@/infra/posts/endpoints";
import {
  PostsRequestPayload,
  PostsResponse,
} from "@/infra/posts/posts.requests";
import { CardSkeleton } from "@/screens/Home/components/CardPost/components/CardSkeleton";
import { ResponseType } from "@/shared/types/requests.types";
import { Grid, Text } from "@chakra-ui/react";
import { ReactNode, Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface PostsPresenterProps extends PostsRequestPayload {
  children: (data: PostsResponse) => ReactNode;
  userId?: string;
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
  }, []);

  return children(data);
}

type PostsContainerProps = PostsPresenterProps;

export function PostsContainer(props: PostsContainerProps) {
  const { children, userId } = props;

  return (
    <Suspense
      fallback={
        <Grid gap={2}>
          {Array.from({ length: 5 }).map(() => (
            <CardSkeleton key={Math.random().toString()} />
          ))}
        </Grid>
      }
    >
      <ErrorBoundary
        fallback={<Text>Não foi possível renderizar as postagens</Text>}
      >
        <PostsPresenter userId={userId}>
          {(data) => children(data)}
        </PostsPresenter>
      </ErrorBoundary>
    </Suspense>
  );
}

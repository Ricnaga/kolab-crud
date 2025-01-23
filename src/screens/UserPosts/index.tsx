import { useUserPosts } from "./use-user-posts.model";
import { UserPostsView } from "./UserPosts.view";

export default function UserPosts() {
  const methods = useUserPosts();

  return <UserPostsView {...methods} />;
}

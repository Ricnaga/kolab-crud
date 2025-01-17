import { ProfileView } from "./Profile.view";
import { useProfile } from "./use-profile.model";

export default function Profile() {
  const methods = useProfile();

  return <ProfileView {...methods} />;
}

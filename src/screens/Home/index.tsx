import { HomeView } from "./Home.view";
import { useHome } from "./use-home.model";

export default function Home() {
  return <HomeView {...useHome()} />;
}

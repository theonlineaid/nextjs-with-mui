import { Suspense } from "react";
import HeadNavigation from "../components/HeadNavigation";
import ColorSwitches from "../components/switch";
import Loading from "./loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HeadNavigation />
      <main>{/* <ColorSwitches /> */}</main>
    </Suspense>
  );
}

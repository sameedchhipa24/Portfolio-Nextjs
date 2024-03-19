// app/page.tsx

import MusicSchoolTestimonials from "../components/Homepage/CardMoving";
import { SpotlightPreview } from "../components/Homepage/Accernityui/SpotlightShade";
import { CardHoverEffectDemo } from "@/components/Homepage/Accernityui/ProjectCardEffect";
import Instructors from "@/components/Homepage/Tooltip";
import Experience from "@/components/Homepage/Experience";

export default function Page() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <SpotlightPreview />
      </div>
      <Experience />
      <MusicSchoolTestimonials />
      <CardHoverEffectDemo />
      <Instructors />
    </>
  );
}

"use client";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const genAIInfo = [
  {
    quote:
      "GenAI is revolutionizing the way we interact with technology, offering groundbreaking solutions for a smarter future. Its impact spans industries, empowering individuals and businesses alike to harness the power of AI for innovation and progress.",
    name: "John Doe",
    title: "Tech Enthusiast",
  },
  {
    quote:
      "GenAI has the potential to reshape entire industries with its innovative approaches and cutting-edge technology. By driving advancements in AI research and development, GenAI is paving the way for a future where AI transforms every aspect of our lives.",
    name: "Jane Smith",
    title: "AI Researcher",
  },
  {
    quote:
      "GenAI leads the charge in AI innovation, transforming tech landscapes and driving unprecedented advancements. With its cutting-edge solutions, GenAI is revolutionizing industries and reshaping the future of technology.",
    name: "Emily Jones",
    title: "Tech Analyst",
  },
  {
    quote:
      "GenAI's advancements are pushing the boundaries of possibility, revolutionizing how we perceive and utilize AI. By driving transformative change across sectors, GenAI is unlocking new opportunities and redefining what's possible with AI.",
    name: "David Brown",
    title: "Tech Entrepreneur",
  },
  {
    quote:
      "GenAI empowers businesses with cutting-edge AI solutions, driving efficiency and fostering innovation across sectors. Its advanced technologies enable businesses to stay ahead of the competition and unlock new opportunities for growth and success.",
    name: "Sarah Lee",
    title: "Business Strategist",
  },
  {
    quote:
      "GenAI's impact on society is profound and far-reaching, shaping a future where AI enriches lives and drives progress. By addressing some of the most pressing challenges facing humanity, GenAI is transforming lives and shaping a brighter future.",
    name: "Michael Johnson",
    title: "Social Scientist",
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="">
      <div className="h-[40rem] w-full  bg-grid-white/[0.1] flex flex-col items-center justify-center ">
        <h2 className="text-5xl font-bold text-center mb-12">
          LATEST UPDATES
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={genAIInfo}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonials;

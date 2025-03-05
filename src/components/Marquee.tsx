import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
const reviews = [
  {
    name: "Sarah Thompson",
    username: "@sarahT",
    body: "This tool has completely changed the way we handle automated testing. Highly recommend it!",
    img: "https://i.pravatar.cc/150?img=1", // Random avatar image
  },
  {
    name: "Mike Johnson",
    username: "@mikeJ",
    body: "I can't imagine going back to manual testing after using this. A real game-changer.",
    img: "https://i.pravatar.cc/150?img=2", // Random avatar image
  },
  {
    name: "Emily Davis",
    username: "@emilyD",
    body: "An indispensable tool for our QA process. Everything works smoothly now!",
    img: "https://i.pravatar.cc/150?img=3", // Random avatar image
  },
  {
    name: "David Smith",
    username: "@davidS",
    body: "Automation at its finest. Our team productivity has skyrocketed.",
    img: "https://i.pravatar.cc/150?img=4", // Random avatar image
  },
  {
    name: "Anna Martinez",
    username: "@annaM",
    body: "I love the ease of use and how much time this tool saves us every day.",
    img: "https://i.pravatar.cc/150?img=5", // Random avatar image
  },
  {
    name: "Chris Lee",
    username: "@chrisL",
    body: "Incredible experience. The best automation testing tool I've ever used.",
    img: "https://i.pravatar.cc/150?img=6", // Random avatar image
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-start mt-10 overflow-hidden gap-5 rounded-lg pt-10  bg-slate-100 ">
      <p className="uppercase text-primary">Testimonials</p>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

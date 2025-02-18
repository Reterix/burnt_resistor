import { StarIcon } from "@heroicons/react/16/solid";

interface iOpinia {
  name: string;
  stars: 1 | 2 | 3 | 4 | 5 | number;
  content: string;
}

const SingleOpinia = ({ name, content, stars }: iOpinia) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <div className="flex gap-1 mb-2">
        {[...Array(stars)].map((_, i) => (
          <StarIcon key={i} className="size-4 text-primary" />
        ))}
        {[...Array(5 - stars)].map((_, i) => (
          <StarIcon key={i} className="size-4 text-white/[38%]" />
        ))}
      </div>
      <p className="text-sm text-white/70">{content}</p>
      <p className="text-sm text-white/[38%]">~ {name}</p>
    </div>
  );
};

export default SingleOpinia;

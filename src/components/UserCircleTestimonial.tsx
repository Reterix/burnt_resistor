import { UserCircleIcon } from "@heroicons/react/16/solid";

interface iUCT {
  avatar?: string;
  name: string;
  position: string;
}

const UserCircleTestimonial = ({ avatar, name, position }: iUCT) => {
  return (
    <div className="flex flex-col items-center">
      {avatar ? (
        <img
          src={avatar}
          className="rounded-full h-32 w-32 mb-4 border-4 border-primary aspect-square hover:opacity-60 hover:cursor-not-allowed"
        />
      ) : (
        <UserCircleIcon className="size-32" />
      )}

      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-white/38">{position}</p>
    </div>
  );
};

export default UserCircleTestimonial;

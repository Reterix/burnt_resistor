interface iUser {
  name: string;
  position: string;
  avatar: string;
  description?: string;
}
const UserPanel = ({ name, position, avatar, description }: iUser) => {
  return (
    <a href="#oferta" className="group relative block bg-black min-w-64">
      <img
        alt=""
        src={avatar}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />
      <div className="relative p-4 sm:p-6 lg:p-8 transition duration-300 delay-10">
        <p className="text-sm font-medium tracking-widest text-primary uppercase">{position}</p>

        <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default UserPanel;

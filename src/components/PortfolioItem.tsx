interface iPortfolio {
  photo: string;
  name: string;
  desc: string;
  date: string;
  cathegory: string;
}

const PortfolioItem = ({ name, desc, date, photo, cathegory }: iPortfolio) => {
  return (
    <div className="flex flex-col gap-1 p-4">
      <div className="group relative block bg-black w-full h-64 rounded-lg mt-4">
        <img
          src={photo}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold mt-1 text-primary">{name}</h3>
        <p className="text-sm text-white/[38%] mt-1">{date}</p>
      </div>
      <p className="text-base text-white/60 text-justify">{desc}</p>
    </div>
  );
};

export default PortfolioItem;

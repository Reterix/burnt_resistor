interface iListItem {
  children?: string | React.ReactNode;
}

const UslugaListItem = ({ children }: iListItem) => {
  return (
    <div className="inline-flex gap-2 p-4 rounded-lg hover:bg-level-2 items-center justify-start transition duration-300 delay-10 cursor-pointer">
      {children}
    </div>
  );
};

export default UslugaListItem;

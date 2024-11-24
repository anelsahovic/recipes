interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="bg-amber-50 min-h-screen max-w-[1060px] flex flex-col mx-auto border-amber-300 border">
      {children}
    </div>
  );
};

export default Container;

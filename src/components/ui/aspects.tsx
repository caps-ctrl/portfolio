const aspects = ({ name }: { name: string }) => {
  return (
    <div className="text-white bg-neutral-900 rounded-2xl flex justify-center items-center p-4 h-8 text-center shadow-[0_2px_20px_rgba(255,255,255,0.7)] ">
      {name}
    </div>
  );
};

export default aspects;

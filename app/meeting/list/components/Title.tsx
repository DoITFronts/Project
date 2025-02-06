const Title = ({ name, location }: { name: string; location: string }) => {
  return (
    <div className="flex flex-row gap-2 items-center text-lg font-semibold">
      <div>{name}</div>
      <div>|</div>
      <div className="font-medium text-gray-700 text-sm">{location}</div>
    </div>
  );
};

export default Title;

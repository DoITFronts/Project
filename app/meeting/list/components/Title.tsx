function Title({ name, location }: { name: string; location: string }) {
  return (
    <div className="flex flex-row items-center gap-2 text-lg font-semibold">
      <div>{name}</div>
      <div>|</div>
      <div className="text-sm font-medium text-gray-700">{location}</div>
    </div>
  );
}

export default Title;

export default function InvisibleAvatar({ length }: { length: number }) {
  return (
    <div className="inline-flex size-[29px] items-center justify-center -space-x-3 rounded-full bg-gray-100 text-sm font-semibold">
      +{length}
    </div>
  );
}

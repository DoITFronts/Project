import HeartIcon from '@/components/shared/Icons/HeartIcon';

function Like({ isLiked, onClick }: { isLiked: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      className="absolute left-[14px] top-[14px] flex justify-center"
      onClick={onClick}
    >
      <HeartIcon variant={isLiked ? 'active' : 'inactive'} />
    </button>
  );
}

export default Like;

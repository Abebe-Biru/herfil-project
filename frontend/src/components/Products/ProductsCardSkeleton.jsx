
const CardSkeleton = () => {
  return (
    <div className="bg-gray-300 rounded shadow-md animate-pulse">
      <div className="h-48 bg-gray-400 rounded-md mb-4"></div> {/* Image placeholder */}
      <div className="h-10 bg-gray-400 rounded mb-2"></div> {/* Title placeholder */}
      <div className="h-44 bg-gray-400 rounded"></div> {/* Description placeholder */}
    </div>
  );
};

export default CardSkeleton;

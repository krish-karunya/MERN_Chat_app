const MessageSkeleton = () => {
  return (
    <>
      <div className='flex gap-3 items-center mt-10'>
        <div className='skeleton w-10 h-10 rounded-full shrink-0 bg-gray-800'></div>
        <div className='flex flex-col gap-1'>
          <div className='skeleton h-4 w-40 bg-gray-800'></div>
          <div className='skeleton h-4 w-40 bg-gray-800'></div>
        </div>
      </div>
      <div className='flex gap-3 items-center justify-end'>
        <div className='flex flex-col gap-1'>
          <div className='skeleton h-4 w-40 bg-gray-800'></div>
        </div>
        <div className='skeleton w-10 h-10 rounded-full shrink-0 bg-gray-800'></div>
      </div>
    </>
  );
};
export default MessageSkeleton;

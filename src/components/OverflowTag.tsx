const OverflowTag = ({ tag }: { tag: string }) => {
  return (
    <div className="flex justify-center items-center px-4 py-1 bg-[#E6E6E6] nazanin-bold text-sm rounded-xl">
        <h5>{ tag }</h5>
    </div>
  );
}

export default OverflowTag;
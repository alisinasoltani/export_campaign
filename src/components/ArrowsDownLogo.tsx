const ArrowsDownLogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }} width={50} height={50} viewBox="0 0 24 24">
      <g fill="none" stroke="#fff" strokeDasharray={12} strokeDashoffset={12} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
        <path d="M12 22l-7 -7M12 22l7 -7">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></animate>
        </path>
        <path d="M12 16l-7 -7M12 16l7 -7">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="12;0"></animate>
        </path>
        <path d="M12 10l-7 -7M12 10l7 -7">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" values="12;0"></animate>
        </path>
      </g>
    </svg>
  );
}

export default ArrowsDownLogo;
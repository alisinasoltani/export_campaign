const SearchLogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
        <path fill="#fff" fillOpacity={0} strokeDasharray={40} strokeDashoffset={40} 
        d="M10.76 13.24c-2.34 -2.34 -2.34 -6.14 0 -8.49c2.34 -2.34 6.14 -2.34 8.49 0c2.34 2.34 2.34 6.14 0 8.49c-2.34 2.34 -6.14 2.34 -8.49 0Z">
            <animate fill="freeze" attributeName="fill-opacity" begin="1.7s" dur="0.5s" values="0;1"></animate>
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.5s" values="40;0"></animate>
        </path>
        <path strokeDasharray={12} strokeDashoffset={12} d="M10.5 13.5l-7.5 7.5">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" values="12;0"></animate>
        </path>
      </g>
    </svg>
  );
};

export default SearchLogo;

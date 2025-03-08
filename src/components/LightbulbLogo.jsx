const LightbulbLogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="rotate-[40deg]">
        <rect width={6} height={0} x={9} y={20} fill="#fff">
            <animate fill="freeze" attributeName="height" begin="1.6s" dur="0.2s" values="0;2"></animate>
        </rect>
        <path fill="#fff" fillOpacity={0} stroke="#fff"
        strokeDasharray={48} strokeDashoffset={48}
        strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 17h-3v-2.8c-1.79 -1.04 -3 -2.98 -3 -5.2c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 2.22 -1.21 4.16 -3 5.2v2.8Z">
            <animate fill="freeze" attributeName="fill-opacity" begin="1.8s" dur="0.5s" values="0;1"></animate>
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.6s" values="48;0"></animate>
        </path>
    </svg>
  );
};

export default LightbulbLogo;

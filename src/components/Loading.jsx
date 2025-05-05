import Image from 'next/image';

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-4'>
            <div>
                <video width={150} height={70} autoPlay={true} muted={true} loop={true} playsInline={true} preload="auto" alt={"Sharpen YOur Axe!"}>
                    <source src={"/videos/sharp.mp4"} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='irsansx text-xl animate-blink'>
                <h5>Sharpen Your Axe...</h5>
            </div>
        </div>
    </div>
  )
}

export default Loading
import BarbellImg from './barbell-img.png';

export const Title: () => JSX.Element = () => (
  <div className='flex flex-col items-center'>
    <h1 className='z-10 p-2 -mb-6 font-mono text-xl font-bold uppercase bg-white rounded-full border border-black'>Barbell builder</h1>
    <img className='w-48' src={BarbellImg} alt="barbell" />
  </div>
)

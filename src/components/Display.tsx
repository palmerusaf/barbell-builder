import { getLayout } from "../WeightCalc";

interface Display {
  targetWeight: number
}

export const Display: (props: Display) => JSX.Element = ({ targetWeight }) => {
  // const layout = [45, 35, 25, 10, 5, 2.5]

  const layout = getLayout(targetWeight)
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {PlateStack(layout, targetWeight)}
        <div className="absolute bottom-0 left-1/2 z-0 w-4 h-80 bg-gray-500 -translate-x-2 grow"></div>
      </div>
      <div className="z-10 w-12 font-serif font-bold text-center text-white bg-gray-500">45</div>
    </div>
  );
}

function PlateStack(layout: number[], targetWeight: number): JSX.Element {
  return <div className='flex flex-col-reverse gap-1 items-center font-serif font-bold'>{layout.map((item, index) => makePlate(item, index + targetWeight))}</div>;
}

function makePlate(weight: number, iKey: number) {
  const plateStyle = getPlateStyles(weight)
  return (
    <div key={iKey} className={`flex z-10 justify-between px-2 animate-in slide-in-from-top fade-in-0 duration-500 rounded-full ${plateStyle}`}>
      <div>
        {weight}
      </div>
      <div>
        {weight}
      </div>
    </div >
  )

}

function getPlateStyles(weight: number) {
  let className = ''
  switch (weight) {

    case 45:
      className = 'w-40 bg-red-500'
      break;

    case 35:
      className = 'w-36 bg-orange-500'
      break;

    case 25:
      className = 'w-32 bg-yellow-500'
      break;

    case 10:
      className = 'w-28 bg-green-500'
      break;

    case 5:
      className = 'w-24 bg-blue-500'
      break;

    case 2.5:
      className = 'w-20 bg-violet-500'
      break;

    default:
      break;
  }
  return className
}

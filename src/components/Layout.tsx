
interface LayoutProps {
  title: JSX.Element
  controls: JSX.Element
  display: JSX.Element
}

export const Layout = ({ title, controls, display }: LayoutProps) => (
  <div className='flex flex-col w-screen h-screen'>
    <div className='h-1/6'>{title}</div>
    <div className='h-1/3'>{controls}</div>
    <div className='grow'>{display}</div>
  </div>
);

export const Display: () => JSX.Element = () => (
  <div className='flex items-center w-full h-full text-center bg-red-500'>DISPLAY AREA</div>
)

export const Controls: () => JSX.Element = () => (
  <div className='flex items-center w-full h-full text-center bg-green-500'>CONTROLS AREA</div>
)

export const Title: () => JSX.Element = () => (
  <div className='flex items-center w-full h-full text-center bg-blue-500'>TITLE AREA</div>
)

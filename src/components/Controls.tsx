
interface ControlsProps {
  targetWeight: number
  handleChange: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

export const Controls: (props: ControlsProps) => JSX.Element = ({ targetWeight, handleChange }) => {
  const weightRange = makeWeightRangeArray()
  return (
    <div className='flex gap-2 items-center text-lg font-bold'>
      <label htmlFor="sel">Target Weight</label>
      <select name="sel" className="p-2 px-4 rounded-full" value={targetWeight} onChange={handleChange}>
        {weightRange.map(i => makeOption(i))}
      </select>
    </div>
  );
}

function makeWeightRangeArray() {
  const barWeight = 45
  const maxWeight = 900
  const result: number[] = []

  for (let weight = barWeight; weight <= maxWeight; weight += 5) {
    result.push(weight)
  }

  return result
}

function makeOption(weight: number) {
  return (
    <option key={weight} value={weight}>{weight} lbs</option>
  )
}

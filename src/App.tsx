import { useState } from "react"
import { Controls } from "./components/Controls"
import { Display } from "./components/Display"
import { Layout } from "./components/Layout"
import { Title } from "./components/Title"
import { parseInt } from "lodash"

function App() {
  const [targetWeight, setTargetWeight] = useState<number>(45)

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setTargetWeight(parseInt(e.target.value))
  }

  return (
    <div className="bg-slate-400">
      <Layout title={<Title />}
        controls={
          <Controls
            targetWeight={targetWeight}
            handleChange={handleChange}
          />}
        display={<Display targetWeight={targetWeight} />} />
    </div>
  )
}

export default App

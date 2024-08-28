import './App.css'
import Dictator from './components/wrappers/Dictator'
import { Toaster } from "@/components/ui/toaster"
import regeneratorRuntime from "regenerator-runtime";
function App() {

  return (
    <div className="flex items-center justify-center min-h-[90vh]">
  <div className="w-1/2">
    <Toaster />
    <Dictator />
  </div>
</div>

  
  )
}

export default App

import { Toaster } from "sonner"
import { ProfileForm } from "./components/Form"
// import { toast } from "sonner"
// import { Button } from "@/components/ui/button"

function App() {

  return (
    <>
      <main className="w-screen h-screen bg-background flex flex-col justify-center items-center">
        <Toaster />
        <div className="w-screen md:w-2/5 h-1/2 md:h-2/3 flex flex-col justify-center items-center border-2 rounded-2xl">
          <p className="w-full mb-10 text-center text-2xl md:text-3xl font-bold">Welcome to CollabCraft</p>
          <ProfileForm />
        </div>
      </main>
    </>
  )
}

export default App

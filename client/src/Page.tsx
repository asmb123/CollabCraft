import { Input } from "./components/ui/input"

function Page() {
    return(
        <main className="w-screen h-screen grid md:grid-cols-5">
            <div className="md:col-span-1 md:col-start-1 border-2">hi</div>
            <div className="md:col-span-4 md:col-start-2 border-2">
                <Input/>
            </div>
        </main>
    )
}

export default Page
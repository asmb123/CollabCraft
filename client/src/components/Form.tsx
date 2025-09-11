import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { v4 as uuid4 } from "uuid"
import { toast } from "sonner"
import { useNavigate } from "react-router"


const formSchema = z.object({
    room_id: z.string().min(2).max(50),
    username: z.string().min(2).max(50),
})

export function ProfileForm() {

    const router = useNavigate();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        // defaultValues: {
        //     username: "",
        //     room_id: ""
        // },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        router(`/page/${values.room_id}`)
    }

    function onGenerate() {
        console.log("Generating")
        form.setValue("room_id", uuid4())
        toast("Generated room id")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="room_id"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Room id</FormLabel>
                            <FormControl>
                                <Input placeholder="465212437" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter room id
                            </FormDescription>
                            <button type="button" onClick={() => onGenerate()} className="underline hover:cursor-pointer">Generate new room id</button>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}


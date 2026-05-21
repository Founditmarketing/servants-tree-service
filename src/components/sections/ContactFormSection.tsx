import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Trees, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    service: z.string().min(1, "Please select a service"),
    address: z.string().min(5, "Please enter a valid address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    honeypot: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm({ className }: { className?: string }) {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setStatus("loading");
        setErrorMessage("");
        try {
            if (data.honeypot) {
                // Detected spam bot submission; do not proceed.
                setStatus('idle');
                return;
            }
            const payload = {
                fullName: data.name,
                email: data.email,
                phone: data.phone,
                service: data.service,
                address: data.address,
                message: data.message,
            };
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStatus("success");
                reset();
            } else {
                const errorData = await response.json();
                const msg = typeof errorData.error === 'object' ? JSON.stringify(errorData.error) : errorData.error;
                setErrorMessage(msg || "Something went wrong.");
                setStatus("error");
            }
        } catch (error) {
            setErrorMessage("Network error. Please try again later.");
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <Card className={cn("border-none shadow-xl bg-background p-8", className)}>
                <CardContent className="flex flex-col items-center justify-center py-10 text-center gap-6">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-primary">Message Sent!</h3>
                    <p className="text-muted-foreground text-lg max-w-sm">
                        Thank you for reaching out. A specialist from our team will contact you shortly to discuss your project.
                    </p>
                    <Button onClick={() => setStatus("idle")} variant="outline" className="rounded-full px-8">
                        Send Another Message
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className={cn("border-none shadow-xl bg-background p-0 overflow-hidden rounded-3xl", className)}>
            <CardContent className="p-0">
                <div className="bg-primary p-8 text-primary-foreground">
                    <div className="flex items-center gap-2 mb-4">
                        <Trees className="w-6 h-6" />
                        <span className="uppercase tracking-widest text-xs font-semibold">Get A Free Quote</span>
                    </div>
                    <h3 className="font-serif text-3xl font-bold">Send A Message</h3>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-4 sm:p-8 space-y-6">
                    <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                            <Input
                                placeholder="Jane Doe"
                                className={cn("bg-muted/50 border-transparent focus:border-primary transition-all rounded-xl", errors.name && "border-red-500")}
                                {...register("name")}
                            />
                            {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                            <Input
                                placeholder="jane@example.com"
                                className={cn("bg-muted/50 border-transparent focus:border-primary transition-all rounded-xl", errors.email && "border-red-500")}
                                {...register("email")}
                            />
                            {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Phone Number</label>
                            <Input
                                placeholder="(318) 000-0000"
                                className={cn("bg-muted/50 border-transparent focus:border-primary transition-all rounded-xl", errors.phone && "border-red-500")}
                                {...register("phone")}
                            />
                            {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Service Needed</label>
                            <select
                                title="Service"
                                className={cn(
                                    "w-full h-10 px-3 bg-muted/50 border-transparent border focus:border-primary focus:outline-none transition-all rounded-xl text-sm",
                                    errors.service && "border-red-500"
                                )}
                                {...register("service")}
                            >
                                <option value="">Select Service</option>
                                <option value="removal">Tree Removal</option>
                                <option value="trimming">Trimming</option>
                                <option value="debris hauling">Debris Hauling</option>
                                <option value="land clearing">Land Clearing</option>
                                <option value="tree inspection">Tree Inspection</option>
                                <option value="pruning">Pruning</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.service && <p className="text-xs text-red-500 font-medium">{errors.service.message}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Address</label>
                        <Input
                            placeholder="515 Fisherman Wharf RD, Converse, LA 71419"
                            className={cn("bg-muted/50 border-transparent focus:border-primary transition-all rounded-xl", errors.address && "border-red-500")}
                            {...register("address")}
                        />
                        {errors.address && <p className="text-xs text-red-500 font-medium">{errors.address.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Tell us about your project</label>
                        <Textarea
                            placeholder="Please describe the work you need done..."
                            className={cn("bg-muted/50 border-transparent focus:border-primary transition-all rounded-xl min-h-[120px]", errors.message && "border-red-500")}
                            {...register("message")}
                        />
                        {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>}
                    </div>

                    {status === "error" && (
                        <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-xl">
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            <p className="text-sm font-medium text-balance">{errorMessage || "Something went wrong. Please try again or call us directly."}</p>
                        </div>
                    )}

                    <Button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full rounded-xl py-6 group"
                    >
                        {status === "loading" ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                Submit Quote Request
                                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

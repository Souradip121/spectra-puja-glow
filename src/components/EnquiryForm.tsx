import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const formSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(10, "Phone number is required"),
    interestedTour: z.string().min(1, "Please select a tour"),
    travelPackage: z.string().optional(),
    travelDate: z.date(),
    message: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.interestedTour === "tour-packages" && !data.travelPackage) {
        return false;
      }
      return true;
    },
    {
      message: "Please select a travel package",
      path: ["travelPackage"],
    }
  );

type FormData = z.infer<typeof formSchema>;

const EnquiryForm = () => {
  const [date, setDate] = useState<Date>();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const watchedTour = watch("interestedTour");

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  // Date restrictions: Only allow September 18-23, 2025
  const isDateDisabled = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-based
    const day = date.getDate();

    if (year !== 2025 || month !== 8) return true; // September is month 8 (0-based)
    return day < 18 || day > 23;
  };

  return (
    <section id="enquiry" className="py-20 bg-durga-cream/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-background border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground">
                Book Your Durga Puja Experience
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll create your perfect cultural
                journey
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interestedTour">Interested Tour *</Label>
                  <Select
                    onValueChange={(value) => setValue("interestedTour", value)}
                  >
                    <SelectTrigger
                      className={
                        errors.interestedTour ? "border-destructive" : ""
                      }
                    >
                      <SelectValue placeholder="Select a tour" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tour-packages">
                        Tour Packages
                      </SelectItem>
                      <SelectItem value="cruising-through-puja">
                        Cruising Through Puja
                      </SelectItem>
                      <SelectItem value="durga-preview-express">
                        Durga Preview Express
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.interestedTour && (
                    <p className="text-sm text-destructive">
                      {errors.interestedTour.message}
                    </p>
                  )}
                </div>

                {watchedTour === "tour-packages" && (
                  <div className="space-y-2">
                    <Label htmlFor="travelPackage">Travel Package *</Label>
                    <Select
                      onValueChange={(value) =>
                        setValue("travelPackage", value)
                      }
                    >
                      <SelectTrigger
                        className={
                          errors.travelPackage ? "border-destructive" : ""
                        }
                      >
                        <SelectValue placeholder="Select travel package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3n-4d">3 Nights & 4 Days</SelectItem>
                        <SelectItem value="2n-3d">2 Nights & 3 Days</SelectItem>
                        <SelectItem value="1n-2d">1 Night & 2 Days</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.travelPackage && (
                      <p className="text-sm text-destructive">
                        {errors.travelPackage.message}
                      </p>
                    )}
                  </div>
                )}

                <div className="space-y-2">
                  <Label>Preferred Travel Date * (18-23 September 2025)</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground",
                          errors.travelDate && "border-destructive"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={(selectedDate) => {
                          setDate(selectedDate);
                          if (selectedDate) {
                            setValue("travelDate", selectedDate);
                          }
                        }}
                        disabled={isDateDisabled}
                        defaultMonth={new Date(2025, 8)} // September 2025 (month is 0-based)
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.travelDate && (
                    <p className="text-sm text-destructive">
                      {errors.travelDate.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Any special requirements or questions..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Submit Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;

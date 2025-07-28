import { useState, useEffect } from "react";
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
import { DateRange } from "react-day-picker";

const formSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(10, "Phone number is required"),
    interestedTour: z.string().min(1, "Please select a tour"),
    travelPackage: z.string().optional(),
    travelDate: z.object({
      from: z.date(),
      to: z.date().optional(),
    }),
    numberOfPeople: z
      .number({ invalid_type_error: "Number of people is required" })
      .min(1, "Minimum 1 person required")
      .max(50, "Maximum 50 people allowed"),
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
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numberOfPeople: 1,
    },
  });

  const watchedTour = watch("interestedTour");
  const watchedPackage = watch("travelPackage");

  // Add/remove blur effect on body when modal is shown
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-blur");
    } else {
      document.body.classList.remove("modal-blur");
    }
    return () => {
      document.body.classList.remove("modal-blur");
    };
  }, [showModal]);

  const onSubmit = async (data: FormData) => {
    try {
      // Use the absolute URL of your backend server
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
      const response = await fetch(`${apiUrl}/api/submit-enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setShowModal(true);
        // Reset form after a short delay
        setTimeout(() => {
          setDateRange(undefined);
          setValue("name", "");
          setValue("email", "");
          setValue("phone", "");
          setValue("interestedTour", "");
          setValue("travelPackage", "");
          setValue("numberOfPeople", 1);
          setValue("message", "");
        }, 2000);
      } else {
        console.error("API response error:", result);
        throw new Error(result.message || "Failed to submit enquiry");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      toast({
        title: "Submission Failed",
        description:
          "Please try again or contact us directly at mail@spectrainfo.in",
        variant: "destructive",
      });
    }
  };

  // Get the number of days based on selected package
  const getPackageDays = (packageType: string) => {
    switch (packageType) {
      case "3n-4d":
        return 4;
      case "2n-3d":
        return 3;
      case "1n-2d":
        return 2;
      default:
        return 1;
    }
  };

  // Date restrictions: Only allow September 18-23, 2025
  const isDateDisabled = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-based
    const day = date.getDate();

    if (year !== 2025 || month !== 8) return true; // September is month 8 (0-based)

    // For tour packages, check if there are enough days remaining
    if (watchedTour === "tour-packages" && watchedPackage) {
      const requiredDays = getPackageDays(watchedPackage);
      const maxAllowedStartDate = 23 - requiredDays + 1;

      if (day < 18 || day > maxAllowedStartDate) return true;
    }
    // For Cruising Into Puja, only allow September 21
    else if (watchedTour === "cruising-through-puja") {
      if (day !== 21) return true;
    }
    // For Durga Preview Express, allow September 19-22
    else if (watchedTour === "durga-preview-express") {
      if (day < 19 || day > 22) return true;
    }
    // For other tours, allow September 18-23
    else {
      if (day < 18 || day > 23) return true;
    }

    return false;
  };

  const handleDateSelect = (selectedDate: Date | DateRange | undefined) => {
    // Handle both single Date and DateRange types
    let fromDate: Date | undefined;

    if (selectedDate instanceof Date) {
      fromDate = selectedDate;
    } else if (selectedDate && "from" in selectedDate && selectedDate.from) {
      fromDate = selectedDate.from;
    }

    if (!fromDate) return;

    let range: DateRange;

    // For tour packages, automatically set the end date based on package duration
    if (watchedTour === "tour-packages" && watchedPackage) {
      const days = getPackageDays(watchedPackage);
      const endDate = new Date(fromDate);
      endDate.setDate(endDate.getDate() + days - 1);

      range = {
        from: fromDate,
        to: endDate,
      };
    }
    // For Cruising Into Puja, auto-set to September 21, 2025
    else if (watchedTour === "cruising-through-puja") {
      const fixedDate = new Date(2025, 8, 21); // September 21, 2025
      range = {
        from: fixedDate,
        to: undefined,
      };
    }
    // For other single date selections (like Durga Preview Express)
    else {
      range = {
        from: fromDate,
        to: undefined,
      };
    }

    setDateRange(range);
    setValue("travelDate", range);

    // Auto-close the calendar after selection
    setIsCalendarOpen(false);
  };

  const formatDateRange = (range: DateRange | undefined) => {
    if (!range?.from) return "Pick a date";

    if (range.to) {
      return `${format(range.from, "MMM dd")} - ${format(
        range.to,
        "MMM dd, yyyy"
      )}`;
    }

    return format(range.from, "PPP");
  };

  return (
    <>
      {/* Modal for submission success */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          style={{ backdropFilter: "blur(4px)" }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2 text-green-700">
              Enquiry Submitted!
            </h2>
            <p className="mb-6">
              Your enquiry has been successfully submitted.
            </p>
            <Button
              onClick={() => setShowModal(false)}
              className="w-full"
              style={{ backgroundColor: "#fdd835", color: "#222" }}
            >
              Close
            </Button>
          </div>
        </div>
      )}
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
                      onValueChange={(value) => {
                        setValue("interestedTour", value);
                        // Auto-set date for Cruising Into Puja
                        if (value === "cruising-through-puja") {
                          const fixedDate = new Date(2025, 8, 21); // September 21, 2025
                          const range = { from: fixedDate, to: undefined };
                          setDateRange(range);
                          setValue("travelDate", range);
                        } else {
                          // Reset date for other tours
                          setDateRange(undefined);
                        }
                      }}
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
                          Travel Packages
                        </SelectItem>
                        <SelectItem value="cruising-through-puja">
                          Cruising Into Puja
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
                        onValueChange={(value) => {
                          setValue("travelPackage", value);
                          // Reset date range when package changes
                          setDateRange(undefined);
                          setValue("travelDate", {
                            from: new Date(),
                            to: undefined,
                          });
                        }}
                      >
                        <SelectTrigger
                          className={
                            errors.travelPackage ? "border-destructive" : ""
                          }
                        >
                          <SelectValue placeholder="Select travel package" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3n-4d">
                            3 Nights & 4 Days
                          </SelectItem>
                          <SelectItem value="2n-3d">
                            2 Nights & 3 Days
                          </SelectItem>
                          <SelectItem value="1n-2d">
                            1 Night & 2 Days
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.travelPackage && (
                        <p className="text-sm text-destructive">
                          {errors.travelPackage.message}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Only show date selection for tours that need it */}
                  {watchedTour && watchedTour !== "other" && (
                    <div className="space-y-2">
                      <Label>Preferred Travel Date *</Label>
                      <Popover
                        open={
                          watchedTour === "cruising-through-puja"
                            ? false
                            : isCalendarOpen
                        }
                        onOpenChange={(open) => {
                          if (watchedTour === "cruising-through-puja") return; // Don't allow opening for cruising tour
                          setIsCalendarOpen(open);
                          // Only reset date selection for tour packages when calendar opens
                          if (open && watchedTour === "tour-packages") {
                            setDateRange(undefined);
                          }
                        }}
                      >
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            disabled={watchedTour === "cruising-through-puja"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !dateRange?.from && "text-muted-foreground",
                              errors.travelDate && "border-destructive",
                              watchedTour === "cruising-through-puja" &&
                                "cursor-not-allowed opacity-75"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formatDateRange(dateRange)}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <CalendarComponent
                            mode={
                              watchedTour === "tour-packages"
                                ? "range"
                                : "single"
                            }
                            selected={
                              watchedTour === "tour-packages"
                                ? dateRange
                                : dateRange?.from
                            }
                            onSelect={handleDateSelect}
                            disabled={isDateDisabled}
                            defaultMonth={new Date(2025, 8)} // September 2025 (month is 0-based)
                            initialFocus
                            className="p-3 pointer-events-auto"
                            numberOfMonths={1}
                          />
                        </PopoverContent>
                      </Popover>
                      {errors.travelDate && (
                        <p className="text-sm text-destructive">
                          Travel date is required
                        </p>
                      )}
                      {watchedTour === "tour-packages" && watchedPackage && (
                        <p className="text-xs text-muted-foreground">
                          Select start date for your{" "}
                          {getPackageDays(watchedPackage)}-day package
                        </p>
                      )}
                      {watchedTour === "cruising-through-puja" && (
                        <p className="text-xs text-muted-foreground">
                          Date is fixed for September 21, 2025
                        </p>
                      )}
                      {watchedTour === "durga-preview-express" && (
                        <p className="text-xs text-muted-foreground">
                          Select any date between 19th and 22nd September 2025
                        </p>
                      )}
                    </div>
                  )}

                  {/* Number of People field */}
                  <div className="space-y-2">
                    <Label htmlFor="numberOfPeople">Number of People *</Label>
                    <Input
                      id="numberOfPeople"
                      type="number"
                      min={1}
                      max={50}
                      {...register("numberOfPeople", { valueAsNumber: true })}
                      className={
                        errors.numberOfPeople ? "border-destructive" : ""
                      }
                    />
                    {errors.numberOfPeople && (
                      <p className="text-sm text-destructive">
                        {errors.numberOfPeople.message}
                      </p>
                    )}
                  </div>

                  {/* Additional Message field */}
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
                    className="w-full text-white"
                    style={{ backgroundColor: "#fdd835" }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#f9c11d")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#fdd835")
                    }
                  >
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

// Add blur effect CSS globally (add this to your global CSS file)
/*
.modal-blur > #root {
  filter: blur(4px);
}
*/

export default EnquiryForm;

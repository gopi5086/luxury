import { useState } from "react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { CalendarIcon, MapPin, Users, Minus, Plus, Crown } from "lucide-react";
import BookingModal, { BookingData } from "./BookingModal";
import { cn } from "@/lib/utils";

export default function BookingBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: new Date(new Date().setDate(new Date().getDate() + 1)),
    });

    const [location, setLocation] = useState("DrizzleDrop Inn, Chennai");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);

    const totalGuests = adults + children;

    const handleBookNow = () => {
        setIsModalOpen(true);
    };

    const bookingData: BookingData = {
        location,
        checkIn: date?.from,
        checkOut: date?.to,
        adults,
        children,
        rooms,
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 z-40 relative">
            {/* Search Bar Container */}
            <div className="bg-background/95 backdrop-blur-sm flex flex-col lg:flex-row shadow-2xl border border-border/50 items-center overflow-hidden rounded-xl">

                {/* Location Section */}
                <div className="flex-1 w-full lg:w-auto p-2 border-b lg:border-b-0 lg:border-r border-border/50 transition-colors focus-within:bg-secondary/20">
                    <Select value={location} onValueChange={setLocation}>
                        <SelectTrigger className="w-full h-full border-none shadow-none focus:ring-0 bg-transparent flex items-center gap-3 py-4">
                            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                            <div className="flex flex-col items-start">
                                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Location</span>
                                <SelectValue placeholder="Select Location" />
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="DrizzleDrop Inn, Chennai">DrizzleDrop Inn, Chennai</SelectItem>
                            <SelectItem value="DrizzleDrop Inn, Ooty">DrizzleDrop Inn, Ooty</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Date Selection Section */}
                <div className="flex-[1.5] w-full lg:w-auto border-b lg:border-b-0 lg:border-r border-border/50 hover:bg-secondary/20 transition-colors">
                    <Popover>
                        <PopoverTrigger asChild>
                            <button
                                className={cn(
                                    "w-full h-full p-4 flex items-center justify-start text-left font-medium text-sm gap-3",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="w-5 h-5 text-primary flex-shrink-0" />
                                <div className="flex flex-col items-start overflow-hidden">
                                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Check In - Out</span>
                                    <span className="truncate">
                                        {date?.from ? (
                                            date.to ? (
                                                <>
                                                    {format(date.from, "dd MMM")} - {format(date.to, "dd MMM yyyy")}
                                                </>
                                            ) : (
                                                format(date.from, "dd MMM yyyy")
                                            )
                                        ) : (
                                            <span>Select Dates</span>
                                        )}
                                    </span>
                                </div>
                            </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={setDate}
                                numberOfMonths={2}
                                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                {/* Guests & Rooms Section */}
                <div className="flex-1 w-full lg:w-auto border-b lg:border-b-0 lg:border-r border-border/50 hover:bg-secondary/20 transition-colors">
                    <Popover>
                        <PopoverTrigger asChild>
                            <button className="w-full h-full p-4 flex items-center gap-3 text-left font-medium text-sm">
                                <Users className="w-5 h-5 text-primary flex-shrink-0" />
                                <div className="flex flex-col items-start overflow-hidden">
                                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Guests & Rooms</span>
                                    <span className="truncate">
                                        {totalGuests} Guest{totalGuests !== 1 && "s"}, {rooms} Room{rooms !== 1 && "s"}
                                    </span>
                                </div>
                            </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 p-4" align="start">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium">Adults</p>
                                        <p className="text-xs text-muted-foreground">Ages 13 or above</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setAdults(Math.max(1, adults - 1))}
                                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary disabled:opacity-50"
                                            disabled={adults <= 1}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-4 text-center text-sm">{adults}</span>
                                        <button
                                            onClick={() => setAdults(adults + 1)}
                                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium">Children</p>
                                        <p className="text-xs text-muted-foreground">Ages 0-12</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setChildren(Math.max(0, children - 1))}
                                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary disabled:opacity-50"
                                            disabled={children <= 0}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-4 text-center text-sm">{children}</span>
                                        <button
                                            onClick={() => setChildren(children + 1)}
                                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-border">
                                    <div>
                                        <p className="text-sm font-medium">Rooms</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setRooms(Math.max(1, rooms - 1))}
                                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary disabled:opacity-50"
                                            disabled={rooms <= 1}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-4 text-center text-sm">{rooms}</span>
                                        <button
                                            onClick={() => setRooms(rooms + 1)}
                                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>

                {/* Special Code Section */}
                <div className="flex-1 w-full lg:w-auto hover:bg-secondary/20 transition-colors">
                    <Select>
                        <SelectTrigger className="w-full h-full p-4 border-none shadow-none focus:ring-0 rounded-none bg-transparent flex items-center gap-3">
                            <Crown className="w-5 h-5 text-primary flex-shrink-0" />
                            <div className="flex flex-col items-start overflow-hidden">
                                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Offer Code</span>
                                <SelectValue placeholder="None" />
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="none">No Special Code</SelectItem>
                            <SelectItem value="corporate">Corporate Code</SelectItem>
                            <SelectItem value="promo">Promo Code</SelectItem>
                            <SelectItem value="group">Group Code</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Book Now Button */}
                <button
                    onClick={handleBookNow}
                    className="w-full lg:w-auto h-full px-10 py-5 bg-primary hover:bg-primary/90 text-white font-bold tracking-wide text-sm whitespace-nowrap transition-all duration-300 hover:shadow-lg focus:outline-none"
                >
                    BOOK NOW
                </button>

            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                bookingData={bookingData}
            />
        </div>
    );
}

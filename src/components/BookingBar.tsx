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
        <div className="w-full max-w-6xl mx-auto px-4 z-40 relative mt-8">
            {/* Search Bar Container */}
            <div className="bg-background flex flex-col lg:flex-row shadow-xl border border-border/50 items-center overflow-hidden">

                {/* Location Section */}
                <div className="flex-1 w-full lg:w-auto p-4 flex items-center gap-3 border-b lg:border-b-0 lg:border-r border-border/50 transition-colors focus-within:bg-secondary/20">
                    <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-transparent border-none outline-none text-foreground font-medium text-sm placeholder:text-muted-foreground"
                        placeholder="Search Location"
                    />
                </div>

                {/* Date Selection Section */}
                <div className="flex-[1.5] w-full lg:w-auto border-b lg:border-b-0 lg:border-r border-border/50 hover:bg-secondary/20 transition-colors">
                    <Popover>
                        <PopoverTrigger asChild>
                            <button
                                className={cn(
                                    "w-full h-full p-4 flex items-center justify-between text-left font-medium text-sm gap-2",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <CalendarIcon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                    <span className="truncate">
                                        {date?.from ? (
                                            date.to ? (
                                                <>
                                                    {format(date.from, "dd MMM yyyy")} &mdash; {format(date.to, "dd MMM yyyy")}
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
                                <Users className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                <span className="truncate">
                                    {totalGuests} Guest{totalGuests !== 1 && "s"} &mdash; {rooms} Room{rooms !== 1 && "s"}
                                </span>
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
                        <SelectTrigger className="w-full h-full p-4 border-none shadow-none focus:ring-0 rounded-none bg-transparent">
                            <div className="flex items-center gap-3">
                                <Crown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                <SelectValue placeholder="Special Code" />
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
                    className="w-full lg:w-auto h-full px-10 py-5 bg-[#C5A861] hover:bg-[#b0944f] text-white font-bold tracking-wide text-sm whitespace-nowrap transition-colors duration-300 hover:shadow-lg focus:outline-none"
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

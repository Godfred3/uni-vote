"use client";

import { Bell, Star, BookOpen, GraduationCap, MapPin, Mail, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="w-full px-6 pt-6 pb-2 flex justify-center z-40 relative">
      <div className="w-full max-w-2xl bg-background/80 backdrop-blur-xl shadow-sm border rounded-full flex items-center justify-between px-3 py-2.5">
        
        {/* Left */}
        <div className="flex items-center gap-3 px-3">
          <div className="h-10 w-10 rounded-[12px] bg-primary text-primary-foreground flex items-center justify-center shadow-md">
            <Star className="h-5 w-5" />
          </div>
          <span className="font-semibold text-foreground text-[17px] tracking-tight hidden sm:block">
            UniVote
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1 pr-1">
          <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground">
            <Bell className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-[42px] w-[42px] ring-2 ring-background shadow-sm cursor-pointer hover:opacity-90 transition-opacity ml-2">
                <AvatarImage src="/avatar.jpg" />
                <AvatarFallback className="bg-primary text-primary-foreground font-medium">JD</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-64 mt-2 bg-background/80 backdrop-blur-xl border-white/10" align="end">
              <DropdownMenuLabel className="font-normal py-2">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground font-medium">JD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none text-foreground">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">202600123</p>
                  </div>
                </div>
              </DropdownMenuLabel>
              
              <DropdownMenuSeparator />
              
              <div className="px-2 py-1.5">
                <div className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>Computing Sciences</span>
                </div>
                <div className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Computer Science</span>
                </div>
                <div className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4" />
                  <span>Level 300</span>
                </div>
                <div className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>john@stu.edu</span>
                </div>
              </div>

              <DropdownMenuSeparator />
              
              <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10 font-medium cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
      </div>
    </div>
  );
}
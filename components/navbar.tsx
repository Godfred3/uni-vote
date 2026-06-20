"use client";

import { Bell, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="pt-6 pb-2 px-4 sticky top-0 z-50 flex justify-center w-full pointer-events-none">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/60 rounded-[32px] flex items-center justify-between px-3 py-2.5 pointer-events-auto">
        
        {/* Left */}
        <div className="flex items-center gap-3 px-3">
          <div className="h-10 w-10 rounded-[12px] bg-zinc-900 text-white flex items-center justify-center shadow-md">
            <Star className="h-5 w-5 fill-white" />
          </div>
          <span className="font-semibold text-zinc-900 text-[17px] tracking-tight hidden sm:block">
            UniVote
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1 pr-1">
          <button className="h-11 w-11 rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors text-zinc-500">
            <Bell className="h-5 w-5" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none ml-2">
              <Avatar className="h-[42px] w-[42px] ring-2 ring-white shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
                <AvatarImage src="/avatar.jpg" />
                <AvatarFallback className="bg-[#3A76F0] text-white font-medium">JD</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-72 p-4 space-y-3 rounded-[20px] shadow-xl border-zinc-100 mt-2" align="end">
              <div className="flex items-center gap-3 pb-3 border-b border-zinc-100">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-[#3A76F0] text-white font-medium">JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-zinc-900 leading-none mb-1">John Doe</p>
                  <p className="text-xs text-zinc-500 font-medium">202600123</p>
                </div>
              </div>

              <div className="text-[13px] space-y-2.5 py-2 text-zinc-600">
                <p><span className="font-semibold text-zinc-900">Faculty:</span> Computing Sciences</p>
                <p><span className="font-semibold text-zinc-900">Department:</span> Computer Science</p>
                <p><span className="font-semibold text-zinc-900">Level:</span> 300</p>
                <p><span className="font-semibold text-zinc-900">Email:</span> john@stu.edu</p>
              </div>

              <Button variant="destructive" className="w-full rounded-xl h-11 font-medium mt-1">
                Logout
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
      </div>
    </div>
  );
}
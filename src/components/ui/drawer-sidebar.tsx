"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

export const DrawerSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="h-4 w-4" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Sidebar Menu</SheetTitle>
          <SheetDescription>
            Quick access to navigation and settings.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-4">
          <Button variant="ghost" className="justify-start">
            <MenuIcon className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="justify-start">
            <MenuIcon className="mr-2 h-4 w-4" />
            Projects
          </Button>
          <Button variant="ghost" className="justify-start">
            <MenuIcon className="mr-2 h-4 w-4" />
            Team
          </Button>
          <Button variant="ghost" className="justify-start">
            <MenuIcon className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
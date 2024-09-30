"use client"

import * as React from "react"
import { GlobeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"

export const ToggleLanguage = () => {

  const pathName = usePathname()
  const params = useParams()

  console.log(pathName)

  const handleSelectLanguage = (lang: string) => {
    params.lang = lang
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <GlobeIcon />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleSelectLanguage("pt")}>
          Português
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleSelectLanguage("en")}>
          Inglês
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleSelectLanguage("nl")}>
          Neerlandês
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

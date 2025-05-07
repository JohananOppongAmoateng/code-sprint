"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowDownAZ, ArrowUpAZ, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface SortOption {
  label: string
  value: string
  direction: "asc" | "desc"
  icon?: React.ReactNode
}

interface SortDropdownProps {
  label: string
  options: SortOption[]
  className?: string
}

export function SortDropdown({ label, options, className }: SortDropdownProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentSort = searchParams.get("sort") || ""
  const currentOrder = searchParams.get("order") || "desc"
  const [selectedSort, setSelectedSort] = useState(currentSort)
  const [selectedOrder, setSelectedOrder] = useState(currentOrder as "asc" | "desc")

  const handleSelect = (sort: string, order: "asc" | "desc") => {
    setSelectedSort(sort)
    setSelectedOrder(order)
    const params = new URLSearchParams(searchParams)

    if (sort) {
      params.set("sort", sort)
      params.set("order", order)
    } else {
      params.delete("sort")
      params.delete("order")
    }

    router.push(`?${params.toString()}`)
  }

  const getSelectedLabel = () => {
    if (!selectedSort) return label
    const option = options.find((opt) => opt.value === selectedSort && opt.direction === selectedOrder)
    return option ? option.label : label
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={className}>
          {getSelectedLabel()}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map((option) => (
          <DropdownMenuItem
            key={`${option.value}-${option.direction}`}
            onClick={() => handleSelect(option.value, option.direction)}
            className="flex items-center"
          >
            {option.icon ||
              (option.direction === "asc" ? (
                <ArrowUpAZ className="mr-2 h-4 w-4" />
              ) : (
                <ArrowDownAZ className="mr-2 h-4 w-4" />
              ))}
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

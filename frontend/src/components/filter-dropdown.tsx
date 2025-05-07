"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface FilterOption {
  label: string
  value: string
}

interface FilterDropdownProps {
  label: string
  paramName: string
  options: FilterOption[]
  className?: string
}

export function FilterDropdown({ label, paramName, options, className }: FilterDropdownProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentValue = searchParams.get(paramName) || ""
  const [selectedValue, setSelectedValue] = useState(currentValue)

  const handleSelect = (value: string) => {
    setSelectedValue(value)
    const params = new URLSearchParams(searchParams)

    if (value) {
      params.set(paramName, value)
    } else {
      params.delete(paramName)
    }

    router.push(`?${params.toString()}`)
  }

  const getSelectedLabel = () => {
    if (!selectedValue) return label
    const option = options.find((opt) => opt.value === selectedValue)
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
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={!selectedValue} onCheckedChange={() => handleSelect("")}>
          All
        </DropdownMenuCheckboxItem>
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option.value}
            checked={selectedValue === option.value}
            onCheckedChange={() => handleSelect(option.value)}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

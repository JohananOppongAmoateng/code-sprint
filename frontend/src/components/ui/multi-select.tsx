"use client"

import * as React from "react"
import { X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { Command as CommandPrimitive } from "cmdk"

interface MultiSelectProps {
  options: { label: string; value: string }[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder?: string
  className?: string
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select options",
  className,
}: MultiSelectProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("")

  const handleUnselect = (option: string) => {
    onChange(selected.filter((s) => s !== option))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const input = inputRef.current
    if (input) {
      if (e.key === "Delete" || e.key === "Backspace") {
        if (input.value === "" && selected.length > 0) {
          handleUnselect(selected[selected.length - 1])
        }
      }
      // This helps to prevent the command menu from closing when the user is typing
      if (e.key === " " && input.value === "") {
        e.preventDefault()
      }
    }
  }

  const handleSelect = (option: string) => {
    if (selected.includes(option)) {
      handleUnselect(option)
    } else {
      onChange([...selected, option])
    }
    setInputValue("")
  }

  return (
    <Command onKeyDown={handleKeyDown} className={className}>
      <div className="group border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex gap-1 flex-wrap">
          {selected.map((option) => {
            const selectedOption = options.find((o) => o.value === option)
            return (
              <Badge key={option} variant="secondary" className="mb-1 mr-1">
                {selectedOption?.label || option}
                <button
                  className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(option)
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  onClick={() => handleUnselect(option)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            )
          })}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder={selected.length === 0 ? placeholder : undefined}
            className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
          />
        </div>
      </div>
      <div className="relative">
        {open && (
          <div className="absolute w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            <CommandList>
              <CommandGroup>
                {options
                  .filter((option) => {
                    const label = option.label.toLowerCase()
                    const input = inputValue.toLowerCase()
                    return label.includes(input)
                  })
                  .map((option) => {
                    const isSelected = selected.includes(option.value)
                    return (
                      <CommandItem
                        key={option.value}
                        onSelect={() => handleSelect(option.value)}
                        className={`${isSelected ? "bg-accent" : ""}`}
                      >
                        <div
                          className={`mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary ${
                            isSelected ? "bg-primary text-primary-foreground" : "opacity-50"
                          }`}
                        >
                          {isSelected && <Check className="h-3 w-3" />}
                        </div>
                        {option.label}
                      </CommandItem>
                    )
                  })}
              </CommandGroup>
            </CommandList>
          </div>
        )}
      </div>
    </Command>
  )
}

import { Check } from "lucide-react"

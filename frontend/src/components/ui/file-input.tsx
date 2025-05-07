"use client"

import * as React from "react"
import { Upload, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onFilesChange?: (files: File[]) => void
  maxFiles?: number
  accept?: string
  className?: string
  dropzoneText?: string
}

export function FileInput({
  onFilesChange,
  maxFiles = 1,
  accept,
  className,
  dropzoneText = "Drag & drop files here or click to browse",
  ...props
}: FileInputProps) {
  const [files, setFiles] = React.useState<File[]>([])
  const [isDragging, setIsDragging] = React.useState(false)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      const updatedFiles = maxFiles === 1 ? newFiles : [...files, ...newFiles].slice(0, maxFiles)
      setFiles(updatedFiles)
      if (onFilesChange) {
        onFilesChange(updatedFiles)
      }
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files)
      const updatedFiles = maxFiles === 1 ? newFiles : [...files, ...newFiles].slice(0, maxFiles)
      setFiles(updatedFiles)
      if (onFilesChange) {
        onFilesChange(updatedFiles)
      }
    }
  }

  const removeFile = (index: number) => {
    const updatedFiles = [...files]
    updatedFiles.splice(index, 1)
    setFiles(updatedFiles)
    if (onFilesChange) {
      onFilesChange(updatedFiles)
    }
  }

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      <div
        className={cn(
          "border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition-colors",
          isDragging ? "border-primary bg-primary/5" : "border-input hover:border-primary/50",
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
          accept={accept}
          multiple={maxFiles > 1}
          {...props}
        />
        <div className="flex flex-col items-center gap-2">
          <Upload className="h-8 w-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">{dropzoneText}</p>
          {maxFiles > 1 && (
            <p className="text-xs text-muted-foreground">
              Max {maxFiles} file{maxFiles > 1 ? "s" : ""}
            </p>
          )}
        </div>
      </div>
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div key={`${file.name}-${index}`} className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
              <div className="flex items-center gap-2 text-sm truncate">
                <span className="truncate max-w-[200px]">{file.name}</span>
                <span className="text-xs text-muted-foreground">({(file.size / 1024).toFixed(2)} KB)</span>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={(e) => {
                  e.stopPropagation()
                  removeFile(index)
                }}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Remove file</span>
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

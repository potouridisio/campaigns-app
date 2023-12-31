import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

const Table = forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto">
    <table
      className={cn('w-full caption-bottom text-sm', className)}
      ref={ref}
      {...props}
    />
  </div>
))

Table.displayName = 'Table'

const TableBody = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    className={cn('[&_tr:last-child]:border-0', className)}
    ref={ref}
    {...props}
  />
))

TableBody.displayName = 'TableBody'

const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    className={cn('mt-4 text-sm text-muted-foreground', className)}
    ref={ref}
    {...props}
  />
))

TableCaption.displayName = 'TableCaption'

const TableCell = forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    ref={ref}
    {...props}
  />
))

TableCell.displayName = 'TableCell'

const TableFooter = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    className={cn('bg-primary font-medium text-primary-foreground', className)}
    ref={ref}
    {...props}
  />
))

TableFooter.displayName = 'TableFooter'

const TableHead = forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    className={cn(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      className
    )}
    ref={ref}
    {...props}
  />
))

TableHead.displayName = 'TableHead'

const TableHeader = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead className={cn('[&_tr]:border-b', className)} ref={ref} {...props} />
))

TableHeader.displayName = 'TableHeader'

const TableRow = forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    className={cn(
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      className
    )}
    ref={ref}
    {...props}
  />
))

TableRow.displayName = 'TableRow'

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
}

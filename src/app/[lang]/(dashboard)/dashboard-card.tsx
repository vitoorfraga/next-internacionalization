"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

type DashboardCardProps = {
  title: string
  value: number
  helperText?: string
  percentage: number
}

export const DashboardCard = ({ percentage, title, value, helperText }: DashboardCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-4xl">{value}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">{helperText}</div>
      </CardContent>
      <CardFooter>
        <Progress value={percentage} aria-label="25% increase" />
      </CardFooter>
    </Card>
  )
}

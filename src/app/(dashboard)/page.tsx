import { Button } from "@/components/ui/button";
import { DashboardCard } from "./dashboard-card";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">Dashboard</h1>

      <div className="flex flex-col gap-4 mt-6">
        <Card className="sm:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle>Your Orders</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Introducing Our Dynamic Orders Dashboard for Seamless Management and
              Insightful Analysis.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Create New Order</Button>
          </CardFooter>
        </Card>

        <DashboardCard
          title="This Week"
          value={32}
          helperText="+25% from last week"
          percentage={25}
        />

        <DashboardCard
          title="This Month"
          value={5329}
          helperText="+10% from last month"
          percentage={10}
        />
      </div>
    </div>
  )
}
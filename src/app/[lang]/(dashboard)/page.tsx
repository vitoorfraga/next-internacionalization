import { Button } from "@/components/ui/button";
import { DashboardCard } from "./dashboard-card";

import { getDictionary } from '@/dictionaries/dictionaries'

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type HomePageProps = {
  params: {
    lang: string
  }
}

export default async function HomePage({ params: { lang } }: HomePageProps) {

  const dict = await getDictionary(lang)

  console.log(dict)

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">Dashboard</h1>

      <div className="flex flex-col gap-4 mt-6">
        <Card className="sm:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle>{dict.dashboard.your_orders.title}</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              {dict.dashboard.your_orders.description}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>{dict.dashboard.your_orders.button}</Button>
          </CardFooter>
        </Card>

        <DashboardCard
          title={dict.dashboard.week.title}
          value={32}
          helperText={`+25% ${dict.dashboard.week.helper_text}`}
          percentage={25}
        />

        <DashboardCard
          title={dict.dashboard.month.title}
          value={5329}
          helperText={`+10% ${dict.dashboard.month.helper_text}`}
          percentage={10}
        />
      </div>
    </div>
  )
}
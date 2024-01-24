import MetricCard from "@/components/cards/metric-card";
import { RoundedTopBarFill } from "@/components/charts/rounded-topbar";
import { Title, Text } from "@/components/ui/text";
import cn from "@/utils/class-names";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const trafficData = [
    {
        day: "Sunday",
        sale: 4000,
        cost: 2400,
    },
    {
        day: "Monday",
        sale: 3000,
        cost: 1398,
    },
    {
        day: "Tuesday",
        sale: 2000,
        cost: 9800,
    },
    {
        day: "Wednesday",
        sale: 2780,
        cost: 3908,
    },
    {
        day: "Thursday",
        sale: 1890,
        cost: 4800,
    },
    {
        day: "Friday",
        sale: 2390,
        cost: 3800,
    },
    {
        day: "Saturday",
        sale: 3490,
        cost: 4300,
    },
];

const conventionRateData = [
    {
        day: "Sunday",
        sale: 2000,
        cost: 2400,
    },
    {
        day: "Monday",
        sale: 3000,
        cost: 1398,
    },
    {
        day: "Tuesday",
        sale: 2000,
        cost: 9800,
    },
    {
        day: "Wednesday",
        sale: 2780,
        cost: 3908,
    },
    {
        day: "Thursday",
        sale: 1890,
        cost: 4800,
    },
    {
        day: "Friday",
        sale: 2390,
        cost: 3800,
    },
    {
        day: "Saturday",
        sale: 3490,
        cost: 4300,
    },
];

const barData = [
    {
        day: "Sunday",
        sale: 2000,
        cost: 2400,
    },
    {
        day: "Monday",
        sale: 2800,
        cost: 1398,
    },
    {
        day: "Tuesday",
        sale: 3500,
        cost: 9800,
    },
    {
        day: "Wednesday",
        sale: 2780,
        cost: 3908,
    },
    {
        day: "Thursday",
        sale: 1890,
        cost: 4800,
    },
    {
        day: "Friday",
        sale: 2390,
        cost: 3800,
    },
    {
        day: "Saturday",
        sale: 3490,
        cost: 4300,
    },
];

const analyticsStatData = [
    {
        id: "1",
        title: "Orders",
        metric: "91.6K",
        increased: true,
        decreased: false,
        fill: "#015DE1",
        chart: trafficData,
    },
    {
        id: "2",
        title: "Sales",
        metric: "12.56%",
        increased: false,
        decreased: true,
        fill: "#048848",
        chart: conventionRateData,
    },
    {
        id: "3",
        title: "Revenue",
        metric: "45.33%",
        increased: true,
        decreased: false,
        fill: "#B92E5D",
        chart: barData,
    },
];

export default function StatCards({
    className,
    data,
}: {
    className?: string;
    data: any;
}) {
    return (
        <div
            className={cn(
                "grid grid-cols-1 gap-5 3xl:gap-8 4xl:gap-9",
                className,
            )}
        >
            {data.map((stat: any) => (
                <MetricCard
                    key={stat.title + stat.id}
                    title={stat.title}
                    metric={stat.metric}
                    rounded="lg"
                    metricClassName="text-2xl mt-1"
                    info={
                        <Text className="mt-4 max-w-[150px] text-sm text-gray-500">
                            {/* {stat.info} */}
                        </Text>
                    }
                    chart={
                        <>
                            <div className="h-12 w-20 @[16.25rem]:h-16 @[16.25rem]:w-24 @xs:h-20 @xs:w-28">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        barSize={6}
                                        barGap={5}
                                        data={stat.chart}
                                    >
                                        <Bar
                                            dataKey="sale"
                                            fill={stat.fill}
                                            shape={
                                                <RoundedTopBarFill
                                                    cornerRadius={2}
                                                />
                                            }
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </>
                    }
                    chartClassName="flex flex-col w-auto h-auto text-center"
                    className="@container @7xl:text-[15px] [&>div]:items-end"
                />
            ))}
        </div>
    );
}

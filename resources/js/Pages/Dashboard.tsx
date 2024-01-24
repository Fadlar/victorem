import App from "@/Layouts/App";
import WelcomeBanner from "@/components/banners/welcome";
import HandWaveIcon from "@/components/icons/hand-wave";
import { routes } from "@/config/routes";
import StatCards from "@/shared/analytics-dashboard/stat-cards";
import RecentOrder from "@/shared/ecommerce/dashboard/recent-order";
import SalesReport from "@/shared/ecommerce/dashboard/sales-report";
import { Link } from "@inertiajs/react";
import { PiPlusBold } from "react-icons/pi";
import { Button } from "rizzui";

export default function Dashboard({ starCard, recentOrders }: any) {
    return (
        <App title="Dashboard">
            <div className="@container">
                <div className="grid grid-cols-1 gap-6 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">
                    <WelcomeBanner
                        title={
                            <>
                                Hi Victorem{" "}
                                <HandWaveIcon className="inline-flex h-8 w-8" />
                            </>
                        }
                        description={
                            "Here's What happening on your store today. See the statistics at once."
                        }
                        media={
                            <div className="absolute -bottom-6 end-4 hidden w-[300px] @2xl:block lg:w-[320px] 2xl:-bottom-7 2xl:w-[330px]">
                                <div className="relative">
                                    <img
                                        src="https://isomorphic-furyroad.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop-illustration.b3542492.png&w=2048&q=75"
                                        alt="Welcome shop image form freepik"
                                        className="dark:brightness-95 dark:drop-shadow-md"
                                    />
                                </div>
                            </div>
                        }
                        contentClassName="@2xl:max-w-[calc(100%-340px)]"
                        className="border border-gray-200 bg-gray-0 pb-8 @4xl:col-span-2 @7xl:col-span-8 dark:bg-gray-100/30 lg:pb-9"
                    >
                        <Link
                            href={routes.eCommerce.createProduct}
                            className="inline-flex"
                        >
                            <Button
                                tag="span"
                                className="h-[38px] shadow dark:bg-gray-100 dark:text-gray-900 md:h-10"
                            >
                                <PiPlusBold className="me-1 h-4 w-4" /> Add
                                Product
                            </Button>
                        </Link>
                    </WelcomeBanner>

                    <StatCards
                        data={starCard}
                        className="@2xl:grid-cols-3 @3xl:gap-6 @4xl:col-span-2 @7xl:col-span-8"
                    />

                    {/* <SalesReport className="@4xl:col-span-2 @7xl:col-span-8" /> */}

                    <RecentOrder
                        data={recentOrders}
                        className="relative @4xl:col-span-2 @7xl:col-span-12"
                    />

                    {/* <RepeatCustomerRate className="@4xl:col-span-2 @7xl:col-span-12 @[90rem]:col-span-8" /> */}

                    {/* <BestSellers className="@7xl:col-span-6 @[90rem]:col-span-4" /> */}

                    {/* <UserLocation className="@7xl:col-span-6 @[90rem]:col-span-5 @[112rem]:col-span-4" /> */}

                    {/* <StockReport className="@4xl:col-span-2 @7xl:col-span-12 @[90rem]:col-span-7 @[112rem]:col-span-8" /> */}
                </div>
            </div>
        </App>
    );
}

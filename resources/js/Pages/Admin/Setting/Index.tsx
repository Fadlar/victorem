import App from "@/Layouts/App";
import FormFooter from "@/components/form-footer";
import ProfileSettingsNav from "@/shared/account-settings/navigation";
import FormGroup from "@/shared/form-group";
import PageHeader from "@/shared/page-header";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { Button, Input } from "rizzui";

const pageHeader = {
    title: `Settings`,
    breadcrumb: [
        {
            name: "Setting",
            href: "/settings",
        },
        {
            name: "Update Setting",
        },
    ],
};

export default function Setting() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        application_name: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const submitHandler = (e: any) => {
        e.preventDefault();

        router.patch("/settings", {
            _method: "patch",
            ...data,
        });
    };

    return (
        <App title="Setting">
            <PageHeader
                title={pageHeader.title}
                breadcrumb={pageHeader.breadcrumb}
            />
            <ProfileSettingsNav />
            <div className="@container">
                <form
                    onSubmit={submitHandler}
                    className="[&_label.block>span]:font-medium"
                >
                    <div className="min-h-screen">
                        <FormGroup
                            title="General Settings"
                            description="Update your general settings."
                            className="mt-10"
                        />
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
                            <Input
                                label="Application Name"
                                placeholder="Enter your application name"
                                onChange={handleChange}
                                value={data.application_name}
                            />
                        </div>
                    </div>
                    <FormFooter
                        // isLoading={isLoading}
                        altBtnText="Cancel"
                        submitBtnText="Save"
                    />
                </form>
            </div>
        </App>
    );
}

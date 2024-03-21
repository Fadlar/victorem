import App from "@/Layouts/App";
import PageHeader from "@/shared/page-header";
import { PageProps } from "@/types";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

const pageHeader = {
    title: "Profile",
    breadcrumb: [
        {
            href: "/profile",
            name: "Profile",
        },
    ],
};

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <App title="Profile">
            {/* <PageHeader
                title={pageHeader.title}
                breadcrumb={pageHeader.breadcrumb}
            ></PageHeader> */}
            <div>
                <div className="max-w-7xl mx-auto sm:px-6 space-y-6">
                    <div className="pb-8 pt-5 border-b border-gray-300">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="py-8 bg-white">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    {/* <div className="p-4 sm:p-8 bg-white">
                        <DeleteUserForm className="max-w-xl" />
                    </div> */}
                </div>
            </div>
        </App>
    );
}

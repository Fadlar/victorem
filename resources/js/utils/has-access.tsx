import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";

export const hasAccess = (requiredPermission: string) => {
    const { auth } = usePage<PageProps>().props;

    const isSuperAdmin = auth.user.roles.some(
        (role) => role.name === "superAdmin",
    );

    if (isSuperAdmin) {
        return isSuperAdmin;
    }

    const hasPermissionInRoles = auth.user.roles.some((role) => {
        return role.permissions.some(
            (permission) => permission.name === requiredPermission,
        );
    });

    if (hasPermissionInRoles) {
        return hasPermissionInRoles;
    }

    const hasPermission = auth.user.permissions.some(
        (permission) => permission.name === requiredPermission,
    );

    return hasPermission;
};

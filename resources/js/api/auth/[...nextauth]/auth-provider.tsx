// import { SessionProvider } from "next-auth/react";

export default function AuthProvider({
    children,
    session,
}: {
    children: React.ReactNode;
    session: any;
}): React.ReactNode {
    return;
    // return <SessionProvider session={session}>{children}</SessionProvider>;
}

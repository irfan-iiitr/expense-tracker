import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="bg-white flex items-center justify-center min-h-screen">
            <SignUp />
        </div>
    );
}
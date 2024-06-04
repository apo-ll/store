import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function AvatarMenu() {
    return (
        <>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </>
    );
}

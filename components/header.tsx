import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import PreviewSearchBox from "./PreviewSearchBox";

export const Header = () => {
  return (
    <header className="h-16 w-full bg-sky-700">
      <div className="mx-12 flex items-center justify-between h-full">
        <div className="py-8 pl-4 flex items-center gap-x-3">
          <div className="flex flex-row items-center gap-x-1 cursor-default">
            <h1 className="text-white text-3xl font-thin ">book</h1>
            <h1 className="text-orange-500 text-3xl tracking-wide">journey</h1>
          </div>
        </div>
        <ClerkLoading>
          <Loader className="h-6 w-6 text-white animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
        <PreviewSearchBox/>
          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button> Login </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};

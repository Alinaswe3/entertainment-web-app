import { Logo } from "@/components/Icons";
import { useEffect } from "react";
import { useRouter } from "next/router";

/**
 * Page component that renders the home page
 * @component
 */
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Pushing the user to login page after timer expires
    const timer = setTimeout(() => {
      router.push("/home");
    }, 3000);
    // Clearing the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="auth">
      <div className="landing__content">
        <h2 className="landing__heading">Welcome</h2>
        <Logo />
        <span className="loader"></span>
      </div>
    </div>
  );
}

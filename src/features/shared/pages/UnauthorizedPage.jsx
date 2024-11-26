import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Unauthorized } from "@/assets";

export default function UnauthorizedPage() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col w-full h-[100vh] justify-center items-center space-y-4 text-center animate-fadeIn bg-primary">
      <video muted autoPlay loop className="h-[400px]">
        <source src={Unauthorized} type="video/mp4" />
      </video>
      <h1 className="text-4xl font-semibold text-foreground mb-4">
        Access Denied !
      </h1>
      <p className="text-lg text-foreground max-w-lg">
        Sorry, you don&apos;t have permission to access this page. Please
        contact your administrator if you believe this is an error.
      </p>
      <Button
        onClick={() => navigate("/")}
        variant="bright"
        className=" hover:border-accent hover:bg-accent"
      >
        Return to Home
      </Button>
    </section>
  );
}

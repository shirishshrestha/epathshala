import { Notfound } from "@/assets";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col w-full h-[100vh] justify-center items-center space-y-4 text-center animate-fadeIn">
      <video muted autoPlay loop className="h-[400px]">
        <source src={Notfound} type="video/mp4" />
      </video>
      <h1 className="text-4xl font-semibold text-foreground mb-4 animate-pulse">
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-mild">
        It seems like the page you&apos;re looking for doesn’t exist.
      </p>
      <Button
        onClick={() => navigate("/")}
        variant="bright"
        className=" hover:border-accent hover:bg-accent"
      >
        Go to Home
      </Button>
    </section>
  );
}

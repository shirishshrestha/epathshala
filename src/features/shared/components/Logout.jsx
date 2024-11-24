import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

function Logout() {
  return (
    <Button
      variant="none"
      className="display flex items-center justify-center gap-3"
    >
      <LogOut /> Logout
    </Button>
  );
}

export default Logout;

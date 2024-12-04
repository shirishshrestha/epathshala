import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
export default function EsewaSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r bg-secondary">
      <Card className="w-full max-w-md bg-primary">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-green-700">
            Payment Successful
          </CardTitle>
          <CardDescription className="text-center text-green-600">
            Your Esewa payment has been processed successfully.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <p className="text-sm text-foreground">
              Thank you for your payment. Your transaction has been completed,
              and a receipt for your purchase has been emailed to you.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link to="/student">Return to Dashboard</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

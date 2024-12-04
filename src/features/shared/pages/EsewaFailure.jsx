import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { XCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function EsewaFailure() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-50 to-red-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <XCircle className="h-16 w-16 text-red-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-red-700">
            Payment Failed
          </CardTitle>
          <CardDescription className="text-center text-red-600">
            We encountered an issue while processing your Osewa payment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              We&apos;re sorry, but we couldn&apos;t process your payment at
              this time. Please check your payment details and try again.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link to="/courses">Go to Courses</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

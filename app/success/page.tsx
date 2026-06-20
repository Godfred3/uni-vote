import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="p-8 text-center space-y-4 w-[400px]">
        
        <h1 className="text-xl font-semibold">
          Vote Submitted Successfully 🎉
        </h1>

        <p className="text-muted-foreground">
          Thank you for participating.
        </p>

        <div className="text-sm">
          Reference Number:
          <p className="font-medium">VT-2026-000521</p>
        </div>

        <p className="text-sm text-muted-foreground">
          You will be automatically logged out in 10 seconds.
        </p>

        <Button className="w-full">
          Logout Now
        </Button>

        <Button variant="secondary" className="w-full" disabled>
          Back to Home
        </Button>
      </Card>
    </div>
  );
}
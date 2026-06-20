import Navbar from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ReviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="p-6 space-y-6">

        <h1 className="text-xl font-semibold">
          Review Your Selections
        </h1>

        <Card className="p-4 space-y-4">
          <div>
            <h2 className="font-medium">President</h2>
            <p className="text-sm">✓ John Doe</p>
          </div>

          <div>
            <h2 className="font-medium">Vice President</h2>
            <p className="text-sm">✓ Mary Smith</p>
          </div>

          <div>
            <h2 className="font-medium">Secretary</h2>
            <p className="text-sm">✓ James Brown</p>
          </div>

          <p className="text-sm text-muted-foreground">
            Votes cannot be changed after submission.
          </p>

          <div className="flex gap-3">
            <Button variant="secondary" className="w-full">
              Edit Votes
            </Button>

            <Button
              className="w-full"
              onClick={() => (window.location.href = "/success")}
            >
              Submit Vote
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
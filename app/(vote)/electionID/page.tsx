"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const positions = ["President", "Vice President", "Secretary"];

export default function VotingPage() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="p-6 space-y-6">

        {/* Step Indicator */}
        <div>
          <p className="text-sm text-muted-foreground">
            Step {step} of {positions.length}
          </p>
          <div className="h-2 bg-muted rounded-full mt-2">
            <div
              className="h-2 bg-foreground rounded-full"
              style={{ width: `${(step / positions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Position */}
        <h2 className="text-xl font-semibold">
          {positions[step - 1]}
        </h2>

        <p className="text-muted-foreground">
          Select one candidate.
        </p>

        {/* Candidates */}
        <div className="space-y-3">
          {[1, 2, 3].map((c) => (
            <Card
              key={c}
              className={`p-4 cursor-pointer border ${
                selected === `c${c}` ? "border-foreground" : ""
              }`}
              onClick={() => setSelected(`c${c}`)}
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">
                    Computer Science • Level 300
                  </p>
                </div>

                <input type="radio" checked={selected === `c${c}`} readOnly />
              </div>

              <p className="text-sm mt-2 text-muted-foreground">
                “Improving student welfare through transparency and leadership.”
              </p>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-4">
          <Button
            variant="secondary"
            onClick={() => setStep((s) => Math.max(1, s - 1))}
          >
            Back
          </Button>

          <Button
            onClick={() => {
              if (step < positions.length) {
                setStep(step + 1);
                setSelected(null);
              } else {
                window.location.href = "/review";
              }
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
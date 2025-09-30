import { ArrowLeft, Shield, Clock, ShieldCheck, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useState } from "react";

interface WipeOptionsProps {
  device: any;
  onStartWipe: (method: string) => void;
  onBack: () => void;
}

export function WipeOptions({ device, onStartWipe, onBack }: WipeOptionsProps) {
  const [selectedMethod, setSelectedMethod] = useState("quick");

  const wipeOptions = [
    {
      id: "quick",
      name: "Quick Wipe",
      description: "1 pass overwrite",
      icon: Clock,
      time: "~15 minutes",
      level: "Basic",
      color: "text-blue-600"
    },
    {
      id: "secure",
      name: "Secure Wipe",
      description: "3 passes overwrite",
      icon: Shield,
      time: "~45 minutes",
      level: "Standard",
      color: "text-orange-600"
    },
    {
      id: "military",
      name: "Military Grade Wipe",
      description: "7 passes overwrite",
      icon: Lock,
      time: "~2 hours",
      level: "Maximum",
      color: "text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Button 
            onClick={onBack}
            variant="ghost" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Devices
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">Choose Wiping Method</h1>
          <p className="text-gray-600">
            Select the security level for wiping <span className="font-medium">{device?.name}</span> ({device?.size})
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Wiping Options</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod} className="space-y-4">
              {wipeOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <div key={option.id} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center`}>
                          <Icon className={`w-5 h-5 ${option.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg text-gray-900">{option.name}</h3>
                            <div className="text-right">
                              <div className={`text-sm px-2 py-1 rounded-full ${
                                option.id === 'quick' ? 'bg-blue-100 text-blue-800' :
                                option.id === 'secure' ? 'bg-orange-100 text-orange-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {option.level}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 mt-1">{option.description}</p>
                          <p className="text-sm text-gray-500 mt-1">Estimated time: {option.time}</p>
                        </div>
                      </div>
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </CardContent>
        </Card>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-yellow-600" />
            <h3 className="text-yellow-800">Important Warning</h3>
          </div>
          <p className="text-yellow-700 text-sm">
            This operation will permanently erase all data on the selected device. 
            This action cannot be undone. Please ensure you have backed up any important data.
          </p>
        </div>

        <div className="flex gap-4">
          <Button 
            onClick={onBack}
            variant="outline" 
            className="px-8 py-3"
          >
            Cancel
          </Button>
          <Button 
            onClick={() => onStartWipe(selectedMethod)}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 flex-1"
          >
            Start Wiping
          </Button>
        </div>
      </div>
    </div>
  );
}
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface SplashScreenProps {
  onContinue: () => void;
}

export function SplashScreen({ onContinue }: SplashScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-xl">
            <Shield className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl mb-4 text-gray-900">SafeErase</h1>
        <p className="text-xl text-gray-600 mb-8">Secure IT Asset Data Wiping</p>
        
        <Button 
          onClick={onContinue}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 mx-auto"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
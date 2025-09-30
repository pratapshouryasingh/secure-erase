import { Shield, User, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader } from "./ui/card";

interface LoginScreenProps {
  onLogin: () => void;
  onGuestLogin: () => void;
}

export function LoginScreen({ onLogin, onGuestLogin }: LoginScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl text-gray-900">SafeErase</h1>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-4">
            <h2 className="text-xl text-gray-900">Sign In</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input 
                  id="username"
                  type="text" 
                  placeholder="Enter your username"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input 
                  id="password"
                  type="password" 
                  placeholder="Enter your password"
                  className="pl-10"
                />
              </div>
            </div>

            <Button 
              onClick={onLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
            >
              Sign In
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-sm text-gray-500">OR</span>
              </div>
            </div>

            <Button 
              onClick={onGuestLogin}
              variant="outline"
              className="w-full py-3 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Continue as Guest
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
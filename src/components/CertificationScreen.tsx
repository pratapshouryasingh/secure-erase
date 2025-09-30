import { Shield, Download, Share2, CheckCircle, Calendar, Clock, HardDrive, User } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

interface CertificationScreenProps {
  device: any;
  wipeMethod: string;
  onDownloadCertificate: () => void;
  onShareCertificate: () => void;
  onBackToDashboard: () => void;
}

export function CertificationScreen({ 
  device, 
  wipeMethod, 
  onDownloadCertificate, 
  onShareCertificate, 
  onBackToDashboard 
}: CertificationScreenProps) {
  const certificateId = `SE-${Date.now().toString().slice(-8)}`;
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  const getMethodName = (method: string) => {
    switch(method) {
      case 'quick': return 'Quick Wipe (1 Pass)';
      case 'secure': return 'Secure Wipe (3 Passes)';
      case 'military': return 'Military Grade Wipe (7 Passes)';
      default: return 'Unknown Method';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl text-gray-900 mb-2">Wiping Complete</h1>
          <p className="text-gray-600">Data has been securely erased and certified</p>
        </div>

        {/* Certificate Card */}
        <Card className="border-2 border-gray-300 shadow-xl mb-8">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8" />
                <div>
                  <h2 className="text-2xl">Data Wiping Certificate</h2>
                  <p className="text-blue-100">SafeErase Security Solutions</p>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-white text-blue-700 px-3 py-1">
                  CERTIFIED
                </Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-gray-500" />
                    <label className="text-sm text-gray-500 uppercase tracking-wide">Certificate ID</label>
                  </div>
                  <p className="text-lg text-gray-900">{certificateId}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <HardDrive className="w-4 h-4 text-gray-500" />
                    <label className="text-sm text-gray-500 uppercase tracking-wide">Device Information</label>
                  </div>
                  <p className="text-lg text-gray-900">{device?.name || 'Unknown Device'}</p>
                  <p className="text-gray-600">Serial: {device?.serial || 'SN-' + Math.random().toString(36).substr(2, 10).toUpperCase()}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <HardDrive className="w-4 h-4 text-gray-500" />
                    <label className="text-sm text-gray-500 uppercase tracking-wide">Storage Size</label>
                  </div>
                  <p className="text-lg text-gray-900">{device?.size || 'Unknown Size'}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-gray-500" />
                    <label className="text-sm text-gray-500 uppercase tracking-wide">Wiping Method</label>
                  </div>
                  <p className="text-lg text-gray-900">{getMethodName(wipeMethod)}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <label className="text-sm text-gray-500 uppercase tracking-wide">Date & Time</label>
                  </div>
                  <p className="text-lg text-gray-900">{currentDate}</p>
                  <p className="text-gray-600">{currentTime}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <label className="text-sm text-gray-500 uppercase tracking-wide">Authorized By</label>
                  </div>
                  <p className="text-lg text-gray-900">IT Security Department</p>
                  <p className="text-gray-600">User ID: admin@company.com</p>
                </div>
              </div>
            </div>

            {/* Official Seal Section */}
            <div className="border-t pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 border-4 border-blue-600 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-900">Official Digital Seal</p>
                    <p className="text-sm text-gray-500">SafeErase Security Solutions</p>
                    <p className="text-sm text-gray-500">ISO 27001 Certified</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-100 text-green-800 px-3 py-2">
                    ✓ VERIFIED
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={onDownloadCertificate}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Certificate (PDF)
          </Button>
          
          <Button 
            onClick={onShareCertificate}
            variant="outline"
            className="px-8 py-3 flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            Share Certificate
          </Button>
          
          <Button 
            onClick={onBackToDashboard}
            variant="outline"
            className="px-8 py-3"
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
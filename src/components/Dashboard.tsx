import { Home, HardDrive, FileText, Settings, Search, Download, Shield, Award, CheckCircle, Activity } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface DashboardProps {
  onScanDevices: () => void;
  onNavigate: (screen: string) => void;
  activeScreen: string;
}

export function Dashboard({ onScanDevices, onNavigate, activeScreen }: DashboardProps) {
  const handleCheckLifecycle = () => {
    // In a real app, this would open a lifecycle management screen or modal
    console.log('Checking device lifecycle...');
    alert('Device Lifecycle Check: All devices are within operational parameters and maintenance schedules.');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'devices', label: 'Devices', icon: HardDrive },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl text-gray-900">SafeErase</h1>
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeScreen === item.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 relative">
        {/* NIST Verification Badge - Bottom Right Corner */}
        <div className="absolute bottom-6 right-6">
          <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1 flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            verified by nsit
          </Badge>
        </div>

        <div className="max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl text-gray-900">Dashboard</h1>
            <Button 
              onClick={handleCheckLifecycle}
              variant="outline"
              className="flex items-center gap-2 border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              <Activity className="w-4 h-4" />
              Check Lifecycle
            </Button>
          </div>
          
          {/* No Device Connected Card */}
          <Card className="mb-8 border-dashed border-2 border-gray-300">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <HardDrive className="w-16 h-16 text-gray-400 mb-4" />
              <h3 className="text-xl text-gray-600 mb-2">No device connected yet</h3>
              <p className="text-gray-500 mb-6">Connect a storage device to begin secure wiping</p>
              <Button 
                onClick={onScanDevices}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Scan Devices
              </Button>
            </CardContent>
          </Card>

          {/* Download Wiping Tool Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Wiping Tool
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Download the SafeErase wiping tool to install on target devices for secure data removal.
              </p>
              <div className="flex gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download .EXE (Windows)
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download .ISO (Bootable)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
import { HardDrive, Usb, Shield, Trash2, Home, FileText, Settings, Award } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface DeviceListProps {
  onWipeDevice: (device: any) => void;
  onNavigate: (screen: string) => void;
  activeScreen: string;
}

export function DeviceList({ onWipeDevice, onNavigate, activeScreen }: DeviceListProps) {
  const devices = [
    {
      id: 1,
      name: "Seagate HDD",
      type: "HDD",
      size: "500GB",
      status: "Connected",
      icon: HardDrive,
      statusColor: "bg-green-100 text-green-800"
    },
    {
      id: 2,
      name: "Samsung SSD",
      type: "SSD",
      size: "256GB",
      status: "Connected",
      icon: HardDrive,
      statusColor: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      name: "SanDisk USB",
      type: "USB",
      size: "32GB",
      status: "Connected",
      icon: Usb,
      statusColor: "bg-green-100 text-green-800"
    }
  ];

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
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl text-gray-900 mb-8">Connected Devices</h1>
          
          <div className="grid gap-6">
            {devices.map((device) => {
              const Icon = device.icon;
              return (
                <Card key={device.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="text-lg text-gray-900">{device.name}</h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-gray-600">{device.type}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-600">{device.size}</span>
                            <Badge className={device.statusColor}>
                              {device.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => onWipeDevice(device)}
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 flex items-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        Wipe Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {devices.length === 0 && (
            <Card className="border-dashed border-2 border-gray-300">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <HardDrive className="w-16 h-16 text-gray-400 mb-4" />
                <h3 className="text-xl text-gray-600 mb-2">No devices found</h3>
                <p className="text-gray-500">Connect a storage device to begin</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
import { Home, HardDrive, FileText, Settings, Shield, Award, Download, Calendar, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface CertificatesScreenProps {
  onNavigate: (screen: string) => void;
  activeScreen: string;
}

export function CertificatesScreen({ onNavigate, activeScreen }: CertificatesScreenProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'devices', label: 'Devices', icon: HardDrive },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Mock certificate data
  const certificates = [
    {
      id: 'SE-20241001',
      deviceName: 'Seagate HDD',
      deviceSize: '500GB',
      wipeMethod: 'Military Grade Wipe (7 Passes)',
      date: '2024-10-01',
      time: '14:30',
      authorizedBy: 'admin@company.com',
      status: 'Completed'
    },
    {
      id: 'SE-20241002',
      deviceName: 'Samsung SSD',
      deviceSize: '256GB', 
      wipeMethod: 'Secure Wipe (3 Passes)',
      date: '2024-10-02',
      time: '09:15',
      authorizedBy: 'admin@company.com',
      status: 'Completed'
    },
    {
      id: 'SE-20241003',
      deviceName: 'SanDisk USB',
      deviceSize: '32GB',
      wipeMethod: 'Quick Wipe (1 Pass)',
      date: '2024-10-03',
      time: '16:45',
      authorizedBy: 'admin@company.com',
      status: 'Completed'
    }
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
        <div className="max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl text-gray-900 mb-2">Certificates</h1>
              <p className="text-gray-600">View and manage all wiping certificates</p>
            </div>
            <Badge className="bg-green-100 text-green-800 px-3 py-1">
              {certificates.length} Certificates
            </Badge>
          </div>

          {certificates.length > 0 ? (
            <div className="space-y-4">
              {certificates.map((cert) => (
                <Card key={cert.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Award className="w-6 h-6 text-blue-600" />
                        </div>
                        
                        <div className="grid grid-cols-4 gap-8 flex-1">
                          <div>
                            <label className="text-sm text-gray-500 uppercase tracking-wide">Certificate ID</label>
                            <p className="text-gray-900 mt-1">{cert.id}</p>
                          </div>
                          
                          <div>
                            <label className="text-sm text-gray-500 uppercase tracking-wide">Device</label>
                            <p className="text-gray-900 mt-1">{cert.deviceName}</p>
                            <p className="text-gray-600 text-sm">{cert.deviceSize}</p>
                          </div>
                          
                          <div>
                            <label className="text-sm text-gray-500 uppercase tracking-wide">Wipe Method</label>
                            <p className="text-gray-900 mt-1">{cert.wipeMethod}</p>
                          </div>
                          
                          <div>
                            <label className="text-sm text-gray-500 uppercase tracking-wide">Date & Time</label>
                            <p className="text-gray-900 mt-1">{cert.date}</p>
                            <p className="text-gray-600 text-sm">{cert.time}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Badge className="bg-green-100 text-green-800">
                          {cert.status}
                        </Badge>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </Button>
                        <Button 
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-dashed border-2 border-gray-300">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Award className="w-16 h-16 text-gray-400 mb-4" />
                <h3 className="text-xl text-gray-600 mb-2">No certificates found</h3>
                <p className="text-gray-500">Certificates will appear here after completing device wipes</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { Dashboard } from "./components/Dashboard";
import { DeviceList } from "./components/DeviceList";
import { WipeOptions } from "./components/WipeOptions";
import { CertificationScreen } from "./components/CertificationScreen";
import { CertificatesScreen } from "./components/CertificatesScreen";

type Screen = 'splash' | 'dashboard' | 'devices' | 'wipe-options' | 'certification' | 'reports' | 'settings' | 'certificates';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedDevice, setSelectedDevice] = useState<any>(null);
  const [wipeMethod, setWipeMethod] = useState<string>('');

  const handleContinueFromSplash = () => {
    setCurrentScreen('dashboard');
  };

  const handleLogin = () => {
    setCurrentScreen('dashboard');
  };

  const handleGuestLogin = () => {
    setCurrentScreen('dashboard');
  };

  const handleScanDevices = () => {
    setCurrentScreen('devices');
  };

  const handleWipeDevice = (device: any) => {
    setSelectedDevice(device);
    setCurrentScreen('wipe-options');
  };

  const handleStartWipe = (method: string) => {
    setWipeMethod(method);
    // Simulate wiping process - in real app this would be a progress screen
    setTimeout(() => {
      setCurrentScreen('certification');
    }, 1000);
  };

  const handleNavigate = (screen: string) => {
    if (screen === 'dashboard') {
      setCurrentScreen('dashboard');
    } else if (screen === 'devices') {
      setCurrentScreen('devices');
    } else if (screen === 'reports') {
      setCurrentScreen('reports');
    } else if (screen === 'settings') {
      setCurrentScreen('settings');
    } else if (screen === 'certificates') {
      setCurrentScreen('certificates');
    }
  };

  const handleDownloadCertificate = () => {
    // In a real app, this would generate and download a PDF
    console.log('Downloading certificate...');
  };

  const handleShareCertificate = () => {
    // In a real app, this would open share options
    console.log('Sharing certificate...');
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
    setSelectedDevice(null);
    setWipeMethod('');
  };

  const handleBackToDevices = () => {
    setCurrentScreen('devices');
    setSelectedDevice(null);
  };

  // Render placeholder screens for reports and settings
  if (currentScreen === 'reports') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-gray-900 mb-4">Reports</h1>
          <p className="text-gray-600 mb-6">Wiping reports and audit logs will be displayed here</p>
          <button 
            onClick={() => setCurrentScreen('dashboard')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (currentScreen === 'settings') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-gray-900 mb-4">Settings</h1>
          <p className="text-gray-600 mb-6">Application settings and preferences will be displayed here</p>
          <button 
            onClick={() => setCurrentScreen('dashboard')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }



  switch (currentScreen) {
    case 'splash':
      return <SplashScreen onContinue={handleContinueFromSplash} />;
    
    case 'dashboard':
      return (
        <Dashboard 
          onScanDevices={handleScanDevices} 
          onNavigate={handleNavigate}
          activeScreen={currentScreen}
        />
      );
    
    case 'devices':
      return (
        <DeviceList 
          onWipeDevice={handleWipeDevice} 
          onNavigate={handleNavigate}
          activeScreen={currentScreen}
        />
      );
    
    case 'wipe-options':
      return (
        <WipeOptions 
          device={selectedDevice}
          onStartWipe={handleStartWipe}
          onBack={handleBackToDevices}
        />
      );
    
    case 'certification':
      return (
        <CertificationScreen 
          device={selectedDevice}
          wipeMethod={wipeMethod}
          onDownloadCertificate={handleDownloadCertificate}
          onShareCertificate={handleShareCertificate}
          onBackToDashboard={handleBackToDashboard}
        />
      );
    
    case 'certificates':
      return (
        <CertificatesScreen 
          onNavigate={handleNavigate}
          activeScreen={currentScreen}
        />
      );
    
    default:
      return <SplashScreen onContinue={handleContinueFromSplash} />;
  }
}
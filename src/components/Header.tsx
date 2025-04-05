
import React from 'react';
import { Leaf, Bell, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = () => {
  const { toast } = useToast();
  
  const handleNotificationsClick = () => {
    toast({
      title: "Notifications",
      description: "You have 3 new alerts about your crops.",
    });
  };

  return (
    <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-agroguardian-600" />
          <h1 className="text-xl font-semibold text-agroguardian-900">AgroGuardian AI</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleNotificationsClick}
            className="relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-alert-high"></span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <UserCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

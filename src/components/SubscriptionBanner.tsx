
import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const SubscriptionBanner = () => {
  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-agroguardian-700 to-agroguardian-900 px-6 py-5 text-white">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              AgroGuardian Premium
            </h3>
            <div className="bg-white/20 text-white text-xs px-3 py-0.5 rounded-full">
              7-day free trial
            </div>
          </div>
          <p className="text-sm text-agroguardian-100 max-w-md">
            Unlock advanced AI features to protect your crops and maximize yields
          </p>
        </div>
        
        <div className="p-6 bg-gradient-to-b from-agroguardian-50/50 to-white">
          <ul className="space-y-2 mb-4">
            {[
              'Advanced early warning system (12-72 hours ahead)',
              'Detailed treatment recommendations',
              'Historical disease tracking',
              'Automated reports for insurance purposes',
              'Priority customer support'
            ].map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-agroguardian-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-agroguardian-800">$9.99</span>
                <span className="text-sm text-muted-foreground ml-1">/month</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Cancel anytime. No commitment required.
              </p>
            </div>
            
            <Button className="bg-agroguardian-600 hover:bg-agroguardian-700">
              Start Free Trial
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionBanner;

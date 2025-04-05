
import React from 'react';
import { 
  Cloud, 
  CloudRain, 
  CloudLightning, 
  CloudDrizzle, 
  CloudSnow,
  Droplets,
  Wind,
  ThermometerSun
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface WeatherData {
  date: Date;
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy' | 'drizzle' | 'snow';
  humidity: number;
  windSpeed: number;
  precipitation: number;
  riskLevel: 'low' | 'medium' | 'high' | 'none';
}

const WeatherForecast = () => {
  // Mock weather data - would come from API in production
  const forecast: WeatherData[] = [
    {
      date: new Date(),
      temperature: 24,
      condition: 'sunny',
      humidity: 65,
      windSpeed: 12,
      precipitation: 0,
      riskLevel: 'medium'
    },
    {
      date: new Date(Date.now() + 86400000), // tomorrow
      temperature: 22,
      condition: 'cloudy',
      humidity: 75,
      windSpeed: 8,
      precipitation: 10,
      riskLevel: 'high'
    },
    {
      date: new Date(Date.now() + 86400000 * 2), // day after tomorrow
      temperature: 21,
      condition: 'rainy',
      humidity: 85,
      windSpeed: 15,
      precipitation: 40,
      riskLevel: 'high'
    },
    {
      date: new Date(Date.now() + 86400000 * 3),
      temperature: 20,
      condition: 'drizzle',
      humidity: 80,
      windSpeed: 10,
      precipitation: 15,
      riskLevel: 'medium'
    },
    {
      date: new Date(Date.now() + 86400000 * 4),
      temperature: 23,
      condition: 'sunny',
      humidity: 60,
      windSpeed: 5,
      precipitation: 0,
      riskLevel: 'low'
    },
  ];

  const getWeatherIcon = (condition: WeatherData['condition']) => {
    switch (condition) {
      case 'sunny':
        return <ThermometerSun className="h-6 w-6 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="h-6 w-6 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="h-6 w-6 text-blue-500" />;
      case 'stormy':
        return <CloudLightning className="h-6 w-6 text-purple-500" />;
      case 'drizzle':
        return <CloudDrizzle className="h-6 w-6 text-blue-400" />;
      case 'snow':
        return <CloudSnow className="h-6 w-6 text-blue-200" />;
      default:
        return <Cloud className="h-6 w-6" />;
    }
  };

  const getRiskBadgeClass = (risk: WeatherData['riskLevel']) => {
    switch (risk) {
      case 'high':
        return 'bg-alert-high text-white';
      case 'medium':
        return 'bg-alert-medium text-white';
      case 'low':
        return 'bg-alert-low text-black';
      case 'none':
        return 'bg-agroguardian-100 text-agroguardian-800';
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <div className="px-6 py-4 bg-agroguardian-50 border-b">
          <h2 className="text-lg font-medium">5-Day Weather Forecast</h2>
          <p className="text-sm text-muted-foreground">
            Hyperlocal AI-enhanced predictions for your farm
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <div className="flex min-w-max">
            {forecast.map((day, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex-1 p-4 flex flex-col items-center border-r min-w-[140px]",
                  index === 0 && "bg-gradient-to-b from-agroguardian-50/50 to-transparent"
                )}
              >
                <p className={cn(
                  "text-sm font-medium mb-1",
                  index === 0 && "text-agroguardian-800"
                )}>
                  {index === 0 ? 'Today' : day.date.toLocaleDateString('en-US', { weekday: 'short' })}
                </p>
                
                <div className="my-2">
                  {getWeatherIcon(day.condition)}
                </div>
                
                <p className="text-xl font-bold mb-1">{day.temperature}°C</p>
                
                <div className="flex justify-between w-full text-xs text-muted-foreground mt-2 mb-4">
                  <div className="flex items-center">
                    <Droplets className="h-3 w-3 mr-1" />
                    {day.humidity}%
                  </div>
                  <div className="flex items-center">
                    <Wind className="h-3 w-3 mr-1" />
                    {day.windSpeed} km/h
                  </div>
                </div>
                
                {day.riskLevel !== 'none' && (
                  <div className={cn(
                    "text-xs rounded-full px-3 py-0.5",
                    getRiskBadgeClass(day.riskLevel)
                  )}>
                    {day.riskLevel === 'high' ? 'High Risk' : 
                      day.riskLevel === 'medium' ? 'Medium Risk' : 'Low Risk'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherForecast;

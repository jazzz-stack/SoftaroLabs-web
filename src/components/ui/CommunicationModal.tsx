import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Phone, 
  MessageSquare, 
  Video, 
  Mail,
  ExternalLink,
  Users,
  Calendar,
  MessageCircle
} from 'lucide-react';

interface CommunicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const communicationPlatforms = [
  {
    name: 'Phone Call',
    description: 'Direct phone call',
    icon: <Phone className="w-6 h-6" />,
    action: () => window.open('tel:+918052004200', '_self'),
    color: 'bg-green-500 hover:bg-green-600',
    available: true
  },
  {
    name: 'Microsoft Teams',
    description: 'Video/voice call via Teams',
    icon: <Video className="w-6 h-6" />,
    action: () => window.open('https://teams.microsoft.com/l/chat/0/0?users=support@softarolabs.com', '_blank'),
    color: 'bg-blue-500 hover:bg-blue-600',
    available: true
  },
  {
    name: 'Skype',
    description: 'Voice/video call via Skype',
    icon: <Video className="w-6 h-6" />,
    action: () => window.open('skype:support@softarolabs.com?call', '_blank'),
    color: 'bg-sky-500 hover:bg-sky-600',
    available: true
  },
  {
    name: 'Google Meet',
    description: 'Schedule a Google Meet',
    icon: <Users className="w-6 h-6" />,
    action: () => window.open('https://meet.google.com/new?authuser=support@softarolabs.com', '_blank'),
    color: 'bg-red-500 hover:bg-red-600',
    available: true
  },
  {
    name: 'Slack',
    description: 'Connect via Slack workspace',
    icon: <MessageSquare className="w-6 h-6" />,
    action: () => window.open('https://slack.com/app_redirect?channel=@support@softarolabs.com', '_blank'),
    color: 'bg-purple-500 hover:bg-purple-600',
    available: true
  },
  {
    name: 'WhatsApp Business',
    description: 'Chat via WhatsApp',
    icon: <MessageCircle className="w-6 h-6" />,
    action: () => window.open('https://wa.me/918052004200?text=Hi%20Softaro%20Labs%2C%20I%27d%20like%20to%20discuss%20a%20project', '_blank'),
    color: 'bg-emerald-500 hover:bg-emerald-600',
    available: true
  },
  {
    name: 'Email',
    description: 'Send us an email',
    icon: <Mail className="w-6 h-6" />,
    action: () => {
      const email = 'support@softarolabs.com';
      
      // Try to copy email to clipboard
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          alert(`Email address copied to clipboard: ${email}\n\nYou can now paste it in your email client.`);
        }).catch(() => {
          // Fallback if clipboard API fails
          prompt('Copy this email address:', email);
        });
      } else {
        // Fallback for older browsers
        prompt('Copy this email address:', email);
      }
      
      // Also try to open mailto as backup
      setTimeout(() => {
        try {
          window.location.href = `mailto:${email}`;
        } catch (e) {
          console.log('Mailto not supported');
        }
      }, 1000);
    },
    color: 'bg-orange-500 hover:bg-orange-600',
    available: true
  },
  {
    name: 'Calendar Booking',
    description: 'Schedule a meeting',
    icon: <Calendar className="w-6 h-6" />,
    action: () => window.open('https://calendly.com/softarolabs/consultation', '_blank'),
    color: 'bg-indigo-500 hover:bg-indigo-600',
    available: true
  }
];

const CommunicationModal: React.FC<CommunicationModalProps> = ({ isOpen, onClose }) => {
  const handlePlatformClick = (platform: typeof communicationPlatforms[0]) => {
    platform.action();
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Choose Your Preferred Communication Platform
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Select how you'd like to connect with our team at Softaro Labs
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {communicationPlatforms.map((platform, index) => (
            <Card 
              key={index} 
              className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                platform.available ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
              }`}
              onClick={() => platform.available && handlePlatformClick(platform)}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl text-white ${platform.color} group-hover:scale-110 transition-transform`}>
                    {platform.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {platform.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="text-center">
            <h4 className="font-semibold text-blue-900 mb-2">
              📧 Email: support@softarolabs.com
            </h4>
            <p className="text-sm text-blue-700">
              Available 24/7 • Response within 2 hours • Free consultation
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <Button variant="outlined" onClick={onClose} className="px-8">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommunicationModal;
// components/Membership/BenefitsCard.tsx
import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
}

const Benefit = ({ icon, title }: BenefitProps) => {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer group">
      <div className="flex items-center gap-4">
        {icon}
        <span className="font-medium">{title}</span>
      </div>
      <ArrowRight className="h-5 w-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

const BenefitsCard = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold mb-6">Member benefits</h2>
        <div className="space-y-2">
          <Benefit
            icon={<span className="h-8 w-8 bg-blue-100 rounded-full" />}
            title="Spend wisely"
          />
          <Benefit
            icon={<span className="h-8 w-8 bg-blue-100 rounded-full" />}
            title="Get tailored answers"
          />
          <Benefit
            icon={<span className="h-8 w-8 bg-blue-100 rounded-full" />}
            title="Stay in the know"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BenefitsCard;

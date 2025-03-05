import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GearIcon } from "@radix-ui/react-icons";
import { MonitorSmartphone, Wrench } from "lucide-react";

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <Card className=" mx-auto flex flex-col justify-between hover:scale-105 ">
    <CardHeader className="text-start flex justify-start items-start">
      <div className="w-12 h-12 bg-primary/10  rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <CardTitle className="text-lg font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-start">
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default function Component() {
  const features = [
    {
      icon: GearIcon,
      title: "Automated Testing",
      description:
        "Run tests automatically to ensure continuous quality assurance.",
    },
    {
      icon: MonitorSmartphone,
      title: "Cross-Platform Support",
      description:
        "Ensure your software works across multiple devices and platforms.",
    },
    {
      icon: Wrench,
      title: "Customizable Test Scenarios",
      description:
        "Easily create and modify test cases to suit your business needs.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-10 px-3  ">
      <div className="flex flex-col justify-center items-center gap-10 max-w-screen-lg">
        <div className="text-center items-center flex flex-col gap-4">
          <p className="uppercase text-primary">Our Features</p>
          <p className="text-black text-3xl sm:text-4xl text-center font-semibold ">
            Powerful Tools for Automated Testing
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

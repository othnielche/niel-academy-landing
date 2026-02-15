import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type FeatureAdvantage = {
  title: string;
  description: string;
};

export type FeatureWithAdvantagesProps = {
  badge?: string;
  title?: string;
  description?: string;
  advantages?: FeatureAdvantage[];
};

const defaultAdvantages: FeatureAdvantage[] = [
  { title: "Easy to use", description: "We've made it easy to use and understand." },
  { title: "Fast and reliable", description: "We've made it fast and reliable." },
  { title: "Beautiful and modern", description: "We've made it beautiful and modern." },
  { title: "Easy to use", description: "We've made it easy to use and understand." },
  { title: "Fast and reliable", description: "We've made it fast and reliable." },
  { title: "Beautiful and modern", description: "We've made it beautiful and modern." },
];

function Feature({
  badge = "Platform",
  title = "Something new!",
  description = "Managing a small business today is already tough.",
  advantages = defaultAdvantages,
}: FeatureWithAdvantagesProps) {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>{badge}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-roboto-semibold text-neutral-900">
              {title}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed text-neutral-600 font-serif font-light">
              {description}
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              {advantages.map((item, index) => (
                <div key={index} className="flex flex-row gap-6 w-full items-start">
                  <Check className="w-4 h-4 mt-2 text-primary shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p className="font-roboto-semibold text-neutral-900">{item.title}</p>
                    <p className="text-neutral-600 text-sm font-serif font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };

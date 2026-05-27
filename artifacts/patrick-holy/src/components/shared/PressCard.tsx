import { PressArticle } from "@/types";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PressCardProps {
  article: PressArticle;
}

export default function PressCard({ article }: PressCardProps) {
  return (
    <Card className="border-l-4 border-l-accent overflow-hidden shadow-md">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3 font-medium">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                {article.source}
              </span>
              <span>{article.date}</span>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {article.title}
            </h3>
            
            <blockquote className="text-lg italic text-muted-foreground border-l-2 border-gray-200 pl-4 py-1 mb-6">
              "{article.excerpt}"
            </blockquote>
          </div>
          
          <div className="shrink-0 flex items-center">
            <Button asChild variant="outline" className="group">
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>Artikel lesen</span>
                <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

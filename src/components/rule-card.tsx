import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn, generateNameAbbr } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "./copy-button";
import type { Rule } from "@/data";
import { useEffect, useState } from "react";

export function RuleCard({ rule, isPage = false }: { rule: Rule; isPage?: boolean }) {
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    setOrigin(window?.location?.origin || '');
  }, []);

  return (
    <Card className="bg-background p-4 max-h-[calc(100vh-8rem)] aspect-square flex flex-col">
      <CardContent
        className={cn(
          "bg-card h-full mb-2 font-mono p-4 pr-1 text-sm opacity-50 hover:opacity-100 transition-opacity group relative flex-grow",
          isPage && "opacity-100",
        )}
      >
        <div className="group-hover:flex hidden right-4 bottom-4 absolute z-10 space-x-2">
          <div className="flex gap-2">
            <CopyButton 
              content={rule.content} 
              slug={rule.slug} 
              type="content" 
            />
            <CopyButton 
              content={origin} 
              slug={rule.slug} 
              type="url" 
            />
            <CopyButton 
              content={`${process.env.NEXT_PUBLIC_APP_URL || origin}/${rule.slug}`} 
              slug={rule.slug} 
              type="whatsapp" 
            />
          </div>
        </div>

        <ScrollArea className="h-full pr-3">
          <div className="space-y-4">
            {rule.title && (
              <CardHeader className="p-0">
                <CardTitle className="text-base font-medium">{rule.title}</CardTitle>
              </CardHeader>
            )}

            {rule.libs && rule.libs.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {rule.libs.map((lib) => (
                  <span
                    key={lib}
                    className="bg-muted px-2 py-1 rounded-md text-xs text-muted-foreground"
                  >
                    {lib}
                  </span>
                ))}
              </div>
            )}

            <pre className="whitespace-pre-wrap break-words font-mono text-xs">
              {rule.content}
            </pre>
          </div>
        </ScrollArea>
      </CardContent>

      <div className="flex items-center justify-between">
        <Link
          href={rule.author.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Avatar className="h-6 w-6">
            <AvatarImage src={rule.author.avatar} alt={rule.author.name} />
            <AvatarFallback>{generateNameAbbr(rule.author.name)}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{rule.author.name}</span>
        </Link>

        {!isPage && (
          <Link href={`/${rule.slug}`}>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </Link>
        )}
      </div>
    </Card>
  );
}

"use client";

import { SearchInput } from "@/components/search-input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getSections } from "@/data";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Section } from "@/data";

export function Menu() {
  const router = useRouter();
  const [sections, setSections] = useState<Section[]>([]);
  const [allSections, setAllSections] = useState<Section[]>([]);

  useEffect(() => {
    const loadSections = async () => {
      const data = await getSections();
      setSections(data);
      setAllSections(data);
    };
    loadSections();
  }, []);

  const handleClick = (title: string) => {
    router.push("/", { scroll: false });

    const element = document.getElementById(title);
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 56,
      behavior: "smooth",
    });

    clearSearch();
  };

  const clearSearch = () => {
    setSections(allSections);
  };

  return (
    <aside className="w-64 p-4 flex flex-col">
      <SearchInput
        onSearch={(term) =>
          setSections(
            allSections.filter((section) =>
              section.title.toLowerCase().includes(term.toLowerCase()),
            ),
          )
        }
        clearSearch={clearSearch}
      />

      <Separator className="my-4" />

      <ScrollArea className="flex-1">
        <div className="space-y-2">
          {sections.map((section) => (
            <Button
              key={section.title}
              variant="ghost"
              className="w-full justify-start font-normal"
              onClick={() => handleClick(section.title)}
            >
              {section.title}
              <span className="ml-auto text-muted-foreground">
                {section.items.length}
              </span>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
}

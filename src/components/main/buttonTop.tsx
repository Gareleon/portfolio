import { ChevronUpCircleIcon } from "lucide-react";

export function ButtonScrollTop() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
      <a href="#" title="Scroll to top">
        <ChevronUpCircleIcon size={35} className="hover:text-primary" />
      </a>
    </div>
  );
}

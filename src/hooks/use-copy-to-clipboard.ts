import { useEffect, useState } from "react";

export const useCopyToClipboard = () => {
  const [copyLinkContact, setCopyLinkContact] = useState<string | null>("");

  const handleCopyLinkContact = (link: string, id: string) => {
    if (link) {
      navigator.clipboard.writeText(link);
      try {
        setCopyLinkContact(id);
      } catch (error) {
        alert("Erro ao copiar link");
      }
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "c") {
        setCopyLinkContact("0");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return {copyLinkContact, handleCopyLinkContact, setCopyLinkContact}
}

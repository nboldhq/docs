import { Chip } from '@heroui/react';

export const NBoldTag = ({ tagName }: { tagName: string }) => {
  return (
    <Chip
      className="bg-gradient-to-r from-[#ff6a00] via-[#ff1c68] to-[#ff0000] text-white text-xs p-1.5 shadow-lg"
      size="sm"
    >
      {tagName}
    </Chip>
  );
};

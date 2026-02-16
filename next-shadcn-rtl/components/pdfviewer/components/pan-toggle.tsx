import { usePan } from '@embedpdf/plugin-pan/react';
import { HandIcon } from './icons';
import { ToolbarButton } from './ui';

type PanToggleButtonProps = {
  documentId: string;
};

export function PanToggleButton({ documentId }: PanToggleButtonProps) {
  const { provides: pan, isPanning } = usePan(documentId);

  if (!pan) return null;

  return (
    <ToolbarButton
      onClick={pan.togglePan}
      isActive={isPanning}
      aria-label="Toggle Pan"
      title="لغزش با (دست)"
    >
      <HandIcon className="h-4 w-4" title="لفزش" />
    </ToolbarButton>
  );
}

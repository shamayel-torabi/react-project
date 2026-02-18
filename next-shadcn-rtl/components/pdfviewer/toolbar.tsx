import { LucideSidebar } from 'lucide-react';
import { Button } from '../ui/button';
import { ZoomToolbar } from './zoom-toolbar';
import { Separator } from '../ui/separator';

type Props = {
    documentId: string;
    onToggleThumbnails: () => void;
}

const Toolbar = ({ documentId, onToggleThumbnails }: Props) => {
    return (
        <div className="flex flex-wrap items-center gap-3 border-b border-gray-300 bg-gray-100 px-3 py-2 dark:border-gray-700 dark:bg-gray-800">
            <Button
                variant="ghost"
                title=''
                onClick={onToggleThumbnails}>
                <LucideSidebar size={12} />
            </Button>
            <div className='h-6'>
                <Separator orientation="vertical" />
            </div>
            <ZoomToolbar documentId={documentId} />
            <div className='h-6'>
                <Separator orientation="vertical" />
            </div>
        </div>
    )
}

export default Toolbar
import { Suspense } from 'react';

import NotionContentServer from './NotionContentServer';

export default function NotionWrapper({ notionId }: { notionId: string }) {
    return (
        <Suspense
            fallback={
                <div className='h-full flex flex-col items-center justify-center gap-4'>
                    <p className='text-sm text-muted-foreground'>
                        Notion 페이지 불러오는 중...
                    </p>
                    <div className='w-60 h-1.5 rounded bg-muted/40 overflow-hidden'>
                        <div className='h-full w-full bg-primary animate-[progress_1.5s_ease-in-out_infinite]' />
                    </div>
                </div>
            }
        >
            <NotionContentServer notionId={notionId} />
        </Suspense>
    );
}

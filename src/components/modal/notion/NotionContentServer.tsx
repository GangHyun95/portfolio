import { NotionAPI } from 'notion-client';
import type { ExtendedRecordMap } from 'notion-types';

import NotionContentClient from './NotionContentClient';

export default async function NotionContentServer({ notionId }: { notionId: string }) {
    const notion = new NotionAPI();
    const recordMap: ExtendedRecordMap = await notion.getPage(notionId);

    return <NotionContentClient recordMap={recordMap} />;
}

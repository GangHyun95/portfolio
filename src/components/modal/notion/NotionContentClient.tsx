'use client';

import type { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';

export default function NotionContentClient({ recordMap }: { recordMap: ExtendedRecordMap }) {
    return <NotionRenderer recordMap={recordMap} fullPage={false} />;
}

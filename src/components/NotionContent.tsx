'use client';

import type { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';

export default function NotionContent({ recordMap }: { recordMap: ExtendedRecordMap }) {
    return <NotionRenderer recordMap={recordMap} fullPage={false} />;
}

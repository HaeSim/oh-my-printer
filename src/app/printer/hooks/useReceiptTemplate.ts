// src/app/(notLogin)/printer/hooks/useReceiptTemplate.ts
import { useEffect, useState } from 'react';
import { type ReactElement } from 'react';

import { generateReceipt } from '../templates/receiptTemplate';

export const useReceiptTemplate = () => {
  const [receiptJSX, setReceiptJSX] = useState<ReactElement | null>(null);
  const [receiptContent, setReceiptContent] = useState<Uint8Array | null>(null);

  useEffect(() => {
    const loadReceipt = async () => {
      const { jsx, content } = await generateReceipt();
      setReceiptJSX(jsx);
      setReceiptContent(content);
    };
    void loadReceipt();
  }, []);

  return { receiptJSX, receiptContent };
};
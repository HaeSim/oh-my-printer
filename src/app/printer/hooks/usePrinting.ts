// src/app/(notLogin)/printer/hooks/usePrinting.ts
import { useState } from 'react';

import { type PrinterSettings } from '../types/printerTypes';
import { sendToNetworkPrinter, sendToSerialPrinter, sendToUSBPrinter } from '../utils/printerUtils';
import { type TemplateType } from './useTemplateSelection';

export const usePrinting = (
  printerSettings: PrinterSettings,
  generateReceipt: (templateType: TemplateType) => Promise<{ jsx: React.ReactElement; content: Uint8Array }>
) => {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = async (templateType: TemplateType) => {
    setIsPrinting(true);
    try {
      const { content: receiptData } = await generateReceipt(templateType);
      
      switch (printerSettings.mode) {
      case 'network':
        await sendToNetworkPrinter(receiptData, printerSettings.network);
        break;
      case 'serial':
        await sendToSerialPrinter(receiptData, printerSettings.serial);
        break;
      case 'usb':
        await sendToUSBPrinter(receiptData);
        break;
      }
      alert('티켓이 인쇄되었습니다!');
    } catch (error) {
      console.error('Printing error:', error);
      alert('인쇄 중 오류가 발생했습니다.');
    } finally {
      setIsPrinting(false);
    }
  };

  return { isPrinting, handlePrint };
};
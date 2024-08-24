import { useState } from 'react';

import { type PrinterSettings } from '../types/printerTypes';

export const usePrinterSettings = () => {
  const [printerSettings, setPrinterSettings] = useState<PrinterSettings>({
    mode: 'network',
    network: { ip: '192.168.192.123', port: '9100' },
    serial: { baudRate: '9600' },
  });

  const updatePrinterSettings = (newSettings: Partial<PrinterSettings>) => {
    setPrinterSettings((prevSettings) => ({ ...prevSettings, ...newSettings }));
  };

  return { printerSettings, updatePrinterSettings };
};
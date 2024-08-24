// src/app/printer/page.tsx
'use client';
import React from 'react';
import PrintButton from './components/PrintButton';
import PrinterSettings from './components/PrinterSettings';
import ReceiptPreview from './components/ReceiptPreview';
import TemplateSelector from './components/TemplateSelector';
import { usePrinterSettings } from './hooks/usePrinterSettings';
import { usePrinting } from './hooks/usePrinting';
import { useTemplateSelection } from './hooks/useTemplateSelection';

export default function PrinterPage() {
  const { printerSettings, updatePrinterSettings } = usePrinterSettings();
  const { selectedTemplate, selectTemplate, generateSelectedReceipt } = useTemplateSelection();
  const { isPrinting, handlePrint } = usePrinting(printerSettings, generateSelectedReceipt);

  const handlePrintClick = () => {
    void handlePrint(selectedTemplate);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6 dark:from-gray-800 dark:to-indigo-900">
      <div className="w-full max-w-6xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-indigo-800 dark:text-indigo-200">
          티켓 프린터
        </h1>
        <div className="overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-gray-800">
          <div className="flex flex-col md:flex-row">
            <div className="w-full p-6 md:w-1/2 md:border-r md:border-gray-200 md:dark:border-gray-700">
              <div className="space-y-6">
                <PrinterSettings
                  settings={printerSettings}
                  onUpdateSettings={updatePrinterSettings}
                />
                <TemplateSelector
                  selectedTemplate={selectedTemplate}
                  onSelectTemplate={selectTemplate}
                />
                <PrintButton onPrint={handlePrintClick} isPrinting={isPrinting} />
              </div>
            </div>
            <div className="w-full bg-gray-50 p-6 dark:bg-gray-900 md:w-1/2">
              <ReceiptPreview templateType={selectedTemplate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// src/app/printer/components/ReceiptPreview.tsx
import { FC, ReactElement, useEffect, useState } from 'react';
import { useTemplateSelection } from '../hooks/useTemplateSelection';

interface ReceiptPreviewProps {
  templateType: 'yearEnd' | 'birthday' | 'welcome';
}

const ReceiptPreview: FC<ReceiptPreviewProps> = ({ templateType }) => {
  const { generateSelectedReceipt } = useTemplateSelection();
  const [receiptJSX, setReceiptJSX] = useState<ReactElement | null>(null);

  useEffect(() => {
    const loadReceipt = async () => {
      const { jsx } = await generateSelectedReceipt(templateType);
      setReceiptJSX(jsx);
    };
    void loadReceipt();
  }, [templateType, generateSelectedReceipt]);

  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700">
      <h2 className="mb-4 border-b border-gray-300 p-4 text-center text-xl font-semibold text-gray-700 dark:border-gray-600 dark:text-gray-300">
        영수증 미리보기
      </h2>
      <div className="flex-1 overflow-auto p-4">
        <div className="mx-auto max-w-[300px] whitespace-pre-wrap rounded-lg border border-gray-200 bg-white p-4 font-mono text-sm text-gray-800 shadow-inner dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
          {receiptJSX}
        </div>
      </div>
    </div>
  );
};

export default ReceiptPreview;
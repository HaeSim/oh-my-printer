// src/app/(notLogin)/printer/hooks/useTemplateSelection.ts
import { useCallback, useState } from 'react';

import { generateBirthdayReceipt } from '../templates/birthdayReceiptTemplate';
import { generateReceipt as generateYearEndReceipt } from '../templates/receiptTemplate';
import { generateWelcomeReceipt } from '../templates/welcomeReceiptTemplate';

export type TemplateType = 'yearEnd' | 'birthday' | 'welcome';

const templates = {
  yearEnd: generateYearEndReceipt,
  birthday: generateBirthdayReceipt,
  welcome: generateWelcomeReceipt,
};

export const useTemplateSelection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('yearEnd');

  const selectTemplate = (templateType: TemplateType) => {
    setSelectedTemplate(templateType);
  };

  const generateSelectedReceipt = useCallback((templateType: TemplateType) => {
    return templates[templateType]();
  }, []);

  return { selectedTemplate, selectTemplate, generateSelectedReceipt };
};
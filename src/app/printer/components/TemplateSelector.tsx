import { FC } from 'react';

type TemplateType = 'yearEnd' | 'birthday' | 'welcome';

interface TemplateSelectorProps {
  selectedTemplate: TemplateType;
  onSelectTemplate: (template: TemplateType) => void;
}

const TemplateSelector: FC<TemplateSelectorProps> = ({ selectedTemplate, onSelectTemplate }) => {
  return (
    <div className="mb-4">
      <label htmlFor="template-select" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
        템플릿 선택
      </label>
      <select
        id="template-select"
        value={selectedTemplate}
        onChange={(e) => onSelectTemplate(e.target.value as TemplateType)}
        className="w-full rounded-md border border-gray-300 bg-white p-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
      >
        <option value="yearEnd">송년회 티켓</option>
        <option value="birthday">생일 축하 티켓</option>
        <option value="welcome">환영 티켓</option>
      </select>
    </div>
  );
};

export default TemplateSelector;
import { type PrinterSettings as Settings } from '../types/printerTypes';

interface PrinterSettingsProps {
  settings: Settings;
  onUpdateSettings: (settings: Partial<Settings>) => void;
}

const PrinterSettings: React.FC<PrinterSettingsProps> = ({ settings, onUpdateSettings }) => {
  return (
    <div className="mb-6">
      <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">프린터 설정</h2>
      <div className="mb-4 flex justify-between">
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="network"
            checked={settings.mode === 'network'}
            onChange={() => onUpdateSettings({ mode: 'network' })}
            className="text-blue-600 dark:text-blue-400"
          />
          <span className="ml-2 text-gray-700 dark:text-gray-300">네트워크 프린터</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="serial"
            checked={settings.mode === 'serial'}
            onChange={() => onUpdateSettings({ mode: 'serial' })}
            className="text-blue-600 dark:text-blue-400"
          />
          <span className="ml-2 text-gray-700 dark:text-gray-300">시리얼 프린터</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="usb"
            checked={settings.mode === 'usb'}
            onChange={() => onUpdateSettings({ mode: 'usb' })}
            className="text-blue-600 dark:text-blue-400"
          />
          <span className="ml-2 text-gray-700 dark:text-gray-300">USB 프린터</span>
        </label>
      </div>
      {settings.mode === 'network' && (
        <>
          <div className="mb-2">
            <label htmlFor="ip-address" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              IP 주소
            </label>
            <input
              id="ip-address"
              type="text"
              value={settings.network.ip}
              onChange={(e) => onUpdateSettings({ network: { ...settings.network, ip: e.target.value } })}
              className="w-full rounded-md border border-gray-300 bg-gray-100 p-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <label htmlFor="port" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              포트
            </label>
            <input
              id="port"
              type="text"
              value={settings.network.port}
              onChange={(e) => onUpdateSettings({ network: { ...settings.network, port: e.target.value } })}
              className="w-full rounded-md border border-gray-300 bg-gray-100 p-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>
        </>
      )}
      {settings.mode === 'serial' && (
        <div>
          <label htmlFor="baud-rate" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Baud Rate
          </label>
          <input
            id="baud-rate"
            type="text"
            value={settings.serial.baudRate}
            onChange={(e) => onUpdateSettings({ serial: { baudRate: e.target.value } })}
            className="w-full rounded-md border border-gray-300 bg-gray-100 p-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
          />
        </div>
      )}
    </div>
  );
};

export default PrinterSettings;
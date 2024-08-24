interface PrintButtonProps {
  onPrint: () => void;
  isPrinting: boolean;
}

const PrintButton: React.FC<PrintButtonProps> = ({ onPrint, isPrinting }) => {
  return (
    <button 
      onClick={onPrint} 
      disabled={isPrinting}
      className={`mt-4 w-full rounded-lg py-2 font-bold text-white transition-all ${
        isPrinting ? 'bg-gray-400 dark:bg-gray-600' : 'bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700'
      }`}
    >
      {isPrinting ? '인쇄 중...' : '티켓 인쇄'}
    </button>
  );
};

export default PrintButton;
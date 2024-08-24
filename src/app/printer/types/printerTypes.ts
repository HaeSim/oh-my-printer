export type PrinterMode = 'network' | 'serial' | 'usb';

export interface NetworkSettings {
  ip: string;
  port: string;
}

export interface SerialSettings {
  baudRate: string;
}

export interface PrinterSettings {
  mode: PrinterMode;
  network: NetworkSettings;
  serial: SerialSettings;
}


// src/utils/printerUtils.ts

import { type NetworkSettings, type SerialSettings } from '../types/printerTypes';

export const sendToNetworkPrinter = async (data: Uint8Array, settings: NetworkSettings) => {
  const response = await fetch('/api/print', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: Array.from(data),
      ip: settings.ip,
      port: parseInt(settings.port),
    }),
  });

  if (!response.ok) {
    throw new Error('Network printing failed');
  }
};

export const sendToSerialPrinter = async (data: Uint8Array, settings: SerialSettings) => {
  try {
    const port = await navigator.serial.requestPort();
    await port.open({ baudRate: parseInt(settings.baudRate) });

    const writer = port.writable?.getWriter();
    if (writer) {
      await writer.write(data);
      writer.releaseLock();
    } else {
      throw new Error('Failed to get writer');
    }

    await port.close();
  } catch (error) {
    console.error('Serial printing error:', error);
    throw new Error('Serial printing failed');
  }
};

export const sendToUSBPrinter = async (data: Uint8Array) => {
  try {
    const device = await navigator.usb.requestDevice({ filters: [] });
    await device.open();
    await device.selectConfiguration(1);
    await device.claimInterface(0);

    const endpointNumber = 2;
    await device.transferOut(endpointNumber, data);

    await device.close();
  } catch (error) {
    console.error('USB printing error:', error);
    throw new Error('USB printing failed');
  }
};
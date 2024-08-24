import React from 'react';
import { Br, Cut, Line, Printer, QRCode, render, Text } from 'react-thermal-printer';

export const generateReceipt = async () => {
  const jsx = (
    <Printer type="epson" width={42} characterSet="korea">
      <Text align="center" size={{ width: 2, height: 2 }}>2023 송년회</Text>
      <Br />
      <Line />
      <Text align="center" bold={true}>* 경품 추첨 이벤트 *</Text>
      <Br />
      <Text align="center">QR 코드를 스캔하여</Text>
      <Text align="center">경품 추첨에 참여하세요!</Text>
      <Br />
      <QRCode content="https://example.com/raffle/2023" align="center" cellSize={8} correction='H' />
      <Br />
      <Text align="center" size={{width: 1, height: 1}}>추첨일: 2023-12-31</Text>
      <Br />
      <Line />
      <Br />
      <Text align="center">행복한 연말 보내세요!</Text>
      <Cut />
    </Printer>
  );

  const content = await render(jsx);

  return { jsx, content };
};
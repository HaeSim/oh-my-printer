// src/app/(notLogin)/printer/templates/welcomeReceiptTemplate.tsx
import React from 'react';
import { Br, Cut, Line, Printer, render, Text } from 'react-thermal-printer';

export const generateWelcomeReceipt = async () => {
  const jsx = (
    <Printer type="epson" width={42} characterSet="korea">
      <Text align="center" size={{ width: 2, height: 2 }}>환영합니다!</Text>
      <Br />
      <Line />
      <Text align="center" bold={true}>* 신규 회원 특별 혜택 *</Text>
      <Br />
      <Text align="center">이 티켓으로 첫 구매 시</Text>
      <Text align="center">10% 할인을 받으세요!</Text>
      <Br />
      <Text align="center" size={{width: 1, height: 1}}>쿠폰 코드: WELCOME2023</Text>
      <Br />
      <Line />
      <Br />
      <Text align="center">우리와 함께해 주셔서 감사합니다!</Text>
      <Cut />
    </Printer>
  );

  const content = await render(jsx);

  return { jsx, content };
};
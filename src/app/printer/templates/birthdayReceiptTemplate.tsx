import React from 'react';
import { Br, Cut, Line, Printer, render, Text } from 'react-thermal-printer';

export const generateBirthdayReceipt = async () => {
  const jsx = (
    <Printer type="epson" width={42} characterSet="korea">
      <Text align="center" size={{ width: 2, height: 2 }}>생일 축하합니다!</Text>
      <Br />
      <Line />
      <Text align="center" bold={true}>* 특별한 생일 쿠폰 *</Text>
      <Br />
      <Text align="center">이 쿠폰으로 생일 케이크</Text>
      <Text align="center">1개를 무료로 받으세요!</Text>
      <Br />
      <Text align="center" size={{width: 1, height: 1}}>유효기간: 발급일로부터 7일</Text>
      <Br />
      <Line />
      <Br />
      <Text align="center">당신의 특별한 날을 축하합니다!</Text>
      <Cut />
    </Printer>
  );

  const content = await render(jsx);

  return { jsx, content };
};
import { connect } from 'net';
import { type NextRequest, NextResponse } from 'next/server';

// Define the expected structure of the incoming JSON data
interface PrintRequest {
  data: number[]; // Array of numbers representing the Uint8Array
  ip: string;
  port: number;
}

export async function POST(req: NextRequest) {
  try {
    // Safely parse the JSON and assert its type
    const body: PrintRequest = await req.json();

    const { data, ip, port } = body;

    return new Promise((resolve) => {
      const conn = connect({
        host: ip, // Use the IP from the request
        port: port || 9100, // Use the provided port, or default to 9100
        timeout: 3000,
      }, () => {
        conn.write(Buffer.from(new Uint8Array(data)), (err) => {
          if (err) {
            console.error('Printing error:', err);
            resolve(NextResponse.json({ error: 'Printing failed' }, { status: 500 }));
          } else {
            resolve(NextResponse.json({ message: 'Printed successfully' }, { status: 200 }));
          }
          conn.destroy();
        });
      });

      conn.on('error', (err) => {
        console.error('Connection error:', err);
        resolve(NextResponse.json({ error: 'Connection failed' }, { status: 500 }));
      });
    });
  } catch (error) {
    console.error('Request handling error:', error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
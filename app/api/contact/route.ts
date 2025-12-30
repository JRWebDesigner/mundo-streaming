import { db } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validar que los campos requeridos estén presentes
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Guardar el mensaje en el JSON
    await db.addContactMessage(data);

    return NextResponse.json(
      { success: true, message: 'Mensaje guardado exitosamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json(
      { error: 'Error al guardar el mensaje' },
      { status: 500 }
    );
  }
}

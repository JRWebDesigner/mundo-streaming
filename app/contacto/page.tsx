'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Error al enviar el mensaje');

      toast.success('Mensaje enviado exitosamente', {
        description: 'Nos pondremos en contacto contigo pronto.',
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Error al enviar el mensaje', {
        description: 'Por favor, intenta nuevamente o contáctanos por WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5491234567890';
    const message = encodeURIComponent('Hola! Me gustaría obtener más información sobre sus servicios.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <Toaster />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-blue-900 md:text-5xl">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Envíanos un mensaje o contáctanos directamente por WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col items-center text-center space-y-4 border-blue-900/20 hover:shadow-lg transition-all">
              <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Teléfono</h3>
                <p className="text-gray-600 mt-2">+54 9 11 1234-5678</p>
              </div>
            </Card>

            <Card className="p-6 flex flex-col items-center text-center space-y-4 border-blue-900/20 hover:shadow-lg transition-all">
              <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Email</h3>
                <p className="text-gray-600 mt-2">info@mundostreaming.com</p>
              </div>
            </Card>

            <Card className="p-6 flex flex-col items-center text-center space-y-4 border-blue-900/20 hover:shadow-lg transition-all">
              <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Ubicación</h3>
                <p className="text-gray-600 mt-2">Buenos Aires, Argentina</p>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 border-blue-900/20">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Envíanos un Mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="border-blue-900/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="border-blue-900/20"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+54 9 11 1234-5678"
                    className="border-blue-900/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="¿En qué podemos ayudarte?"
                    rows={5}
                    className="border-blue-900/20"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-br from-blue-900 to-blue-700 text-white border-0">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-center mb-4">
                  ¿Necesitas Ayuda Inmediata?
                </h2>
                <p className="text-center text-blue-100 mb-6">
                  Chatea con nosotros por WhatsApp y recibe atención personalizada al instante
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-white text-blue-900 hover:bg-gray-100"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Abrir WhatsApp
                </Button>
              </Card>

              <Card className="p-8 border-blue-900/20">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Horarios de Atención
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span className="font-semibold">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-semibold">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="font-semibold">10:00 AM - 2:00 PM</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <strong>WhatsApp 24/7:</strong> Disponible en cualquier momento
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

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
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '59169705031';
    const message = encodeURIComponent('Hola! Me gustaría obtener más información sobre sus servicios.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <Toaster />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-900 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Envíanos un mensaje o contáctanos directamente por WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-blue-900/40 to-blue-900/20 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-blue-600/10 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Teléfono</h3>
                  <p className="text-gray-900 mt-2">+591 69705031</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:to-purple-600/10 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Email</h3>
                  <p className="text-gray-900 mt-2">info@mundostreaming.com</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-pink-900/40 to-pink-900/20 border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/0 to-pink-600/0 group-hover:from-pink-600/10 group-hover:to-pink-600/10 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Ubicación</h3>
                  <p className="text-gray-900 mt-2">Bolivia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl p-8 border border-purple-500/30 bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Envíanos un Mensaje
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre Completo
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-500 focus:border-purple-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-500 focus:border-purple-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+591 69705031"
                      className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-500 focus:border-purple-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="¿En qué podemos ayudarte?"
                      rows={5}
                      className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-500 focus:border-purple-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 rounded-lg font-semibold"
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
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-blue-900 to-purple-900 text-white border border-purple-500/30">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
                <div className="relative z-10 flex flex-col items-center justify-center space-y-6 text-center">
                  <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      ¿Necesitas Ayuda Inmediata?
                    </h2>
                    <p className="text-gray-300">
                      Chatea con nosotros por WhatsApp y recibe atención personalizada al instante
                    </p>
                  </div>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-white text-blue-900 hover:bg-gray-100 rounded-lg font-semibold"
                    size="lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Abrir WhatsApp
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl p-8 border border-purple-500/30 bg-gradient-to-br from-slate-800 to-slate-900">
                <h3 className="text-xl font-bold text-white mb-6">
                  Horarios de Atención
                </h3>
                <div className="space-y-4 text-gray-400">
                  <div className="flex justify-between items-center pb-3 border-b border-purple-500/20">
                    <span className="text-gray-300">Lunes - Viernes:</span>
                    <span className="font-semibold text-white">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-purple-500/20">
                    <span className="text-gray-300">Sábados:</span>
                    <span className="font-semibold text-white">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Domingos:</span>
                    <span className="font-semibold text-white">10:00 AM - 2:00 PM</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-600/20 border border-purple-500/30 rounded-lg">
                  <p className="text-sm text-purple-300">
                    <strong>💬 WhatsApp 24/7:</strong> Disponible en cualquier momento
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

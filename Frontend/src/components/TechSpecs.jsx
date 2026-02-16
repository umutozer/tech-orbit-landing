import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const TechSpecs = () => {
  const specs = [
    { title: 'Ekran', orbit: 'OLED Pro Motion 120Hz', standard: 'LCD 60Hz' },
    { title: 'İşlemci', orbit: 'A1 Orbit Bionic (4nm)', standard: 'Generic Octa-core' },
    { title: 'Batarya', orbit: '5000 mAh + 100W Hızlı Şarj', standard: '4000 mAh + 18W' },
    { title: 'Kamera', orbit: '108MP Üçlü Lens Sistemi', standard: '12MP Tek Lens' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Neden Orbit?</h2>
        <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-2xl">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-6 text-lg">Özellik</th>
                <th className="p-6 text-lg text-secondary">Tech Orbit V2</th>
                <th className="p-6 text-lg text-gray-400">Standart</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {specs.map((spec, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-bold text-primary">{spec.title}</td>
                  <td className="p-6 flex items-center gap-2 text-primary">
                    <CheckCircle2 size={18} className="text-secondary" />
                    {spec.orbit}
                  </td>
                  <td className="p-6 text-gray-500">{spec.standard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
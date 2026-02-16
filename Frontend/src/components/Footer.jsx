import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darkBg text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-2xl font-bold">TECH<span className="text-secondary">ORBIT</span></h3>
          <p className="text-gray-500 mt-2">Yarının teknolojisi, bugünün tasarımı.</p>
        </div>
        <div className="flex gap-8 text-sm text-gray-400 font-medium">
          <a href="#" className="hover:text-secondary">Gizlilik Politikası</a>
          <a href="#" className="hover:text-secondary">Kullanım Koşulları</a>
          <a href="#" className="hover:text-secondary">KVKK</a>
        </div>
        <div className="text-gray-500 text-sm">
          &copy; 2023 Tech Orbit Inc. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;